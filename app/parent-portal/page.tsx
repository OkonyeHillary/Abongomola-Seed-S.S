import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ParentPortalLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute top-8 left-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Link>
      </div>
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-background p-8 shadow-xl ring-1 ring-border">
        <div className="flex flex-col items-center justify-center text-center">
          <GraduationCap className="h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">Parent Portal</h2>
          <p className="mt-2 text-sm text-muted-foreground">ABONGONGOMOLA SEED SS</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="parent-id">Parent ID</Label>
              <Input id="parent-id" placeholder="Enter your ID" required className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required className="h-11" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-primary hover:text-primary/80">
                Forgot password?
              </Link>
            </div>
          </div>

          <Link href="/parent-portal/dashboard">
            <Button className="w-full h-11 text-base font-semibold">Sign in</Button>
          </Link>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Contact the school administration if you need assistance with your credentials.
        </p>
      </div>
    </div>
  )
}
