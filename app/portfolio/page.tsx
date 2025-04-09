import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Calendar, Building, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Automation Scripts",
    description:
      "Custom automation scripts for data manipulation and system optimization, enhancing efficiency for clients.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Automation", "Data Wrangling"],
    github: "https://github.com/mohitgauniyal",
    demo: "#",
  },
  {
    id: 2,
    title: "Backend API Development",
    description: "Robust API development for web applications, focusing on scalability and performance.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Flask", "Django", "REST API"],
    github: "https://github.com/mohitgauniyal",
    demo: "#",
  },
  {
    id: 3,
    title: "Financial Data Analysis",
    description:
      "Analysis of financial stock data with machine learning models for price prediction and portfolio optimization.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Machine Learning", "Data Analysis", "Financial Data"],
    github: "https://github.com/mohitgauniyal",
    demo: "#",
  },
  {
    id: 4,
    title: "Python Training Platform",
    description: "Interactive learning platform for Python programming with hands-on projects and exercises.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Education", "Web Development"],
    github: "https://github.com/mohitgauniyal",
    demo: "#",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Portfolio</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Software Developer specializing in Python, JavaScript, backend development, and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About Me</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Hello! I'm a software developer proficient in Python and JavaScript. I specialize in crafting powerful
                backend servers, designing software applications, developing APIs, and automating tasks for efficiency.
              </p>
              <p>
                Alongside my technical skills, I bring a strategic approach to business development. Let's connect and
                explore how I can contribute to the success of your projects with a blend of technology and business
                acumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Professional Experience</h2>

          <div className="space-y-12">
            {/* Inspirebyte */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>Apr 2022 - Present</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  <span className="font-medium">Inspirebyte</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="mt-2 text-muted-foreground">
                  Proficient in backend development with a focus on crafting robust code and automations. This journey
                  includes integrating analytical insight to drive successful business development initiatives.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Backend Development
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Automation
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Business Development
                  </span>
                </div>
              </div>
            </div>

            {/* Freelance Python Trainer */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>Aug 2018 - Present</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Freelance</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Python Trainer</h3>
                <p className="mt-2 text-muted-foreground">
                  Experienced Python Trainer focused on cultivating practical skills through customized and enjoyable
                  sessions. Specializing in hands-on projects to make learning both effective and fun.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Python</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Education
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Hands-on Projects
                  </span>
                </div>
              </div>
            </div>

            {/* UrbanPro */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>Nov 2019 - Jan 2022</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  <span className="font-medium">UrbanPro.com</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Python Trainer</h3>
                <p className="mt-2 text-muted-foreground">
                  As an accomplished Python Trainer, my focus has been on fostering practical skills through tailored
                  and engaging sessions. I specialize in hands-on projects, ensuring that learning is not only effective
                  but also enjoyable. My expertise includes Data Wrangling, API Development, Automation, and Back-End
                  Web Development.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Data Wrangling
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    API Development
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Back-End Web Development
                  </span>
                </div>
              </div>
            </div>

            {/* Career Launcher */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>Jul 2019 - Sep 2019</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  <span className="font-medium">Career Launcher</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Machine Learning Intern</h3>
                <p className="mt-2 text-muted-foreground">
                  Applied Machine Learning and Data Analysis skills to perform:
                </p>
                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                  <li>Financial Data Analysis of various stocks</li>
                  <li>Prediction of share prices at time instant based on stock data</li>
                  <li>Trade Call Prediction</li>
                  <li>Investment portfolio optimization</li>
                  <li>Clustering for Diversification analysis</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Machine Learning
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Data Analysis
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Financial Data
                  </span>
                </div>
              </div>
            </div>

            {/* Freelance Python Developer */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>Mar 2018 - Jul 2019</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Freelance</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Python Developer</h3>
                <p className="mt-2 text-muted-foreground">
                  As a Freelance Automation Script Writer, I crafted tailored scripts for clients, optimizing systems
                  and streamlining data manipulation. Committed to enhancing efficiency through customized solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Automation
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Python</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Data Manipulation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Education</h2>

          <div className="space-y-8">
            {/* MCA */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>2018 - 2020</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">IGNOU</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Master of Computer Applications (MCA)</h3>
                <p className="mt-2 text-muted-foreground">Computer Science</p>
              </div>
            </div>

            {/* BCA */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>2015 - 2018</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">IGNOU</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                <p className="mt-2 text-muted-foreground">Computer Science</p>
              </div>
            </div>

            {/* Diploma */}
            <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span>2014 - 2017</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">Government Polytechnic Dehradun</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Diploma in Computer Science</h3>
                <p className="mt-2 text-muted-foreground">Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Programming Languages */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-between">
                  <span>Python</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>JavaScript</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>HTML/CSS</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[80%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>SQL</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-primary" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Frameworks & Libraries */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-between">
                  <span>Django</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Flask</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>React</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[75%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Pandas</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-primary" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Specializations */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Specializations</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-between">
                  <span>Data Wrangling</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Automation</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>API Development</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Backend Development</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-primary" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Other Skills</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-between">
                  <span>Machine Learning</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[80%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Data Analysis</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Teaching</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-primary" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Business Development</span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div className="h-2 w-[75%] rounded-full bg-primary" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Certifications */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Languages */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Languages</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">English</span>
                    <span className="text-sm text-muted-foreground">Professional Working</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[80%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Hindi</span>
                    <span className="text-sm text-muted-foreground">Native or Bilingual</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[100%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Certifications</h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <h3 className="font-semibold">Machine Learning Specialization</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive training in machine learning algorithms and applications
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <h3 className="font-semibold">Machine Learning Foundation</h3>
                  <p className="text-sm text-muted-foreground">
                    Foundational concepts and techniques in machine learning
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <h3 className="font-semibold">Nanodegree</h3>
                  <p className="text-sm text-muted-foreground">Specialized technical training program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg bg-primary/10 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interested in Working Together?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you need custom automation solutions, backend development, or Python training for your team, I'm
              here to help bring your ideas to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
