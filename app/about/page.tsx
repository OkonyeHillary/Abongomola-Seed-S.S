import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, Heart, Target, Award, BookOpen, Users, Trophy } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted py-20 sm:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative h-24 w-24 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl">
              <Image src="/logo.png" alt="ABONGOMOLA SEED SEC. SCH Logo" fill className="object-contain p-1" />
            </div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-4">About ABONGOMOLA SEED SS</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-6">
              Seed of Hope: Growing Excellence in Education
            </h1>
            <p className="text-lg leading-8 text-muted-foreground text-pretty">
              A beacon of learning in Ogwok village, Abongomola, Kwania District, dedicated to nurturing young minds and building a
              brighter future for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Location</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Located in the Heart of Kwania</h2>
              <p className="text-muted-foreground leading-relaxed">
                ABONGONGOMOLA SEED SS is proudly situated in{" "}
                <strong className="text-foreground">Ogwok village, Abongomola, Kwania District</strong>, where we have served our
                community since 2014. Our location provides a peaceful learning environment while remaining accessible
                to families throughout the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The school's name reflects our commitment to being a seed of hope for every child who walks through our
                doors, planting the foundation for their future success and growth.
              </p>
              <Link href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full">Get Directions</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-primary/5 border-2 border-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <div>
                    <p className="font-bold text-lg">Ogwok Village</p>
                    <p className="text-muted-foreground">Abongomola</p>
                    <p className="text-muted-foreground">Kwania District</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Mission & Vision</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guided by our motto, we strive to be a transformative force in education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-2xl border">
              <div className="mb-6 rounded-full bg-primary/10 p-4 w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality, accessible education that empowers students with knowledge, skills, and values to
                become responsible citizens and future leaders who contribute positively to society.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl border">
              <div className="mb-6 rounded-full bg-primary/10 p-4 w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution in the region, recognized for academic excellence, character
                development, and community impact—truly living up to our motto as a "Seed of Hope" for generations to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">The Pillars of ABONGONGOMOLA</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our educational approach is built on three core values that guide every aspect of student life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 w-fit mx-auto">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Rigor</h3>
              <p className="text-muted-foreground">
                We maintain high academic standards, encouraging students to push their boundaries and achieve
                intellectual excellence through a robust curriculum.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 w-fit mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusive Community</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and foster an environment of mutual respect, ensuring every student feels safe,
                supported, and part of the family.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-4 w-fit mx-auto">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Growth</h3>
              <p className="text-muted-foreground">
                We focus on the whole child, developing their emotional intelligence, physical health, and creative
                talents alongside their academic pursuits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="rounded-full bg-primary/10 p-4 shrink-0">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Established in <strong className="text-foreground">2014</strong>, ABONGONGOMOLA SEED SS began as a
                    small community initiative driven by local leaders who believed in the transformative power of
                    education. What started with just a handful of students and dedicated teachers has grown into a
                    thriving institution serving hundreds of students annually.
                  </p>
                  <p>
                    Over the decades, we have maintained our commitment to being a "Seed of Hope" for our community. Our
                    graduates have gone on to become doctors, teachers, engineers, entrepreneurs, and community leaders,
                    each carrying forward the values and knowledge they gained within these walls.
                  </p>
                  <p>
                    Today, we continue to evolve and adapt to meet the changing needs of our students while staying true
                    to our core mission of providing quality education rooted in integrity, excellence, and community
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance">
            Join the ABONGONGOMOLA SEED SS Family
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Discover how we can help your child grow and thrive in a nurturing, excellence-driven environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions#schedule-visit">
              <Button size="lg" variant="secondary" className="rounded-full">
                Schedule a Visit
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
