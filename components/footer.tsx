import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Mohit Gauniyal</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Developer, Python Instructor, and Technology Enthusiast
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold">Links</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/python-class" className="text-muted-foreground hover:text-foreground font-medium">
                    ThePythonClass
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-muted-foreground hover:text-foreground">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Me
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@mohitgauniyal.com" className="text-muted-foreground hover:text-foreground">
                    hello@mohitgauniyal.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="mt-4">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground">Subscribe to my newsletter for updates.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mohit Gauniyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
