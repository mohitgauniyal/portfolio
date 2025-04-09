"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    content:
      "This Python course completely changed my career trajectory. The customizable curriculum allowed me to focus on web development with Flask, which helped me land my dream job. The instructors were incredibly supportive and knowledgeable.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    content:
      "I needed to learn Python specifically for data analysis, and this course was perfect. I selected the data analysis and machine learning modules, and within months I was able to automate most of my workflow. The ROI on this course has been incredible.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Software Engineer",
    content:
      "As someone transitioning from Java to Python, I appreciated being able to skip the basics and dive right into advanced topics. The OOP and automation modules were particularly helpful for my work. Highly recommended for experienced programmers.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Students Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from students who have transformed their careers with our Python course.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </blockquote>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
