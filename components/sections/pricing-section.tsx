"use client"

import { motion } from "framer-motion"
import { useCourse } from "@/components/course-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingSection() {
  const { selectedModules, totalSessions, totalPrice } = useCourse()

  // Count basic and advanced modules
  const basicModules = selectedModules.filter((module) => module.type === "basic")
  const advancedModules = selectedModules.filter((module) => module.type === "advanced")

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your customized course pricing is calculated based on the modules you select. Basic modules are required,
            and you can add advanced modules as needed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl">Your Customized Course</CardTitle>
              <CardDescription className="text-primary-foreground/90">Tailored to your learning goals</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold">${totalPrice}</span>
                <span className="text-muted-foreground"> total</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Course Details:</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{totalSessions} total sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{basicModules.length} basic modules (required)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{advancedModules.length} advanced modules (selected)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Lifetime access to course materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>1-on-1 mentoring sessions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Selected Modules:</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {selectedModules.map((module) => (
                      <li key={module.id} className="flex items-center justify-between">
                        <span>{module.title}</span>
                        <span>${module.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 px-6 py-4">
              <Button className="w-full" onClick={scrollToContact}>
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
