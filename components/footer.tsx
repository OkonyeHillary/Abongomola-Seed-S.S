import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-white p-1">
                <Image src="/logo.png" alt="ABONGOMOLA SEED SEC. SCH Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-primary leading-tight">ABONGOMOLA</span>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                  SEED SECONDARY SCHOOL
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              <span className="font-semibold text-primary">Seed of Hope.</span> Dedicated to excellence in education
              since 1995. Located in Ogwok village, Abongomola, inspiring students to lead, innovate, and contribute to
              a better world.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Connected social media links */}
              {[
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          {/* Connected all footer navigation links */}
          <div className="space-y-4">
            <h4 className="font-bold">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/parent-portal" className="hover:text-primary">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/teacher-portal" className="hover:text-primary">
                  Teacher Portal
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/admissions#schedule-visit" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ABONGOMOLA SEED SS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
