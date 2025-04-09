"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Mohit Gauniyal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/python-class"
            className={`text-sm font-medium transition-colors hover:text-primary font-bold ${
              isActive("/python-class") ? "text-primary" : "text-foreground"
            }`}
          >
            ThePythonClass
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/portfolio") ? "text-primary" : "text-foreground"
            }`}
          >
            Portfolio
          </Link>
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                isActive("/") ? "bg-accent/50" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/python-class"
              className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                isActive("/python-class") ? "bg-accent/50" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ThePythonClass
            </Link>
            <Link
              href="/portfolio"
              className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground ${
                isActive("/portfolio") ? "bg-accent/50" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
