import { Button } from "@/components/ui/button"
import { ArrowRight, Code, BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">Mohit Gauniyal</span>
              </h1>
              <p className="text-xl text-muted-foreground">Developer, Python Instructor, and Technology Enthusiast</p>
              <p className="text-lg text-muted-foreground">
                I help individuals and organizations build skills in Python programming and develop innovative
                solutions.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg">
                  <Link href="/python-class">
                    Explore Python Classes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-b from-primary/20 to-primary/0 p-4">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Mohit Gauniyal"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-24 right-0 -z-10 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path
              fill="currentColor"
              d="M45.4,-58.6C58.9,-47.7,70.2,-33.4,74.7,-16.7C79.2,0,76.9,19.1,68.3,34.6C59.7,50.1,44.8,62,28.3,68.9C11.9,75.8,-6.2,77.7,-22.7,72.7C-39.2,67.7,-54.1,55.8,-63.4,40.3C-72.7,24.8,-76.5,5.7,-73.2,-12.3C-70,-30.3,-59.8,-47.2,-45.8,-58.1C-31.8,-69,-15.9,-73.9,0.2,-74.1C16.2,-74.4,32.4,-70,45.4,-58.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">What I Do</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Python Development */}
            <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Python Development</h3>
              <p className="mt-2 text-muted-foreground">
                I develop backend systems, APIs, and automation scripts using Python to solve complex business problems.
              </p>
              <div className="mt-6 flex-1" />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>

            {/* Python Training */}
            <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Python Training</h3>
              <p className="mt-2 text-muted-foreground">
                I provide customized Python training with hands-on projects for individuals, teams, and educational
                institutions.
              </p>
              <div className="mt-6 flex-1" />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/python-class">Explore Courses</Link>
              </Button>
            </div>

            {/* Automation Solutions */}
            <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Automation Solutions</h3>
              <p className="mt-2 text-muted-foreground">
                I build custom automation solutions to streamline workflows, optimize systems, and enhance data
                processing efficiency.
              </p>
              <div className="mt-6 flex-1" />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/contact">Discuss Your Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative mx-auto aspect-video w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mohit Gauniyal teaching"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a software developer proficient in Python and JavaScript with over 6 years of experience. I
                  specialize in crafting powerful backend servers, designing software applications, developing APIs, and
                  automating tasks for efficiency.
                </p>
                <p>
                  My journey began with a Diploma in Computer Science from Government Polytechnic Dehradun, followed by
                  BCA and MCA degrees from IGNOU. Since then, I've worked with various clients and organizations to
                  develop custom solutions and provide Python training.
                </p>
                <p>
                  I'm particularly passionate about automation, data wrangling, and making complex technical concepts
                  accessible through teaching and mentoring.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">What People Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                "Mohit's Python course was exactly what I needed to advance my career. His teaching style made complex
                concepts easy to understand."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div className="ml-3">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Data Analyst</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                "We hired Mohit to train our development team, and the results were outstanding. Our productivity has
                increased significantly."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div className="ml-3">
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, Tech Solutions Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                "The custom automation solution Mohit developed for our business has saved us countless hours of manual
                work."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div className="ml-3">
                  <p className="font-medium">Jessica Williams</p>
                  <p className="text-sm text-muted-foreground">Operations Manager</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Work Together?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you're looking to learn Python, need technical training for your team, or require custom software
              development, I'm here to help.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/python-class">Explore ThePythonClass</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
