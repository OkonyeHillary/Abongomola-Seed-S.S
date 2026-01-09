import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Events | ABONGONGOMOLA SEED SS",
  description: "Stay updated with upcoming events and activities at ABONGONGOMOLA SEED SS - Seed of Hope",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "New Student Orientation",
      date: "March 1, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Main Assembly Hall",
      description:
        "Welcome session for new students and parents to learn about school policies, meet teachers, and tour the campus.",
      category: "Academic",
      attendees: "New Students & Parents",
    },
    {
      title: "Inter-Class Sports Day",
      date: "March 15, 2026",
      time: "4:00 pM - 6:00 PM",
      location: "School Sports Ground",
      description:
        "Annual athletics competition featuring track and field events, Martial heart football, netball, and volleyball matches between school classes.",
      category: "Sports",
      attendees: "All Students",
    },
    {
      title: "Parent-Teacher Association Meeting",
      date: "April 22, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room/Main Holl",
      description:
        "Quarterly PTA meeting to discuss school developments, student progress, and upcoming initiatives for Term 1.",
      category: "Community",
      attendees: "Parents & Teachers",
    },
    {
      title: "Science Fair",
      date: "March 8, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Science Laboratory Block",
      description:
        "Students showcase their innovative science projects and experiments. Open to parents and community members.",
      category: "Academic",
      attendees: "All Students & Community",
    },
    {
      title: "Cultural Day Celebration",
      date: "March 22, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "School Grounds",
      description:
        "Celebrate Uganda's cultural diversity with traditional dances, music performances, food, and cultural exhibitions.",
      category: "Cultural",
      attendees: "Entire School Community",
    },
    {
      title: "Mid-Term Examinations",
      date: "March 25-29, 2026",
      time: "8:00 AM - 12:00 PM",
      location: "Various Classrooms",
      description: "Mid-term assessments for all classes to evaluate student progress and understanding.",
      category: "Academic",
      attendees: "All Students",
    },
  ]

  const pastHighlights = [
    {
      title: "End of Year Graduation Ceremony 2024",
      date: "December 15, 2024",
      description: "Celebrated the achievements of our Senior 6 graduates as they embark on new journeys.",
    },
    {
      title: "Annual Talent Show 2024",
      date: "November 20, 2024",
      description: "Students showcased their talents in music, drama, poetry, and dance to a packed audience.",
    },
    {
      title: "Community Service Day",
      date: "October 10, 2024",
      description: "Students and staff participated in community cleanup and tree planting in Ogwok village.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 sm:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-primary-foreground/90">
              School Calendar
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-6">Events & Activities</h1>
            <p className="text-lg leading-8 text-primary-foreground/90 text-pretty">
              Stay connected with the vibrant school life at ABONGONGOMOLA SEED SS. From academic programs to sports and
              cultural celebrations, there's always something happening.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">Mark your calendars for these exciting upcoming events.</p>
          </div>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Past Event Highlights</h2>
              <p className="text-muted-foreground">
                A look back at some of our memorable events from the previous term.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pastHighlights.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8">2026 Academic Calendar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Term 1</CardTitle>
                  <CardDescription>February - April 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opening:</span>
                    <span className="font-medium">Feb 3, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mid-Term Break:</span>
                    <span className="font-medium">Mar 10-14</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closing:</span>
                    <span className="font-medium">Apr 25, 2025</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Term 2</CardTitle>
                  <CardDescription>May - July 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opening:</span>
                    <span className="font-medium">May 12, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mid-Term Break:</span>
                    <span className="font-medium">Jun 16-20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closing:</span>
                    <span className="font-medium">Jul 31, 2025</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Term 3</CardTitle>
                  <CardDescription>September - November 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opening:</span>
                    <span className="font-medium">Sep 8, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mid-Term Break:</span>
                    <span className="font-medium">Oct 13-17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closing:</span>
                    <span className="font-medium">Nov 28, 2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance">
            Want to Stay Updated on Events?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Subscribe to our newsletter or contact the school office to receive regular updates about upcoming events
            and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions#schedule-visit">
              <Button size="lg" variant="secondary" className="rounded-full">
                Subscribe to Newsletter
              </Button>
            </Link>
            <Link href="/admissions#schedule-visit">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact School Office
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
