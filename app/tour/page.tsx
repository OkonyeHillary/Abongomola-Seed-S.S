import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export const metadata = {
  title: "Virtual Tour | ABONGONGOMOLA SEED SS",
  description: "Take a virtual tour of ABONGONGOMOLA SEED SS premises and facilities.",
}

const premises = [
  {
    category: "Academic",
    items: [
      {
        title: "Main Classroom Block",
        image: "/school-classroom-building.jpg",
        description: "Modern classrooms equipped with learning aids for an optimal educational experience.",
      },
      {
        title: "Science Laboratory",
        image: "/school-science-lab.png",
        description: "Fully equipped lab for biology, chemistry, and physics practicals.",
      },
      {
        title: "Computer Lab",
        image: "/school-computer-lab.png",
        description: "Digital learning center providing students with essential IT skills.",
      },
    ],
  },
  {
    category: "Campus Life",
    items: [
      {
        title: "School Assembly Hall",
        image: "/school-assembly-hall.jpg",
        description: "The heart of our school gatherings, ceremonies, and indoor events.",
      },
      {
        title: "Sports Field",
        image: "/school-sports-field.png",
        description: "Expansive grounds for football, netball, and athletic activities.",
      },
      {
        title: "Student Dormitories",
        image: "/school-dormitory.jpg",
        description: "Safe and comfortable living quarters for our boarding students.",
      },
    ],
  },
  {
    category: "Environment",
    items: [
      {
        title: "School Main Gate",
        image: "/school-entrance-gate.jpg",
        description: "The welcoming entrance to our campus in Ogwok Village.",
      },
      {
        title: "School Farm",
        image: "/school-farm-garden.jpg",
        description: "Hands-on agricultural learning site for our students.",
      },
    ],
  },
]

export default function TourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Virtual Campus Tour</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the facilities and premises of ABONGONGOMOLA SEED SS from the comfort of your home.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Academic" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                {premises.map((p) => (
                  <TabsTrigger key={p.category} value={p.category}>
                    {p.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {premises.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, idx) => (
                    <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
