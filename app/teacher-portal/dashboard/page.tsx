import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Bell, CheckCircle2, CloudUpload, Users, Send, Megaphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

const studentsByClass = {
  "Senior 1": [
    { id: 1, name: "Akello Grace", gender: "F", status: "Active" },
    { id: 2, name: "Okello David", gender: "M", status: "Active" },
    { id: 3, name: "Atim Sarah", gender: "F", status: "Active" },
    { id: 4, name: "Opio Samuel", gender: "M", status: "Active" },
    { id: 5, name: "Akumu Betty", gender: "F", status: "Active" },
    { id: 6, name: "Oloya James", gender: "M", status: "Active" },
    { id: 7, name: "Auma Patricia", gender: "F", status: "Active" },
    { id: 8, name: "Ocheng Peter", gender: "M", status: "Active" },
  ],
  "Senior 2": [
    { id: 9, name: "Amoli Mary", gender: "F", status: "Active" },
    { id: 10, name: "Komakech Francis", gender: "M", status: "Active" },
    { id: 11, name: "Achan Joy", gender: "F", status: "Active" },
    { id: 12, name: "Omara Moses", gender: "M", status: "Active" },
    { id: 13, name: "Apio Jane", gender: "F", status: "Active" },
    { id: 14, name: "Labeja Robert", gender: "M", status: "Active" },
    { id: 15, name: "Ayot Nancy", gender: "F", status: "Active" },
  ],
  "Senior 3": [
    { id: 16, name: "Aciro Christine", gender: "F", status: "Active" },
    { id: 17, name: "Odong Henry", gender: "M", status: "Active" },
    { id: 18, name: "Alimo Rose", gender: "F", status: "Active" },
    { id: 19, name: "Olanya Julius", gender: "M", status: "Active" },
    { id: 20, name: "Acan Harriet", gender: "F", status: "Active" },
    { id: 21, name: "Ocen George", gender: "M", status: "Active" },
  ],
  "Senior 4": [
    { id: 22, name: "Aber Florence", gender: "F", status: "Active" },
    { id: 23, name: "Otim Patrick", gender: "M", status: "Active" },
    { id: 24, name: "Acio Winnie", gender: "F", status: "Active" },
    { id: 25, name: "Okwera Isaac", gender: "M", status: "Active" },
    { id: 26, name: "Akwero Doreen", gender: "F", status: "Active" },
    { id: 27, name: "Olwedo Martin", gender: "M", status: "Active" },
    { id: 28, name: "Aol Margaret", gender: "F", status: "Active" },
  ],
  "Senior 5": [
    { id: 29, name: "Atoo Caroline", gender: "F", status: "Active" },
    { id: 30, name: "Okello Richard", gender: "M", status: "Active" },
    { id: 31, name: "Alobo Rebecca", gender: "F", status: "Active" },
    { id: 32, name: "Opio Emmanuel", gender: "M", status: "Active" },
    { id: 33, name: "Adong Mercy", gender: "F", status: "Active" },
  ],
  "Senior 6": [
    { id: 34, name: "Abalo Agnes", gender: "F", status: "Active" },
    { id: 35, name: "Ocan Simon", gender: "M", status: "Active" },
    { id: 36, name: "Alyek Lucy", gender: "F", status: "Active" },
    { id: 37, name: "Obua Stephen", gender: "M", status: "Active" },
    { id: 38, name: "Akot Sylvia", gender: "F", status: "Active" },
    { id: 39, name: "Oyella Joseph", gender: "M", status: "Active" },
  ],
}

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Mr. Opio Ronald • Senior 4 Mathematics</p>
          </div>
          <Button className="gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </Button>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="bg-background border">
            <TabsTrigger value="upload">Upload Section</TabsTrigger>
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="md:col-span-2 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileUp className="h-5 w-5 text-primary" />
                    Upload Educational Materials
                  </CardTitle>
                  <CardDescription>
                    Share assignments, notes, or grading sheets with your students and the administration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Resource Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assignment">Assignment</SelectItem>
                          <SelectItem value="notes">Lecture Notes</SelectItem>
                          <SelectItem value="grades">Grading Sheet</SelectItem>
                          <SelectItem value="syllabus">Syllabus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Target Class</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="s1">Senior 1</SelectItem>
                          <SelectItem value="s2">Senior 2</SelectItem>
                          <SelectItem value="s3">Senior 3</SelectItem>
                          <SelectItem value="s4">Senior 4</SelectItem>
                          <SelectItem value="s5">Senior 5</SelectItem>
                          <SelectItem value="s6">Senior 6</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Title / Description</Label>
                    <Input placeholder="e.g., Trigonometry Homework Week 4" />
                  </div>

                  <div className="border-2 border-dashed rounded-xl p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CloudUpload className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground mt-1">PDF, DOCX, or XLSX (max 10MB)</p>
                    </div>
                  </div>

                  <Button className="w-full py-6 text-lg gap-2">
                    <FileUp className="h-5 w-5" /> Publish Resource
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Uploads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Algebra_Quiz_Results.xlsx", date: "2 hours ago", type: "Grades" },
                        { name: "Geometry_Basics_Notes.pdf", date: "Yesterday", type: "Notes" },
                        { name: "Calculus_Intro.docx", date: "3 days ago", type: "Assignment" },
                      ].map((file, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm border-b pb-3 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-muted flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium truncate max-w-[150px]">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {file.type} • {file.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-lg">System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90 leading-relaxed">
                      All uploads are successfully synced with the Parent Portal and Student Resource Center.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="classes">
            <div className="space-y-8">
              {Object.entries(studentsByClass).map(([className, students]) => (
                <Card key={className}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                          {className}
                        </CardTitle>
                        <CardDescription>{students.length} Students</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm self-start sm:self-auto">
                        {students.filter((s) => s.status === "Active").length} Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-muted/50 border-b">
                            <tr>
                              <th className="text-left p-3 font-semibold text-sm">ID</th>
                              <th className="text-left p-3 font-semibold text-sm">Student Name</th>
                              <th className="text-left p-3 font-semibold text-sm">Gender</th>
                              <th className="text-left p-3 font-semibold text-sm">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {students.map((student) => (
                              <tr key={student.id} className="border-b last:border-0 hover:bg-muted/50">
                                <td className="p-3 text-sm text-muted-foreground">{student.id}</td>
                                <td className="p-3 text-sm font-medium">{student.name}</td>
                                <td className="p-3 text-sm">{student.gender}</td>
                                <td className="p-3">
                                  <Badge variant="outline" className="text-xs">
                                    {student.status}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="announcements">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Megaphone className="h-5 w-5 text-primary" />
                    Create Announcement
                  </CardTitle>
                  <CardDescription>Post important notices visible to parents and students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Announcement Title</Label>
                    <Input placeholder="e.g., Important: Mid-Term Exam Schedule" />
                  </div>

                  <div className="space-y-2">
                    <Label>Target Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        <SelectItem value="s1">Senior 1</SelectItem>
                        <SelectItem value="s2">Senior 2</SelectItem>
                        <SelectItem value="s3">Senior 3</SelectItem>
                        <SelectItem value="s4">Senior 4</SelectItem>
                        <SelectItem value="s5">Senior 5</SelectItem>
                        <SelectItem value="s6">Senior 6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea
                      placeholder="Write your announcement message here..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button className="w-full gap-2">
                    <Send className="h-4 w-4" /> Publish Announcement
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Announcements</CardTitle>
                  <CardDescription>Your published announcements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Mid-Term Exams Starting Soon",
                        target: "All Classes",
                        date: "2 hours ago",
                        views: 48,
                      },
                      {
                        title: "Senior 4 Mathematics Assignment Due",
                        target: "Senior 4",
                        date: "Yesterday",
                        views: 15,
                      },
                      {
                        title: "Parent-Teacher Meeting Reminder",
                        target: "All Classes",
                        date: "3 days ago",
                        views: 72,
                      },
                    ].map((announcement, i) => (
                      <div key={i} className="border rounded-lg p-4 space-y-2 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{announcement.title}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {announcement.target}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{announcement.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Bell className="h-3 w-3" />
                          <span>{announcement.views} parents notified</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Announcements
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
