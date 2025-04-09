"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { jsPDF } from "jspdf"
import { useCourse } from "@/components/course-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, ChevronDown, ChevronUp } from "lucide-react"

export default function CurriculumSection() {
  const { modules, selectedModules, toggleModule } = useCourse()
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({})

  const toggleExpand = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }))
  }

  const generatePDF = () => {
    const doc = new jsPDF()

    // Add title
    doc.setFontSize(20)
    doc.text("Your Customized Python Curriculum", 20, 20)

    // Add selected modules
    doc.setFontSize(12)
    let yPos = 40

    selectedModules.forEach((module, index) => {
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
      if ("topics" in module) {
        doc.text("Topics:", 25, yPos)
        yPos += 7

        const topics = module.topics as string[]
        topics.forEach((topic) => {
          doc.text(`• ${topic}`, 30, yPos)
          yPos += 7
        })
      }

      // Add practices if they exist
      if ("practices" in module) {
        yPos += 3
        doc.text("Practice Projects:", 25, yPos)
        yPos += 7

        const practices = module.practices as string[]
        practices.forEach((practice) => {
          doc.text(`• ${practice}`, 30, yPos)
          yPos += 7
        })
      }

      // Add some space between modules
      yPos += 10

      // Check if we need a new page
      if (yPos > 270 && index < selectedModules.length - 1) {
        doc.addPage()
        yPos = 20
      }
    })

    // Save the PDF
    doc.save("python-curriculum.pdf")
  }

  return (
    <section id="curriculum" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Curriculum</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Customize your learning journey by selecting the modules that interest you. Basic modules are mandatory and
            provide the foundation for advanced topics.
          </p>
          <Button onClick={generatePDF} variant="outline" className="mt-4 gap-2">
            <Download className="h-4 w-4" />
            Generate PDF Curriculum
          </Button>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={module.selected ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{module.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {module.type === "basic" ? "Basic (Required)" : "Advanced (Optional)"}
                      </CardDescription>
                    </div>
                    {module.type === "advanced" && (
                      <Checkbox
                        checked={module.selected}
                        onCheckedChange={() => toggleModule(module.id)}
                        aria-label={`Select ${module.title} module`}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span>{module.sessions} sessions</span>
                    <span className="font-medium">${module.price}</span>
                  </div>

                  {expandedModules[module.id] && (
                    <div className="mt-4 space-y-4 text-sm">
                      {"topics" in (module as any) && (module as any).topics && (
                        <div>
                          <h4 className="font-medium">Topics Covered:</h4>
                          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                          {((module as any).topics as string[]).map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {"practices" in module && module.practices && (
                        <div>
                          <h4 className="font-medium">Practice Projects:</h4>
                          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                            {(module.practices as string[]).map((practice, index) => (
                              <li key={index}>{practice}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full gap-1" onClick={() => toggleExpand(module.id)}>
                    {expandedModules[module.id] ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show Details
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
