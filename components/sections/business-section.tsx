"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Calendar, Award, ArrowRight } from "lucide-react"

export default function BusinessSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="business" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">For Businesses & Groups</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specialized Python training solutions for organizations, educational institutions, and groups
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Corporate Training</CardTitle>
                <CardDescription>
                  Upskill your team with customized Python training programs tailored to your business needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Team-Based Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Training sessions designed for teams of 5-50 people with collaborative exercises
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      On-site or remote training sessions scheduled to fit your team's availability
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Industry-Specific Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Curriculum customized to your industry with relevant examples and case studies
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" onClick={scrollToContact}>
                  Request Corporate Training
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Educational Institutions</CardTitle>
                <CardDescription>
                  Comprehensive Python programs for schools, colleges, and educational organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Classroom-Ready Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete curriculum with lecture materials, exercises, and assessment tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Semester-Length Programs</h3>
                    <p className="text-sm text-muted-foreground">
                      Programs designed to fit academic calendars with progressive learning paths
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Student Progress Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Tools to monitor student engagement, progress, and achievement
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" onClick={scrollToContact}>
                  Inquire About Educational Programs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl rounded-lg bg-primary/5 p-6 text-center dark:bg-primary/10"
        >
          <h3 className="text-xl font-bold">Looking for a custom training solution?</h3>
          <p className="mt-2 text-muted-foreground">
            Whether you're a small team, large corporation, or educational institution, we can create a tailored Python
            training program that meets your specific requirements and goals.
          </p>
          <Button className="mt-4" onClick={scrollToContact}>
            Contact Us for Custom Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
