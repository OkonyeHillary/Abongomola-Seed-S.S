"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  LogOut,
  MessageSquare,
  Bell,
  Megaphone,
  Send,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ParentDashboard() {
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false)
  const [isTranscriptModalOpen, setIsTranscriptModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { toast } = useToast()

  const handleAction = (type: string) => {
    toast({
      title: "Request Received",
      description: `Your ${type} has been submitted successfully.`,
    })
    setIsFeesModalOpen(false)
    setIsTranscriptModalOpen(false)
    setIsContactModalOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background px-4 py-3 sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline">Parent Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative" title="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            <Badge variant="secondary" className="px-3 py-1">
              John Doe (Parent)
            </Badge>
            <Link href="/parent-portal">
              <Button variant="ghost" size="icon" title="Logout">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 p-4 md:p-8">
        <Card className="mb-6 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="flex items-start gap-3 p-4">
            <Megaphone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm text-amber-900 dark:text-amber-100">
                New Announcement: Mid-Term Exams Starting Soon
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                Posted 2 hours ago by Mr. Okello • Click to view details
              </p>
            </div>
            <Badge variant="secondary" className="bg-red-600 text-white hover:bg-red-700">
              New
            </Badge>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Student</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Mary Amoli</div>
              <p className="text-xs text-muted-foreground">Senior 2 • Section A</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">96%</div>
              <p className="text-xs text-muted-foreground">Current Term</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82.5%</div>
              <p className="text-xs text-muted-foreground">Top 10% of class</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fees Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">UGX 150,000</div>
              <p className="text-xs text-muted-foreground">Due: Oct 30, 2025</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Recent Grades */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Recent Academic Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", score: "88/100", date: "Oct 12", grade: "D1" },
                    { subject: "English Language", score: "75/100", date: "Oct 10", grade: "C3" },
                    { subject: "Biology", score: "92/100", date: "Oct 08", grade: "D1" },
                    { subject: "Geography", score: "81/100", date: "Oct 05", grade: "D2" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="font-semibold">{item.subject}</p>
                        <p className="text-xs text-muted-foreground">Mid-Term Assessment • {item.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{item.score}</p>
                        <Badge variant="outline">{item.grade}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6 w-full bg-transparent">
                  View All Reports
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming School Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Parent-Teacher Consultation", date: "Nov 05", time: "09:00 AM" },
                    { title: "Inter-House Sports Gala", date: "Nov 12", time: "08:30 AM" },
                  ].map((event, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-l-4 border-primary bg-muted/50 p-4 rounded-r-lg"
                    >
                      <div className="flex flex-col items-center min-w-[50px]">
                        <span className="text-xs uppercase font-bold text-muted-foreground">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{event.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  Teacher Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Mid-Term Exams Starting Soon",
                      teacher: "Mr. Okello",
                      subject: "Mathematics",
                      message:
                        "Mid-term examinations will commence on November 20th. Please ensure your child revises all topics covered this term.",
                      date: "2 hours ago",
                      isNew: true,
                    },
                    {
                      title: "Senior 2 Mathematics Assignment Due",
                      teacher: "Mr. Okello",
                      subject: "Mathematics",
                      message:
                        "The assignment on algebraic expressions is due by Friday, November 15th. Students should submit to the class monitor.",
                      date: "Yesterday",
                      isNew: true,
                    },
                    {
                      title: "Parent-Teacher Meeting Reminder",
                      teacher: "Administration",
                      subject: "General",
                      message:
                        "Reminder: Parent-Teacher consultations are scheduled for November 5th at 9:00 AM. Please confirm your attendance.",
                      date: "3 days ago",
                      isNew: false,
                    },
                  ].map((announcement, i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-4 space-y-2 hover:bg-muted/50 transition-colors relative"
                    >
                      {announcement.isNew && (
                        <Badge className="absolute top-2 right-2 bg-red-600 text-white hover:bg-red-700 text-xs">
                          New
                        </Badge>
                      )}
                      <div>
                        <p className="font-semibold">{announcement.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            {announcement.teacher} • {announcement.subject}
                          </span>
                          <span className="text-xs text-muted-foreground">• {announcement.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{announcement.message}</p>
                      <Button variant="link" className="p-0 h-auto text-xs">
                        Mark as read
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6 w-full bg-transparent">
                  View All Announcements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Modules */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Button
                  variant="secondary"
                  className="justify-start gap-3 w-full hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setIsFeesModalOpen(true)}
                >
                  <CreditCard className="h-4 w-4" /> Pay School Fees
                </Button>

                <Button
                  variant="secondary"
                  className="justify-start gap-3 w-full hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setIsTranscriptModalOpen(true)}
                >
                  <FileText className="h-4 w-4" /> Request Transcript
                </Button>

                <Button
                  variant="secondary"
                  className="justify-start gap-3 w-full hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <MessageSquare className="h-4 w-4" /> Contact Teacher
                </Button>
              </CardContent>
            </Card>

            {isFeesModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Pay School Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Amount (UGX)</Label>
                      <Input type="number" placeholder="Enter amount" defaultValue="150000" />
                    </div>
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <select className="w-full p-2 border rounded-md bg-transparent">
                        <option>Mobile Money (MTN/Airtel)</option>
                        <option>Bank Transfer</option>
                        <option>Credit/Debit Card</option>
                      </select>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => setIsFeesModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1" onClick={() => handleAction("Fee Payment")}>
                        Proceed to Pay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {isTranscriptModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Request Transcript
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Select the term/year for the transcript request.</p>
                    <div className="space-y-2">
                      <Label>Academic Year</Label>
                      <Input placeholder="e.g. 2024-2025" />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => setIsTranscriptModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1" onClick={() => handleAction("Transcript Request")}>
                        Submit Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {isContactModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Contact Teacher
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Teacher</Label>
                      <select className="w-full p-2 border rounded-md bg-transparent text-sm">
                        <option>Mr. Opio Ronald (Mathematics)</option>
                        <option>Mrs. Gift (English)</option>
                        <option>Administration (General)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Message</Label>
                      <Textarea placeholder="Type your message here..." rows={4} />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => setIsContactModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1" onClick={() => handleAction("Message")}>
                        <Send className="h-4 w-4 mr-2" /> Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
