import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const faculty = [
  {
    name: "SSEMANDER ASHIRAFU",
    role: "Headteacher",
    image: "/professional-woman-headshot.png",
    bio: "Over 20 years of experience in educational leadership.",
  },
  {
    name: "STEVIN ADUPA",
    role: "Deupity Headteacher",
    image: "/professional-man-headshot.png",
    bio: "Passionate about making STEM accessible to everyone.",
  },
  {
    name: "Elena Rodriguez",
    role: "Arts Director",
    image: "/professional-artist-headshot.jpg",
    bio: "Award-winning educator dedicated to creative expression.",
  },
  {
    name: "James Wilson",
    role: "Athletic Coach",
    image: "/professional-coach-headshot.jpg",
    bio: "Focuses on teamwork, discipline, and physical well-being.",
  },
]

export function FacultySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Leadership</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
          Our dedicated team of educators and administrators are here to support every student's journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {faculty.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <Avatar className="h-32 w-32 mb-6 border-4 border-muted">
                <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm max-w-xs">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
