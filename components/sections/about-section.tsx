"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Our Course</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>
              Our Python programming course is designed to take you from beginner to professional with a customizable
              curriculum that adapts to your needs and goals.
            </p>
            <p>
              Whether you're looking to build a solid foundation in Python basics or advance to specialized areas like
              data science, web development, or automation, our modular approach lets you choose the path that's right
              for you.
            </p>
            <p>
              Each module includes comprehensive lessons, hands-on projects, and personalized feedback from experienced
              instructors who are passionate about helping you succeed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
