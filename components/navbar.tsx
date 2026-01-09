import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-white p-0.5">
            <Image src="/logo.png" alt="ABONGOMOLA SEED SEC. SCH Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">ABONGOMOLA SEED SS</span>
        </Link>

        {/* Added mobile menu with Sheet component */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/academics" className="transition-colors hover:text-primary">
            Academics
          </Link>
          <Link href="/admissions" className="transition-colors hover:text-primary">
            Admissions
          </Link>
          <Link href="/events" className="transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="/teacher-portal" className="transition-colors hover:text-primary">
            Teachers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/parent-portal" className="hidden sm:inline-flex">
            <Button variant="outline" className="bg-transparent">
              Parent Portal
            </Button>
          </Link>
          <Link href="/admissions" className="hidden sm:inline-flex">
            <Button>Enroll Now</Button>
          </Link>

          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/about" className="text-lg hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/academics" className="text-lg hover:text-primary transition-colors">
                  Academics
                </Link>
                <Link href="/admissions" className="text-lg hover:text-primary transition-colors">
                  Admissions
                </Link>
                <Link href="/events" className="text-lg hover:text-primary transition-colors">
                  Events
                </Link>
                <Link href="/teacher-portal" className="text-lg hover:text-primary transition-colors">
                  Teachers
                </Link>
                <Link href="/parent-portal" className="mt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Parent Portal
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
