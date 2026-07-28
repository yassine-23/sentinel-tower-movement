'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';
import type { MotionValue } from 'framer-motion';

/* ---------- scroll helpers ---------- */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const remap = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));
const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const BLADE_LENGTH = 9;
const SEGMENT_LENGTH = BLADE_LENGTH / 3;
const FIRE_POSITION = new THREE.Vector3(8.5, 0.8, -7.5);

/**
 * Narrative timeline (scroll progress t in 0..1):
 *   Act 1  0.00–0.20  blade rotates on display
 *   Act 2  0.22–0.40  blade is cut into segments (end of life)
 *   Act 3  0.42–0.62  segments are buried underground (landfill)
 *   Act 4  0.64–0.85  blade rises back up, reassembles, stands vertical
 *   Finale 0.84–1.00  sensor head powers on, wildfire is detected
 */
const timeline = (t: number) => ({
  turn: 1 - smooth(remap(t, 0.15, 0.3)), // turntable speed factor
  cut: smooth(remap(t, 0.22, 0.4)), // disassembly
  bury: smooth(remap(t, 0.42, 0.62)), // sinking underground
  rise: smooth(remap(t, 0.64, 0.74)), // resurrection + reassembly
  stand: smooth(remap(t, 0.72, 0.86)), // becoming a vertical mast
  head: smooth(remap(t, 0.84, 0.94)), // sensor head powers on
  detect: remap(t, 0.86, 1), // detection demo
});

type SceneProps = {
  /** Scroll progress 0..1 driving the narrative */
  progress: MotionValue<number>;
};

/**
 * The blade: three cut-able segments (long axis = local Y) that rotate on
 * display, are sawn apart, buried, then raised again as the sentinel's mast.
 */
function Blade({ progress }: SceneProps) {
  const root = useRef<THREE.Group>(null);
  const blade = useRef<THREE.Group>(null);
  const platform = useRef<THREE.Group>(null);
  const segments = useRef<(THREE.Group | null)[]>([]);

  useFrame(({ clock }) => {
    const t = progress.get();
    const { turn, cut, bury, rise, stand } = timeline(t);
    const time = clock.getElapsedTime();

    if (root.current) {
      // Slow turntable during act 1 that eases to a stop
      root.current.rotation.y = time * 0.2 * turn;
    }
    if (blade.current) {
      // Surface -> buried (just deep enough to vanish) -> raised again; flat -> vertical
      let y = lerp(1.0, -2.6, bury);
      y = lerp(y, BLADE_LENGTH / 2 + 0.3, rise);
      blade.current.position.y = y;
      blade.current.rotation.z = lerp(Math.PI / 2, 0, stand);
    }
    if (platform.current) {
      // Display stand in act 1, swallowed during the burial, back as tower base
      let p = lerp(1, 0.001, bury);
      p = lerp(p, 1, rise);
      platform.current.scale.setScalar(Math.max(0.001, p));
    }
    // Segments: sawn apart in act 2, reassembled in act 4
    const offsets = [-2.4, 0, 2.4];
    const tilts = [0.18, 0, -0.14];
    segments.current.forEach((seg, i) => {
      if (!seg) return;
      const spread = cut * (1 - rise);
      seg.position.y = (i - 1) * SEGMENT_LENGTH + offsets[i] * spread;
      seg.rotation.x = tilts[i] * spread;
      seg.rotation.z = tilts[i] * 0.6 * spread;
    });
  });

  // Root (thickest) -> tip (thinnest), stacked along local Y
  const segmentRadii: [number, number][] = [
    [0.37, 0.55],
    [0.24, 0.37],
    [0.1, 0.24],
  ];

  return (
    <group ref={root}>
      {/* Base platform / display stand */}
      <group ref={platform}>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[1.7, 2, 0.3, 32]} />
          <meshStandardMaterial color="#1a2f20" roughness={0.9} />
        </mesh>
      </group>

      {/* The blade itself */}
      <group ref={blade} rotation={[0, 0, Math.PI / 2]} position={[0, 1, 0]}>
        {segmentRadii.map(([top, bottom], i) => (
          <group key={i} ref={(el) => { segments.current[i] = el; }} position={[0, (i - 1) * SEGMENT_LENGTH, 0]}>
            <mesh>
              <cylinderGeometry args={[top, bottom, SEGMENT_LENGTH, 24]} />
              <meshStandardMaterial color="#cfd4d0" roughness={0.55} metalness={0.15} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

/** Sensor head that powers on once the mast stands (dome, camera pod, solar ring, antenna) */
function SensorHead({ progress }: SceneProps) {
  const head = useRef<THREE.Group>(null);
  const domeMaterial = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    const t = progress.get();
    const { head: headOn, detect } = timeline(t);
    const time = clock.getElapsedTime();

    if (head.current) {
      head.current.scale.setScalar(Math.max(0.001, headOn));
      head.current.position.y = BLADE_LENGTH + 0.3;
    }
    if (domeMaterial.current) {
      // Forest green on watch, flashing ember red once the fire is spotted
      const alert = smooth(remap(detect, 0.5, 0.8));
      const flash = alert * (0.5 + 0.5 * Math.sin(time * 10));
      const color = new THREE.Color('#2ecc71').lerp(new THREE.Color('#ff6b35'), flash);
      domeMaterial.current.emissive.copy(color);
      domeMaterial.current.emissiveIntensity = 0.6 + alert * 1.4;
    }
  });

  return (
    <group ref={head} scale={0.001}>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          ref={domeMaterial}
          color="#0e1a12"
          emissive="#2ecc71"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[0.5, 0.6, 0.5]} />
        <meshStandardMaterial color="#234029" roughness={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <torusGeometry args={[0.9, 0.08, 12, 40]} />
        <meshStandardMaterial color="#132217" roughness={0.4} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.9, 8]} />
        <meshStandardMaterial color="#e9efe9" roughness={0.5} />
      </mesh>
    </group>
  );
}

