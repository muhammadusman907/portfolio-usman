"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/muhammadusman907",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/muhammad-usman907",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#skills" },
    { name: "Portfolio", href: "#projects" },
    { name: "Get in Touch", href: "#contact" },
  ]

  return (
    <footer className="border-t bg-muted/10">
      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">MU</span>
              </div>
              <Link href="#home" className="text-2xl font-bold tracking-tight">
                Muhammad Usman
              </Link>
            </div>

            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              A passionate frontend architect dedicated to crafting exceptional digital experiences that combine
              aesthetic excellence with technical innovation and user-centered design principles.
            </p>

            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-background hover:!bg-black hover:text-primary-foreground rounded-full p-2.5 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="font-bold text-lg">Quick Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h3 className="font-bold text-lg">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 text-primary/80" />
                <span>Pakistan, Karachi</span>
              </li>
              <li>
                <a
                  href="mailto:muhammadusman90712@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary/80" />
                  <span>muhammadusman90712@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+92-303-4212706"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-primary/80" />
                  <span>+92 303 4212706</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <Button className="group" onClick={() => (window.location.href = "#contact")}>
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                <span>Send Message</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
            <p>© {currentYear} Muhammad Usman. All rights reserved.</p>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-muted-foreground/30"></div>
            <p className="flex items-center">
              <span>Crafted with</span>
              <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" />
              <span>and Next.js</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30"></div>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="sm:ml-auto"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="h-2 w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
    </footer>
  )
}

