"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText, Calendar, Phone, MapPin, Clock, Download } from "lucide-react"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function AdmissionsClientPage() {
  const { toast } = useToast()
  const [isSubmittingVisit, setIsSubmittingVisit] = useState(false)
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false)

  const handleDownloadForm = () => {
    toast({
      title: "Download Started",
      description: "The application form PDF is being downloaded to your device.",
    })
    // In a real app, this would trigger actual PDF download
    // For now, we'll simulate it
    const link = document.createElement("a")
    link.href = "/application-form.pdf" // This would be your actual PDF file
    link.download = "ABONGONGOMOLA-SEED-SS-Application-Form.pdf"
    link.click()
  }

  const handleScheduleVisit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmittingVisit(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("visit-name"),
      phone: formData.get("visit-phone"),
      email: formData.get("visit-email"),
      date: formData.get("visit-date"),
      time: formData.get("visit-time"),
      questions: formData.get("visit-questions"),
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmittingVisit(false)
      toast({
        title: "Visit Request Received!",
        description: "Our admissions team will contact you within 24 hours to confirm your campus visit.",
      })
      e.currentTarget.reset()
    }, 1500)
  }

  const handleSubmitApplication = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmittingApplication(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      studentName: formData.get("student-name"),
      dob: formData.get("student-dob"),
      gender: formData.get("student-gender"),
      gradeApplying: formData.get("grade-applying"),
      parentName: formData.get("parent-name"),
      parentPhone: formData.get("parent-phone"),
      parentEmail: formData.get("parent-email"),
      previousSchool: formData.get("previous-school"),
      additionalInfo: formData.get("additional-info"),
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmittingApplication(false)
      toast({
        title: "Application Submitted Successfully!",
        description:
          "Thank you for applying to ABONGONGOMOLA SEED SS. We will review your application and contact you within 7 days.",
      })
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 sm:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-primary-foreground/90">
              Join Our School
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-6">Admissions Information</h1>
            <p className="text-lg leading-8 text-primary-foreground/90 text-pretty">
              Welcome to ABONGONGOMOLA SEED SS. We're excited to help your child begin their educational journey with
              us—planting seeds of hope for a bright future.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How to Apply</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your application to ABONGONGOMOLA SEED SS.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Step 1</CardTitle>
                <CardDescription>Submit Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete and submit the admission application form along with required documents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Step 2</CardTitle>
                <CardDescription>Schedule Interview</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  After review, we'll contact you to schedule an interview with the student and parents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Step 3</CardTitle>
                <CardDescription>Assessment Test</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Students will take a placement assessment to determine their academic level and needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Step 4</CardTitle>
                <CardDescription>Receive Decision</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You'll receive an admission decision within 7 days and enrollment instructions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Admission Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  {[
                    "Completed application form",
                    "Birth certificate (original and copy)",
                    "Previous school report cards",
                    "Transfer certificate (if applicable)",
                    "Two passport-size photographs",
                    "Parent/guardian ID copies",
                    "Medical records and immunization card",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <ul className="space-y-3">
                  {[
                    "Students must be of appropriate age for their grade level",
                    "Parents/guardians must attend orientation session",
                    "Application fee: 5,000 UGX (non-refundable)",
                    "Tuition payment plan options available",
                    "Limited scholarships available for qualifying students",
                    "Boarding and day school options available",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Application */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Submit Your Application</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete the form below to begin your application process. Our admissions team will review your
                submission and contact you with next steps.
              </p>
            </div>

            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Student Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-name">Student Full Name *</Label>
                      <Input id="student-name" name="student-name" required placeholder="Enter student's full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-dob">Date of Birth *</Label>
                      <Input id="student-dob" name="student-dob" type="date" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-gender">Gender *</Label>
                      <Select name="student-gender" required>
                        <SelectTrigger id="student-gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade-applying">Grade Applying For *</Label>
                      <Select name="grade-applying" required>
                        <SelectTrigger id="grade-applying">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="senior-1">Senior 1</SelectItem>
                          <SelectItem value="senior-2">Senior 2</SelectItem>
                          <SelectItem value="senior-3">Senior 3</SelectItem>
                          <SelectItem value="senior-4">Senior 4</SelectItem>
                          <SelectItem value="senior-5">Senior 5</SelectItem>
                          <SelectItem value="senior-6">Senior 6</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Parent/Guardian Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Parent/Guardian Full Name *</Label>
                    <Input id="parent-name" name="parent-name" required placeholder="Enter parent/guardian name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-phone">Phone Number *</Label>
                      <Input id="parent-phone" name="parent-phone" type="tel" required placeholder="+256..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parent-email">Email Address</Label>
                      <Input id="parent-email" name="parent-email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Academic Background</h3>
                  <div className="space-y-2">
                    <Label htmlFor="previous-school">Previous School</Label>
                    <Input
                      id="previous-school"
                      name="previous-school"
                      placeholder="Name of previous school (if applicable)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      name="additional-info"
                      placeholder="Any medical conditions, special needs, or other information we should know..."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmittingApplication}>
                  {isSubmittingApplication ? "Submitting..." : "Submit Application"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  * Required fields. By submitting, you agree to our admissions policy. Our team will contact you within
                  7 days.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule a Visit and Contact Admissions */}
      <section id="schedule-visit" className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Visit Our Campus</h2>
              <p className="text-muted-foreground mb-10 text-pretty">
                The best way to experience ABONGONGOMOLA SEED SS is to see it for yourself. Join us for a guided tour of
                our facilities, meet our dedicated teachers, and learn more about our "Seed of Hope" philosophy.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visiting Hours</h4>
                    <p className="text-muted-foreground">Monday — Friday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm text-muted-foreground italic mt-1">
                      *Please schedule at least 48 hours in advance
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">Ogwok Village, Abongomola</p>
                    <p className="text-muted-foreground">Northern Region, Uganda</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Direct Line</h4>
                    <p className="text-muted-foreground">+256 (0) 777 520863</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 sm:p-8 rounded-3xl border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Visit</h3>
              <form onSubmit={handleScheduleVisit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="visit-name">Full Name</Label>
                    <Input id="visit-name" name="visit-name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visit-phone">Phone Number</Label>
                    <Input id="visit-phone" name="visit-phone" placeholder="+256..." required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visit-email">Email Address</Label>
                  <Input id="visit-email" name="visit-email" type="email" placeholder="email@example.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="visit-date">Preferred Date</Label>
                    <Input id="visit-date" name="visit-date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visit-time">Preferred Time</Label>
                    <Select name="visit-time" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (1PM - 4PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visit-questions">Additional Questions</Label>
                  <Textarea
                    id="visit-questions"
                    name="visit-questions"
                    placeholder="Is there anything specific you would like to see?"
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmittingVisit}>
                  {isSubmittingVisit ? "Submitting..." : "Confirm Visit Request"}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting, you agree to our visiting policy. Our team will contact you to confirm the appointment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance">Ready to Apply?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Start your child's journey at ABONGONGOMOLA SEED SS today. We look forward to welcoming you to our school
            family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full"
              onClick={handleDownloadForm}
              aria-label="Download application form PDF"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Application Form
            </Button>
            <Link href="#schedule-visit">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