/** The landfill pit that opens during the burial and closes as the blade rises */
function BurialPit({ progress }: SceneProps) {
  const pit = useRef<THREE.Mesh>(null);
  const dust = useRef<THREE.Group>(null);

  useFrame(() => {
    const t = progress.get();
    const { bury, rise } = timeline(t);
    const open = bury * (1 - rise);
    if (pit.current) {
      pit.current.scale.setScalar(Math.max(0.001, open * 7));
    }
    if (dust.current) {
      dust.current.visible = open > 0.05;
      const s = Math.max(0.001, Math.min(1, open * 1.4));
      dust.current.scale.set(s, s, s);
    }
  });

  return (
    <>
      <mesh ref={pit} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} scale={0.001}>
        <circleGeometry args={[1, 40]} />
        <meshBasicMaterial color="#020503" />
      </mesh>
      <group ref={dust} position={[0, 0.4, 0]} visible={false}>
        <Sparkles count={50} scale={[9, 1.6, 9]} size={4} speed={0.6} opacity={0.5} color="#8a7a60" />
      </group>
    </>
  );
}

/** Distant wildfire: ember particles + flickering light, revealed in the finale */
function Wildfire({ progress }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = progress.get();
    const reveal = smooth(remap(t, 0.88, 0.96));
    const flicker = 0.75 + 0.25 * Math.sin(clock.getElapsedTime() * 9);
    if (group.current) {
      group.current.visible = reveal > 0.02;
      group.current.scale.setScalar(Math.max(0.001, reveal));
    }
    if (light.current) {
      light.current.intensity = 30 * reveal * flicker;
    }
  });

  return (
    <group ref={group} position={FIRE_POSITION} visible={false}>
      <Sparkles count={70} scale={[3.5, 3, 3.5]} size={7} speed={2.2} color="#ff6b35" />
      <Sparkles count={30} scale={[2, 2, 2]} size={10} speed={1.4} color="#fdba74" />
      <pointLight ref={light} color="#ff6b35" distance={18} decay={2} intensity={0} />
    </group>
  );
}

