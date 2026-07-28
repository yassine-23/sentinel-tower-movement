# The Sentinel Protocol

**System + movement strategy for Earth's Immune System**
*Drafted 2026-07-28. Every load-bearing claim is cited; numbers marked (est.) are engineering estimates, not measurements.*

---

## 0. Thesis — two exponential curves, one arbitrage

**Curve 1 — the waste.** ~43 million tonnes of cumulative blade waste projected globally by 2050 (Liu & Barlow, 2017). Europe alone: ~20,000 t/yr retiring in 2025, rising to ~55,000 t/yr by 2030 ([WindEurope](https://windeurope.org/news/where-do-wind-turbine-blades-go-when-they-are-decommissioned/)). Germany, the Netherlands, Austria and Finland ban composite landfilling; the European wind industry's self-imposed landfill ban took effect **1 January 2026**. Recycling costs $1,000–2,000/ton vs. $60–150/ton landfill — a 15–20 t MW-class blade now costs its owner roughly **$15–40k to make disappear**.

**Curve 2 — the fire.** US wildfire total economic burden: **$394–893B/yr** (US Joint Economic Committee, 2023). Insurance is retreating from fire country (CA FAIR Plan growth); insurers now *invest* in prevention (Liberty Mutual and Tokio Marine joined Pano AI's $44M Series B, June 2025).

**The physics that connects them.** Initial-attack research: a fire that exceeds ~2 ha before attack has **<10% containment probability** by the next day ([Arienti et al., CJFR](https://cdnsciencepub.com/doi/10.1139/x06-188)). Under wind, 2 ha is 15–30 minutes from ignition. **Wildfire is a 15-minute war**, and today's response assets (stations, air bases) are 20–60 minutes away.

**The arbitrage.** Society pays to destroy the precise material profile that distributed fire defense needs: 15–25 m stiff monocoque structures, 20-year outdoor-rated, corrosion-proof, with a factory-engineered bolted root flange — at **negative cost**. Nothing else in infrastructure has a negative-cost mast.

**The category.** Not detection. Detection is crowded and commoditizing: Pano AI ($100M+ contracted revenue, ~30M acres), Dryad (30,000+ sensors, XPRIZE Wildfire finalist), and FireSat (3 operational satellites since 2026-07-07, 5×5 m fire detection, twice-daily revisit now, hourly by 2029). We create the layer none of them own: **pre-positioned response infrastructure** — the water and the drone already standing in the fuel bed.

**The metric we own:** **D2FD — Detection-to-First-Drop.** Public target: under 10 minutes.

**The frame for policymakers:** the defibrillator. Society accepted that cardiac-arrest physics (survival falls ~10% per minute) demands AEDs on walls, not faster ambulances. Fire physics is the same shape. **A Sentinel is a defibrillator for the forest.**

---

## 1. The node — one cell of the immune system

| Subsystem | Spec | Validation |
|---|---|---|
| Mast | Blade root segment, 15–25 m, planted root-down; the root's bolted T-flange (designed for MN·m moments) mates to the foundation ring. Intumescent fire coating + lightning air terminal. | Re-Wind BladePole prototype; peer-reviewed blade-to-pole structural analysis ([ASCE JCC](https://ascelibrary.org/doi/10.1061/(ASCE)CC.1943-5614.0001136)); fatigue knockdown only 10–20% |
| Reservoir / anchor | Buried 10 m³ (≈2,700 gal) tank doubling as gravity foundation ballast — **sized for the empty-tank case**. Remote/radio-triggered fill valve, helicopter-accessible opening. | Heli-Hydrant category: deployed by CA water districts, tapped ~40× in one fire ([JCSD](https://www.jcsd.us/helihydrant/)) |
| Sensor head | PTZ optical + thermal camera, smoke/gas sensor, weather station. | Pano (camera) + Dryad (gas) both market-proven |
| Power / comms | Solar + LiFePO₄; LoRa mesh between nodes + LTE/satellite backhaul. Node doubles as comms relay during incidents. | Dryad Silvanet mesh precedent |
| Drone dock | On response-tier nodes: dock + drone with 10–50 L suppression payload (est.), auto-launch on detection. | Dryad Silvaguard direction; XPRIZE Wildfire finals demonstrated autonomous detect→suppress in Alaska |
| Water capture | Baseline: rain apron off the mast. **Fog-belt option only:** spiral mesh skirt, ~40 m² — 6–22 L/m²/fog-day at proven sites ([CloudFisher, Morocco](https://www.wasserstiftung.de/en/our-projects/cloudfisher/)) → ~0.25–0.9 m³/fog-day (est.). Elsewhere: truck top-up. | Boutmezguida, Morocco — world flagship |

**What the blade interior is NOT:** a tank. Blades are not watertight (shear webs, irregular geometry). Water lives in the buried tank or a bladder liner. Say this before a diligence engineer does.

---

## 2. The lattice — two tiers, not one hexagon

Detection radius (10–15 km camera viewshed from a tall mast) is ~3× drone response radius (~4–5 km in 5 min flight). One uniform grid is therefore either response-gapped or 9× overbuilt. So:

- **Response tier** — water + dock nodes at ~7 km hex spacing (full coverage at r≈4 km: spacing = r√3).
- **Sensing tier** — every ~7th node (hex superlattice) carries the tall mast and long-range sensor head.
- **Reality over geometry:** actual siting by viewshed analysis, prevailing-wind corridors, fuel models, and WUI edges. The hexagon is the emblem and the idealized unit economics; terrain optimization is the deployment truth.

Beachhead geography: the **wildland-urban interface**, where roads exist, buyers exist, and losses concentrate — not deep wilderness.

---

## 3. The nervous system — integrate the satellites, don't fight them

FireSat becomes our **free wide-area tipping layer**: satellite hit → nearest sensing node slews camera → confirm → auto-dispatch dock drone → alert agency, all machine-time. Own cameras + gas sensors catch what orbit misses between passes. Every detection layer in the world makes pre-positioned response *more* valuable; we are the only layer whose value rises when detection commoditizes.

**Airspace handoff protocol (the fire-chief answer):**
1. **T+0–15 min:** dock drone attacks the incipient fire (only window where 10–50 L matters).
2. **Manned aircraft arrive / TFR declared:** drones ground themselves; node switches to **Heli-Hydrant mode** — remote-triggered refill point cutting helicopter turnaround.
3. **Throughout:** node streams georeferenced fire telemetry and relays mesh comms for crews.

---

## 4. The metabolism — two-sided unit economics

**Paid on intake.** Offtake fee from wind operators/decommissioning contractors: $5–15k/blade (est.) — undercutting their $15–40k recycling cost while handing them the best ESG story in the industry ("your blades become fire sentinels" vs. "your blades became cement filler").

**Paid on protection.** Subscription per protected node/acre to the proven buyer set: utilities (wildfire-mitigation budgets; Pano's customers are Xcel, PGE, APS), insurers, water/fire districts (the Heli-Hydrant buyers), agencies and grants (e.g. CA fire-prevention grants, EU civil protection).

**Later, not now:** avoided-emissions credits (megafire seasons emit gigatonnes — 2023 Canada ≈ 3 Gt CO₂) once methodology matures; data products (fuel-moisture, micro-weather mesh).

**Node BOM sketch (est., at pilot scale):** blade segment net of offtake revenue: **−$5k**; transport + cut + coat: $15–25k; tank + civil works: $20–30k; sensors/power/comms: $10–15k; dock + drone (response nodes): $20–40k. **All-in: roughly $60–110k per response node** — against a Heli-Hydrant-class installation alone at $50–300k and a single averted structure loss at $500k+. These numbers are for refinement in Phase 1, not for publishing.

---

## 5. The movement — "Raise the Blades"

A movement needs an enemy, a symbol, a scoreboard, and a ladder.

**The enemy — the burial.** Casper, Wyoming: aerospace-grade wings in trenches. The founding image is a diptych: *the grave vs. the guardian* — a buried blade beside a raised Sentinel at dawn. One image, whole argument.

**The symbol — the raised blade.** The site's 3D scrollytelling already performs the ritual: displayed → sawn → buried → **raised**. That fourth act is the movement's logo moment.

**The scoreboard.** Sentinels are named and numbered (Sentinel 001…). Public dashboard: **blades rescued from burial · liters pre-positioned · acres shielded · median D2FD.** Movements need numbers that only go up.

**The ladder.**
1. *Witness* — experience the 3D story, share the diptych.
2. *Adopt* — donation tiers mapped to real components (a mesh skirt, a sensor head, a tank) via the existing Stripe link. Honest crowdfunding: each tier states what it buys.
3. *Host* — landowners, communes, water districts request a node.
4. *Build* — **open-source the node spec** (Re-Wind precedent). Open hardware recruits universities and chapters and builds the trust moat; the operating network, data, and contracts remain the business.
5. *Legislate* — push blade EPR (extended producer responsibility). "Blades to Sentinels" becomes the wind industry's compliance story for the landfill-ban era.

**Coalition map:** WindEurope members needing a post-ban narrative · water districts (proven buyers) · XPRIZE Wildfire ecosystem (winner announced **September 2026** — news-jack window) · insurers already funding this space · **Morocco flagship**: retired blades from Koudia al Baida repowering + Rif wildfire zone + Boutmezguida fog belt — the one country where every element of the story is native soil.

---

## 6. Roadmap

| Phase | When | Milestone | Kill criterion |
|---|---|---|---|
| 0 — Narrative | Now → Oct 2026 | Manifesto + diptych + Sentinel-001 renders live; site satellite copy corrected; NotebookLM audio published; ride XPRIZE result (Sept 2026) | — |
| 1 — Proof | Q4 2026 → 2027 | 3-node pilot with one water district or Moroccan commune (steel mast acceptable — blade mast is scale economics, not pilot-critical). **Measure real D2FD.** | D2FD > 20 min or no signed pilot in 12 months |
| 2 — Contracts | 2027–28 | First utility corridor deployment + first blade offtake agreement with a decommissioning contractor | Offtake fee < transport+processing cost |
| 3 — Open spec | 2028 | Node spec v1 published; first chapter builds; EPR advocacy | — |
| 4 — Scale | 2029+ | FireSat-hourly era: full sensing integration; lattice expansion on two continents | — |

---

## 7. Honest constraints (credibility armor — publish these ourselves)

1. **A composite mast is combustible.** Epoxy GFRP chars slowly but burns; intumescent coating and lightning protection are BOM line items from day one. A sentinel that burns is a headline we don't survive.
2. **Airspace:** TFRs ground our drones exactly when fires get dramatic — hence the handoff protocol in §3. Never pitch drones as replacing aerial firefighting.
3. **Fog is regional.** Fog capture is a fog-belt module, not the system. Rain + truck fill is the baseline.
4. **Two hard businesses stapled** (waste logistics + public-sector sales). Phase separation in §6 exists precisely to avoid both critical paths crossing in year one.
5. **No unverified public numbers.** "<60 s, 95%" style claims wait for pilot data. Truthful claims are the moat.
6. **Permitting** for structures in forests is slow — another reason WUI, private timberland, and utility corridors come first.

---

## Appendix A — Nano Banana prompt pack (campaign imagery)

1. **The Diptych (founding meme):** *"Split-frame photograph. Left: wind turbine blades half-buried in a dusty Wyoming landfill trench, overcast, desaturated, elegiac. Right: one identical blade raised vertical in a pine forest at golden dawn, subtle sensor crown, morning fog threading a spiral mesh skirt, warm ember light. Photorealistic, documentary style, 21:9."*
2. **Sentinel 001 portrait:** *"A single retired wind-turbine blade planted root-down as a slender sentinel tower in a Mediterranean pine forest at first light, spiral fog-mesh skirt beaded with dew, small drone dock at mid-height, buried tank hatch at base, hexagonal clearing, photorealistic, reverent low-angle, 4:5."*
3. **The lattice aerial:** *"Aerial dusk photograph of a forested ridgeline; faint hexagonal lattice of glowing sentinel nodes receding to the horizon, one node's thermal camera beam sweeping, distant satellite streak above, cinematic, 16:9."*
4. **The handoff:** *"Firefighting helicopter hovering to refill from an open ground tank beside a blade sentinel tower, drone returning to dock, smoke column small and contained in the background, dawn, photojournalism style, 3:2."*

## Appendix B — NotebookLM audio ("the banger")

No NotebookLM CLI/MCP exists on this machine — the path is manual and takes 2 minutes:
1. Go to notebooklm.google.com → New notebook → upload `docs/MANIFESTO.md` + `docs/STRATEGY.md`.
2. Generate **Audio Overview**; in *Customize*, paste: *"Frame this as the story of a movement: the scandal of burying aerospace-grade wings while forests burn, the 15-minute physics of wildfire, and the plan to raise the blades as Earth's immune system. Keep every number exactly as written in the sources."*
3. Publish the audio on the site's movement page and as the podcast trailer.
