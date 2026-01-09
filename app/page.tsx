import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react"
import { ProgramsSection } from "@/components/programs-section"
import { FacultySection } from "@/components/faculty-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted py-24 sm:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20 bg-white p-1 shadow-sm">
                  <Image src="/logo.png" alt="ABONGOMOLA SEED Logo" fill className="object-contain" />
                </div>
                <p className="text-sm font-bold tracking-widest text-primary uppercase" aria-label="School Motto">
                  Seed of Hope
                </p>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
                Nurturing Minds, Building Futures.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                At ABONGONGOMOLA SEED SS, we provide a world-class education that empowers students to reach their full
                potential through academic excellence, innovation, and character development.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/admissions">
                  <Button size="lg" className="rounded-full px-8" aria-label="Request School Prospectus">
                    Request Prospectus
                  </Button>
                </Link>
                <Link href="/virtual-tour">
                  <Button variant="ghost" className="group" aria-label="Take a virtual tour of the school">
                    Take a Virtual Tour{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden lg:block h-full w-1/3 bg-primary/10 rounded-l-[100px]" />
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground">The pillars that define our educational philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: BookOpen,
                title: "Academic Rigor",
                desc: "A challenging curriculum focused on critical thinking, innovation, and mastery of core subjects.",
              },
              {
                icon: Users,
                title: "Inclusive Community",
                desc: "A diverse and welcoming environment where every student is valued and belongs.",
              },
              {
                icon: Trophy,
                title: "Holistic Growth",
                desc: "Nurturing character, leadership, and talents beyond the classroom through sports, arts, and values.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 transition-colors hover:bg-muted"
              >
                <div className="mb-6 rounded-full bg-primary/10 p-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <ProgramsSection />

      {/* Faculty Section */}
      <FacultySection />

      {/* Events Section */}
      <EventsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
