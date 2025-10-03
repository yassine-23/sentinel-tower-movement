'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function EconomicsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Bar Chart Data
  const barChartData = {
    labels: ['Sentinel Tower', 'Fire Suppression', 'Major Wildfire'],
    datasets: [
      {
        label: 'Cost (USD)',
        data: [50000, 5000000, 5000000000],
        backgroundColor: [
          'rgba(78, 205, 196, 0.8)',
          'rgba(255, 107, 53, 0.8)',
          'rgba(193, 18, 31, 0.8)',
        ],
        borderColor: [
          'rgba(78, 205, 196, 1)',
          'rgba(255, 107, 53, 1)',
          'rgba(193, 18, 31, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Line Chart Data - Cost Over Time
  const lineChartData = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 10'],
    datasets: [
      {
        label: 'Traditional Fire Fighting',
        data: [5000000, 10500000, 16500000, 23000000, 30000000, 65000000],
        borderColor: 'rgba(255, 107, 53, 1)',
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Sentinel Network',
        data: [500000, 750000, 900000, 1000000, 1100000, 1500000],
        borderColor: 'rgba(78, 205, 196, 1)',
        backgroundColor: 'rgba(78, 205, 196, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            let label = context.parsed.y || 0;
            if (label >= 1000000000) {
              return '$' + (label / 1000000000).toFixed(1) + 'B';
            } else if (label >= 1000000) {
              return '$' + (label / 1000000).toFixed(1) + 'M';
            } else if (label >= 1000) {
              return '$' + (label / 1000).toFixed(0) + 'K';
            }
            return '$' + label;
          }
        }
      },
    },
    scales: {
      y: {
        type: 'logarithmic' as const,
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          callback: function(value: any) {
            if (value >= 1000000000) return '$' + (value / 1000000000) + 'B';
            if (value >= 1000000) return '$' + (value / 1000000) + 'M';
            if (value >= 1000) return '$' + (value / 1000) + 'K';
            return '$' + value;
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 11,
          }
        },
        grid: {
          display: false,
        }
      }
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
          font: {
            size: 13,
            weight: 'bold',
          },
          padding: 15,
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            let value = context.parsed.y;
            if (value >= 1000000) {
              label += '$' + (value / 1000000).toFixed(1) + 'M';
            } else if (value >= 1000) {
              label += '$' + (value / 1000).toFixed(0) + 'K';
            } else {
              label += '$' + value;
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          callback: function(value: any) {
            if (value >= 1000000) return '$' + (value / 1000000) + 'M';
            if (value >= 1000) return '$' + (value / 1000) + 'K';
            return '$' + value;
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        }
      }
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden py-32 px-4">
      {/* Tech/Data Visualization Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/90 via-sky-900/85 to-forest-800/90" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 text-shadow-glow">
            THE ECONOMICS
          </h2>
          <p className="text-2xl text-gradient font-bold">
            Prevention is 100,000x cheaper than reaction
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Bar Chart - Cost Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-strong rounded-3xl p-8 premium-shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Cost Comparison
            </h3>
            <div className="h-[350px]">
              <Bar data={barChartData} options={barOptions} />
            </div>
          </motion.div>

          {/* Line Chart - Cost Over Time */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-strong rounded-3xl p-8 premium-shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Cost Over Time
            </h3>
            <div className="h-[350px]">
              <Line data={lineChartData} options={lineOptions} />
            </div>
          </motion.div>
        </div>

        {/* ROI Callout - Large Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-strong rounded-3xl p-12 premium-shadow-lg text-center animate-glow"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Return on Investment</h3>
          <div className="text-8xl font-black text-gradient mb-6">100,000:1</div>
          <p className="text-xl text-sky-200 max-w-2xl mx-auto leading-relaxed">
            One prevented major wildfire pays for 1,000 sentinel towers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}