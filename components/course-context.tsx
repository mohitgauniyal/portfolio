"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { courseModules } from "@/lib/course-data"

type Module = {
  id: string
  title: string
  type: "basic" | "advanced"
  description: string
  sessions: number
  price: number
  selected?: boolean
}

type CourseContextType = {
  modules: Module[]
  selectedModules: Module[]
  totalSessions: number
  totalPrice: number
  toggleModule: (moduleId: string) => void
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CourseProvider({ children }: { children: ReactNode }) {
  const [modules, setModules] = useState<Module[]>(
    courseModules.map((module) => ({
      ...module,
      selected: module.type === "basic", // Basic modules are always selected
    })),
  )

  const selectedModules = modules.filter((module) => module.selected)
  const totalSessions = selectedModules.reduce((total, module) => total + module.sessions, 0)
  const totalPrice = selectedModules.reduce((total, module) => total + module.price, 0)

  const toggleModule = (moduleId: string) => {
    setModules((prevModules) =>
      prevModules.map((module) => {
        // Don't allow basic modules to be deselected
        if (module.id === moduleId && module.type !== "basic") {
          return { ...module, selected: !module.selected }
        }
        return module
      }),
    )
  }

  return (
    <CourseContext.Provider
      value={{
        modules,
        selectedModules,
        totalSessions,
        totalPrice,
        toggleModule,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const context = useContext(CourseContext)
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider")
  }
  return context
}
