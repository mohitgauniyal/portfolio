"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import { jsPDF } from "jspdf"
import { courseModules } from "@/lib/course-data"

export default function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCurriculum = () => {
    const doc = new jsPDF()

    // Add title
    doc.setFontSize(20)
    doc.text("ThePythonClass Curriculum", 20, 20)

    // Add modules
    doc.setFontSize(12)
    let yPos = 40

    courseModules.forEach((module, index) => {
      doc.setFontSize(16)
      doc.text(`${index + 1}. ${module.title}`, 20, yPos)
      yPos += 10

      doc.setFontSize(12)
      doc.text(`Type: ${module.type.charAt(0).toUpperCase() + module.type.slice(1)}`, 25, yPos)
      yPos += 7

      doc.text(`Sessions: ${module.sessions}`, 25, yPos)
      yPos += 7

      doc.text(`Description: ${module.description}`, 25, yPos)
      yPos += 10

      // Add topics if they exist
      if (module.topics) {
        doc.text("Topics:", 25, yPos)
        yPos += 7

        module.topics.forEach((topic) => {
          doc.text(`• ${topic}`, 30, yPos)
          yPos += 7
        })
      }

      // Check if we need a new page
      if (yPos > 270 && index < courseModules.length - 1) {
        doc.addPage()
        yPos = 20
      }
    })

    // Save the PDF
    doc.save("python-curriculum.pdf")
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Master Python Programming
            <span className="text-primary"> Your Way</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Customize your learning journey with our flexible Python curriculum. Choose the modules that match your
            goals and learn at your own pace.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" onClick={downloadCurriculum}>
              <Download className="h-4 w-4" />
              Download Curriculum
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToPricing}>
              Enroll Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top right blob */}
        <motion.div
          className="absolute -top-24 right-0 opacity-20 dark:opacity-10"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 40,
            ease: "easeInOut",
          }}
        >
          <svg width="400" height="400" viewBox="0 0 200 200">
            <motion.path
              fill="currentColor"
              d="M45.4,-58.6C58.9,-47.7,70.2,-33.4,74.7,-16.7C79.2,0,76.9,19.1,68.3,34.6C59.7,50.1,44.8,62,28.3,68.9C11.9,75.8,-6.2,77.7,-22.7,72.7C-39.2,67.7,-54.1,55.8,-63.4,40.3C-72.7,24.8,-76.5,5.7,-73.2,-12.3C-70,-30.3,-59.8,-47.2,-45.8,-58.1C-31.8,-69,-15.9,-73.9,0.2,-74.1C16.2,-74.4,32.4,-70,45.4,-58.6Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M45.4,-58.6C58.9,-47.7,70.2,-33.4,74.7,-16.7C79.2,0,76.9,19.1,68.3,34.6C59.7,50.1,44.8,62,28.3,68.9C11.9,75.8,-6.2,77.7,-22.7,72.7C-39.2,67.7,-54.1,55.8,-63.4,40.3C-72.7,24.8,-76.5,5.7,-73.2,-12.3C-70,-30.3,-59.8,-47.2,-45.8,-58.1C-31.8,-69,-15.9,-73.9,0.2,-74.1C16.2,-74.4,32.4,-70,45.4,-58.6Z",
                  "M48.7,-64.1C62.3,-53.5,72.1,-37.6,76.3,-20.1C80.5,-2.6,79.1,16.5,71.2,32.2C63.3,47.9,49,60.2,32.6,68.1C16.2,76,-2.3,79.5,-19.9,75.3C-37.5,71.1,-54.2,59.2,-65.4,43.2C-76.6,27.2,-82.3,7.1,-79.1,-11.5C-75.9,-30.1,-63.8,-47.2,-48.6,-57.9C-33.4,-68.6,-15.1,-72.9,1.5,-74.7C18.1,-76.5,35.1,-74.7,48.7,-64.1Z",
                  "M45.4,-58.6C58.9,-47.7,70.2,-33.4,74.7,-16.7C79.2,0,76.9,19.1,68.3,34.6C59.7,50.1,44.8,62,28.3,68.9C11.9,75.8,-6.2,77.7,-22.7,72.7C-39.2,67.7,-54.1,55.8,-63.4,40.3C-72.7,24.8,-76.5,5.7,-73.2,-12.3C-70,-30.3,-59.8,-47.2,-45.8,-58.1C-31.8,-69,-15.9,-73.9,0.2,-74.1C16.2,-74.4,32.4,-70,45.4,-58.6Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 70,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>

        {/* Bottom left blob */}
        <motion.div
          className="absolute bottom-0 left-0 opacity-20 dark:opacity-10"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 70,
            ease: "easeInOut",
          }}
        >
          <svg width="300" height="300" viewBox="0 0 200 200">
            <motion.path
              fill="currentColor"
              d="M47.7,-57.2C59.5,-47.3,65.8,-30.9,68.2,-14.2C70.6,2.4,69.1,19.4,61.5,33.5C53.9,47.6,40.1,58.9,24.5,65.3C8.9,71.7,-8.6,73.3,-24.8,68.5C-41,63.7,-55.9,52.5,-65.3,37.3C-74.7,22.1,-78.5,2.8,-74.2,-14.3C-69.8,-31.5,-57.3,-46.6,-42.8,-55.8C-28.3,-65,-14.2,-68.3,1.3,-69.9C16.7,-71.5,33.5,-71.3,47.7,-57.2Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M47.7,-57.2C59.5,-47.3,65.8,-30.9,68.2,-14.2C70.6,2.4,69.1,19.4,61.5,33.5C53.9,47.6,40.1,58.9,24.5,65.3C8.9,71.7,-8.6,73.3,-24.8,68.5C-41,63.7,-55.9,52.5,-65.3,37.3C-74.7,22.1,-78.5,2.8,-74.2,-14.3C-69.8,-31.5,-57.3,-46.6,-42.8,-55.8C-28.3,-65,-14.2,-68.3,1.3,-69.9C16.7,-71.5,33.5,-71.3,47.7,-57.2Z",
                  "M43.4,-52.7C55.9,-43.5,65.5,-29.7,69.4,-13.8C73.3,2.1,71.5,20.1,63.3,34.2C55.1,48.3,40.5,58.5,24.4,65.2C8.3,71.9,-9.3,75.1,-25.2,70.5C-41.1,65.9,-55.3,53.5,-64.2,37.8C-73.1,22.1,-76.7,3.1,-72.4,-13.8C-68.1,-30.7,-55.9,-45.5,-41.8,-54.5C-27.7,-63.5,-11.7,-66.7,2.9,-70.1C17.5,-73.4,34.9,-76.9,43.4,-52.7Z",
                  "M47.7,-57.2C59.5,-47.3,65.8,-30.9,68.2,-14.2C70.6,2.4,69.1,19.4,61.5,33.5C53.9,47.6,40.1,58.9,24.5,65.3C8.9,71.7,-8.6,73.3,-24.8,68.5C-41,63.7,-55.9,52.5,-65.3,37.3C-74.7,22.1,-78.5,2.8,-74.2,-14.3C-69.8,-31.5,-57.3,-46.6,-42.8,-55.8C-28.3,-65,-14.2,-68.3,1.3,-69.9C16.7,-71.5,33.5,-71.3,47.7,-57.2Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 55,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 85,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 h-24 w-24 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 72,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 80,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}