/** Scan pulses radiating from the tower head once it is operational */
function ScanPulses({ progress }: SceneProps) {
  const rings = useRef<(THREE.Mesh | null)[]>([]);
  const ringCount = 3;
  const maxRadius = 16;

  const materials = useMemo(
    () =>
      Array.from({ length: ringCount }, () =>
        new THREE.MeshBasicMaterial({
          color: '#4ade80',
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
        })
      ),
    []
  );

  useFrame(({ clock }) => {
    const t = progress.get();
    const { detect } = timeline(t);
    const active = smooth(remap(t, 0.86, 0.94));
    const time = clock.getElapsedTime();

    rings.current.forEach((ring, i) => {
      if (!ring) return;
      const phase = (time * 0.22 + i / ringCount) % 1;
      const radius = 0.5 + phase * maxRadius;
      ring.scale.setScalar(radius);
      const material = materials[i];
      material.opacity = active * 0.55 * (1 - phase);
      // Pulse turns ember red as it sweeps past the fire (detection)
      const firePhase = FIRE_POSITION.length() / maxRadius;
      const detected = smooth(remap(detect, 0.5, 0.85)) * smooth(remap(phase, firePhase - 0.04, firePhase));
      material.color.set('#4ade80').lerp(new THREE.Color('#ff6b35'), detected);
    });
  });

  return (
    <group position={[0, BLADE_LENGTH + 0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {Array.from({ length: ringCount }, (_, i) => (
        <mesh key={i} ref={(el) => { rings.current[i] = el; }} material={materials[i]}>
          <ringGeometry args={[0.92, 1, 48]} />
        </mesh>
      ))}
    </group>
  );
}

/** Scroll-choreographed camera: display orbit, burial watch, heroic rise, wide reveal */
function CameraRig({ progress }: SceneProps) {
  const target = useMemo(() => new THREE.Vector3(), []);
  const position = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera }) => {
    const t = progress.get();
    const { cut, bury, rise, stand, detect } = timeline(t);
    const finale = smooth(remap(detect, 0.3, 1));

    let radius = lerp(lerp(16, 18, cut), 13, bury);
    radius = lerp(lerp(radius, 15, rise), 23, finale);
    let height = lerp(lerp(4, 5, cut), 7, bury);
    height = lerp(lerp(height, 6, rise), 10, finale);
    let lookY = lerp(lerp(1, 1, cut), -0.5, bury);
    lookY = lerp(lerp(lookY, 2, rise), 4.5, finale);

    const angle = Math.PI / 4 + cut * 0.35 + bury * 0.25 + stand * 0.3 + finale * 0.5;

    position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
    camera.position.lerp(position, 0.12);

    target.set(0, lookY, 0);
    camera.lookAt(target);
  });

  return null;
}

export default function SentinelScene({ progress }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 42, position: [11, 4, 11], near: 0.1, far: 120 }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#060d09', 22, 55]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 14, 6]} intensity={1.4} color="#fff4e0" />
      <directionalLight position={[-8, 6, -10]} intensity={0.5} color="#4ade80" />

      <Stars radius={80} depth={40} count={2500} factor={3} saturation={0} fade speed={0.6} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <circleGeometry args={[60, 48]} />
        <meshStandardMaterial color="#060d09" roughness={1} />
      </mesh>
      <Grid
        position={[0, 0.01, 0]}
        args={[60, 60]}
        cellSize={1.4}
        cellThickness={0.6}
        cellColor="#132217"
        sectionSize={7}
        sectionThickness={1}
        sectionColor="#2f5535"
        fadeDistance={42}
        fadeStrength={2.5}
        infiniteGrid
      />

      <Blade progress={progress} />
      <SensorHead progress={progress} />
      <BurialPit progress={progress} />
      <Wildfire progress={progress} />
      <ScanPulses progress={progress} />
      <CameraRig progress={progress} />
    </Canvas>
  );
}
