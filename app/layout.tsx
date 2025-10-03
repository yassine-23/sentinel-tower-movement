import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immune System | Transforming Waste Into Wildfire Defense",
  description: "Repurposing wind turbine blades into sentinel towers that detect and suppress wildfires. A revolutionary circular economy solution addressing two global crises simultaneously.",
  keywords: "wildfire prevention, circular economy, renewable energy, turbine blade recycling, climate solution, environmental innovation",
  authors: [{ name: "Immune System Project" }],
  openGraph: {
    title: "Immune System | Earth's Wildfire Defense Network",
    description: "Turning 43,000 tons of turbine waste into an intelligent wildfire detection and suppression network. Prevention over reaction.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Immune System | Wildfire Prevention Revolution",
    description: "Repurposing wind turbine blades into sentinel towers that protect forests and communities.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1B4332",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}