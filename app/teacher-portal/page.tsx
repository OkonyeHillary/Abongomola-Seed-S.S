import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TeacherPortalLogin() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-muted/30 px-4 relative">
      <div className="absolute top-8 left-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Link>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Teacher Portal</CardTitle>
          <CardDescription>Enter your credentials to manage resources and grades</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Teacher ID or Email</Label>
            <Input id="email" type="text" placeholder="T-12345" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Link href="/teacher-portal/dashboard">
            <Button className="w-full mt-2" size="lg">
              Sign In
            </Button>
          </Link>
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>Need help? Contact the School IT Department</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
