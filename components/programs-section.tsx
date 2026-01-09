import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, Languages, Palette, Calculator } from "lucide-react"

const programs = [
  {
    title: "STEM Excellence",
    description: "Advanced courses in Robotics, Coding, and Bio-technology.",
    icon: FlaskConical,
    tag: "High School",
  },
  {
    title: "Global Languages",
    description: "Immersive programs in Mandarin, Spanish, and French.",
    icon: Languages,
    tag: "All Levels",
  },
  {
    title: "Creative Arts",
    description: "Digital design, classical music, and performing arts.",
    icon: Palette,
    tag: "Middle School",
  },
  {
    title: "Advanced Mathematics",
    description: "Accelerated pathways for gifted mathematicians.",
    icon: Calculator,
    tag: "Primary School",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Academic Programs</h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Comprehensive and diverse educational pathways designed to prepare students for the challenges of
              tomorrow.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-4">
                  {program.tag}
                </Badge>
                <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
