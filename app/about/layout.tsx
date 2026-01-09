import type React from "react"

export const metadata = {
  title: "About Us | ABONGONGOMOLA SEED SS",
  description: "Learn about ABONGONGOMOLA SEED SS, located in Ogwok village, Abongomola. Our motto: Seed of Hope.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // <CHANGE> Removed redundant Navbar - it's already rendered in root layout
  return <>{children}</>
}
