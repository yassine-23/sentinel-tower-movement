# 🌲 Immune System - Website

A revolutionary circular economy solution that transforms wind turbine waste into an intelligent wildfire detection and suppression network.

## 🎯 Project Overview

This website showcases the **Immune System** vision: repurposing decommissioned wind turbine blades into vertical "sentinel towers" that:

- Detect wildfires in their first 5-10 minutes
- Provide immediate water-based suppression
- Mimic natural tree aesthetics (biomimicry)
- Address two global crises: turbine waste and wildfires

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🎨 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js + React Chart.js 2
- **3D Graphics**: Three.js + React Three Fiber (for future enhancements)
- **Scroll Interactions**: React Intersection Observer

## 📂 Project Structure

```
immune-system-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main homepage
│   └── globals.css          # Global styles
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx              # Crisis statistics
│   │   ├── TurbineWasteSection.tsx      # Two problems visualization
│   │   ├── SolutionSection.tsx          # Transformation explanation
│   │   ├── EconomicsSection.tsx         # Cost comparison charts
│   │   └── CallToActionSection.tsx      # Email signup & CTAs
│   └── ui/
│       └── AnimatedCounter.tsx          # Animated number component
├── public/
│   └── grid.svg             # Background pattern
└── tailwind.config.ts       # Custom color palette
```

## 🎨 Design System

### Color Palette

- **Forest Green** (`#1B4332`): Primary brand color
- **Flame Orange** (`#FF6B35`): Crisis/urgency indicator
- **Sky Blue** (`#4ECDC4`): Solution/technology accent
- **Warm Beige** (`#F7F3E9`): Background neutral

### Typography

- **Headlines**: Inter (modern, bold)
- **Body**: Source Sans Pro (readable)
- **Data**: JetBrains Mono (technical precision)

## 🌟 Key Features

### Interactive Sections

1. **Hero Section**
   - Animated particle effects
   - Real-time counter animations
   - Crisis statistics showcase

2. **Turbine Waste Section**
   - Split-screen comparison
   - Scroll-triggered reveals
   - Problem visualization

3. **Solution Section**
   - Step-by-step transformation
   - Feature highlights
   - Coverage statistics

4. **Economics Section**
   - Logarithmic cost comparison chart
   - ROI breakdown cards
   - Investment justification

5. **Call to Action**
   - Role-based selection (Government/Investor/Individual)
   - Email capture form
   - Social proof metrics

## 📊 Real Data Sources

Statistics are based on:
- NIFC (National Interagency Fire Center)
- NASA FIRMS wildfire data
- NOAA Climate Data
- Global Wind Energy Council reports
- Insurance Information Institute

## 🔧 Customization

### Update Statistics

Edit the counter values in section components:

```tsx
// components/sections/HeroSection.tsx
<AnimatedCounter end={200} suffix="+" />  // Customize end value
```

### Modify Colors

```typescript
// tailwind.config.ts
colors: {
  forest: { /* custom shades */ },
  flame: { /* custom shades */ },
  // ...
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to any static hosting provider.

## 📈 Next Steps

### Planned Enhancements

- [ ] 3D interactive tower model
- [ ] Live wildfire data integration
- [ ] Interactive coverage map with Mapbox
- [ ] Timeline roadmap section
- [ ] Blog/news section
- [ ] Multi-language support
- [ ] Dark mode toggle

### For Incubator Pitch

1. Add "Our Team" section
2. Include engineering feasibility studies
3. Add partner/endorsement logos
4. Create downloadable pitch deck PDF
5. Add press kit/media resources

## 📧 Contact

For inquiries about the Immune System project, use the contact form on the website.

## 📄 License

© 2024 Immune System Project. All rights reserved.

---

**Built with purpose. Powered by circular economy principles. Protected by Earth's immune system.**