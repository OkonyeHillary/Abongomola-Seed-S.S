import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { ProgramsSection } from "@/components/programs-section"
import { BookOpen, GraduationCap, Microscope, Code, Music, Trophy } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Academics | ABONGONGOMOLA SEED SS",
  description: "Explore the academic curriculum and departments at ABONGONGOMOLA SEED SS - Seed of Hope",
}

export default function AcademicsPage() {
  const departments = [
    {
      name: "Science & Mathematics",
      description: "Dedicated to developing analytical thinking and scientific inquiry through rigorous coursework.",
      icon: Microscope,
      subjects: ["Biology", "Chemistry", "Physics", "Mathematics", "Agriculture"],
    },
    {
      name: "Languages & Humanities",
      description: "Fostering communication skills and an understanding of human society and history.",
      icon: BookOpen,
      subjects: ["English", "Literature", "History", "Geography", "CRE/IRE"],
    },
    {
      name: "Vocational & Technical",
      description: "Providing practical skills for self-reliance and technological advancement.",
      icon: Code,
      subjects: ["ICT", "Entrepreneurship", "Home Economics", "Technical Drawing"],
    },
    {
      name: "Performing & Fine Arts",
      description: "Encouraging creative expression and appreciation for cultural heritage.",
      icon: Music,
      subjects: ["Fine Art", "Music", "Performing Arts", "Crafts"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted py-20 sm:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-4">Academic Excellence</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-6">
              Nurturing Minds, Building Futures
            </h1>
            <p className="text-lg leading-8 text-muted-foreground text-pretty">
              At ABONGONGOMOLA SEED SS, we provide a holistic curriculum that balances academic rigor with practical
              skills, guided by our motto "Seed of Hope."
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section (Reused) */}
      <ProgramsSection />

      {/* Departments Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Academic Departments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our curriculum is organized into specialized departments that ensure every student receives expert
              guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, i) => (
              <Card key={i} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <dept.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{dept.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {dept.subjects.map((subject, j) => (
                      <Badge key={j} variant="outline" className="rounded-full">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Environment Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-primary/5 border-2 border-primary/10 order-2 md:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <GraduationCap className="h-16 w-16 text-primary mx-auto" />
                  <div>
                    <p className="font-bold text-lg">Excellence in Every Lesson</p>
                    <p className="text-muted-foreground">Ogwok Village, Abongomola, Kwania District</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Academic Standards</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">A Supportive Learning Environment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that education goes beyond the classroom. Our teachers at ABONGONGOMOLA SEED SS are mentors
                who provide individual attention to ensure no student is left behind.
              </p>
              <ul className="space-y-3">
                {[
                  "Small class sizes for personalized learning",
                  "Well-equipped science and computer laboratories",
                  "Comprehensive library and research resources",
                  "Regular student progress monitoring and feedback",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="rounded-full">View Curriculum</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance">
            Start Your Academic Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join a school where excellence is a habit and every student is supported to reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" variant="secondary" className="rounded-full">
                Explore Admissions
              </Button>
            </Link>
            <Link href="/admissions#schedule-visit">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Academics Office
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
