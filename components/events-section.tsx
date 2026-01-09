import { MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    date: "Jan 15",
    title: "Open House 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Main Campus Auditorium",
    category: "Admissions",
  },
  {
    date: "Feb 05",
    title: "Annual Science Fair",
    time: "9:00 AM - 4:00 PM",
    location: "Science Wing",
    category: "Academics",
  },
  {
    date: "Feb 22",
    title: "Spring Concert",
    time: "6:30 PM - 8:30 PM",
    location: "Performing Arts Center",
    category: "Arts",
  },
]

export function EventsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
            <p className="mt-4 text-muted-foreground">Mark your calendars for our community highlights.</p>
          </div>
          <Button variant="outline" className="bg-transparent">
            View Full Calendar
          </Button>
        </div>
        <div className="space-y-4">
          {events.map((event, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-2xl bg-background border transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="flex flex-col items-center justify-center h-20 w-20 rounded-xl bg-primary/5 text-primary">
                <span className="text-xl font-bold">{event.date.split(" ")[1]}</span>
                <span className="text-xs font-medium uppercase tracking-wider">{event.date.split(" ")[0]}</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="hidden md:flex">
                Register
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
