// // "use client"

// // import type React from "react"

// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import { Moon, Sun } from "lucide-react"
// // import { useTheme } from "next-themes"
// // import { cn } from "@/lib/utils"
// // import { Button } from "@/components/ui/button"
// // import { motion } from "framer-motion"

// // const navItems = [
// //   { name: "Home", href: "#home" },
// //   { name: "Skills", href: "#skills" },
// //   { name: "Projects", href: "#projects" },
// //   { name: "Contact", href: "#contact" },
// // ]

// // export default function Header() {
// //   const [activeSection, setActiveSection] = useState("home")
// //   const [scrolled, setScrolled] = useState(false)
// //   const { theme, setTheme } = useTheme()
// //   const [mounted, setMounted] = useState(false)

// //   useEffect(() => {
// //     setMounted(true)

// //     const handleScroll = () => {
// //       // Set navbar background when scrolled
// //       if (window.scrollY > 50) {
// //         setScrolled(true)
// //       } else {
// //         setScrolled(false)
// //       }

// //       // Update active section based on scroll position
// //       const sections = document.querySelectorAll("section[id]")

// //       sections.forEach((section) => {
// //         const sectionTop = (section as HTMLElement).offsetTop - 100
// //         const sectionHeight = (section as HTMLElement).offsetHeight
// //         const sectionId = section.getAttribute("id") || ""

// //         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
// //           setActiveSection(sectionId)
// //         }
// //       })
// //     }

// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   // Handle smooth scrolling
// //   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
// //     e.preventDefault()
// //     const targetId = href.replace("#", "")
// //     const element = document.getElementById(targetId)

// //     if (element) {
// //       window.scrollTo({
// //         top: element.offsetTop - 80,
// //         behavior: "smooth",
// //       })
// //       setActiveSection(targetId)
// //     }
// //   }

// //   return (
// //     <motion.header
// //       className={cn(
// //         "fixed top-0 w-full z-50 transition-all duration-300 py-4",
// //         scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
// //       )}
// //       initial={{ y: -100, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       <div className="container flex items-center justify-between px-10">
// //         <Link href="#home" className="text-xl font-bold">
// //           Portfolio
// //         </Link>

// //         <nav className="hidden md:flex items-center space-x-6">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.name}
// //               href={item.href}
// //               onClick={(e) => handleNavClick(e, item.href)}
// //               className={cn(
// //                 "text-sm font-medium transition-colors hover:text-primary relative",
// //                 activeSection === item.href.replace("#", "") ? "text-primary" : "text-muted-foreground",
// //               )}
// //             >
// //               {item.name}
// //               {activeSection === item.href.replace("#", "") && (
// //                 <motion.span
// //                   className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
// //                   layoutId="activeSection"
// //                   transition={{ type: "spring", stiffness: 380, damping: 30 }}
// //                 />
// //               )}
// //             </Link>
// //           ))}
// //         </nav>

// //         <div className="flex items-center">
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// //             aria-label="Toggle theme"
// //           >
// //             {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
// //             {/* {console.log({theme} , {mounted})} */}
// //           </Button>

// //           <Button className="ml-4 hidden md:inline-flex">Download CV</Button>

// //           <Button className="ml-4 md:hidden" variant="ghost" size="icon">
// //             <span className="sr-only">Open menu</span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="24"
// //               height="24"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               className="h-6 w-6"
// //             >
// //               <line x1="4" x2="20" y1="12" y2="12" />
// //               <line x1="4" x2="20" y1="6" y2="6" />
// //               <line x1="4" x2="20" y1="18" y2="18" />
// //             </svg>
// //           </Button>
// //         </div>
// //       </div>
// //     </motion.header>
// //   )
// // }
// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ]

// export default function Header() {
//   const [activeSection, setActiveSection] = useState("home")
//   const [scrolled, setScrolled] = useState(false)
//   const { resolvedTheme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)

//     const handleScroll = () => {
//       // Set navbar background when scrolled
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }

//       // Update active section based on scroll position
//       const sections = document.querySelectorAll("section[id]")

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100
//         const sectionHeight = section.offsetHeight
//         const sectionId = section.getAttribute("id") || ""

//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//           setActiveSection(sectionId)
//         }
//       })
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Handle smooth scrolling
//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault()
//     const targetId = href.replace("#", "")
//     const element = document.getElementById(targetId)

//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: "smooth",
//       })
//       setActiveSection(targetId)
//     }
//   }

//   const toggleTheme = () => {
//     setTheme(resolvedTheme === "dark" ? "light" : "dark")
//   }

//   return (
//     <motion.header
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-500 py-5 shadow-xl",
//         scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent",
//       )}
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         <Link href="#home" className="text-xl font-bold font-dancing">
//           Muhammad Usman
//         </Link>

//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={(e) => handleNavClick(e, item.href)}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary relative py-2",
//                 activeSection === item.href.replace("#", "") ? "text-primary" : "text-muted-foreground",
//               )}
//             >
//               {item.name}
//               {activeSection === item.href.replace("#", "") && (
//                 <motion.span
//                   className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
//                   layoutId="activeSection"
//                   transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                 />
//               )}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           {mounted && (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//               aria-label="Toggle theme"
//               className="rounded-full hover:bg-primary/10"
//             >
//               {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
//           )}

//           <Button className="hidden md:inline-flex px-6">Download CV</Button>

//           <Button variant="ghost" size="icon" className="md:hidden ">
//             <span className="sr-only">Open menu</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-6 w-6"
//             >
//               <line x1="4" x2="20" y1="12" y2="12" />
//               <line x1="4" x2="20" y1="6" y2="6" />
//               <line x1="4" x2="20" y1="18" y2="18" />
//             </svg>
//           </Button>
//         </div>
//       </div>
//     </motion.header>
//   )
// }

// finilizzzzzr ***************************************************

// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { Moon, Sun, FileDown, Menu, Home, Code2, FolderKanban, MessageSquareText, X } from "lucide-react"
// import { useTheme } from "next-themes"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { motion, AnimatePresence } from "framer-motion"

// const navItems = [
//   { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
//   { name: "Expertise", href: "#skills", icon: <Code2 className="h-4 w-4" /> },
//   { name: "Portfolio", href: "#projects", icon: <FolderKanban className="h-4 w-4" /> },
//   { name: "Get in Touch", href: "#contact", icon: <MessageSquareText className="h-4 w-4" /> },
// ]

// export default function Header() {
//   const [activeSection, setActiveSection] = useState("home")
//   const [scrolled, setScrolled] = useState(false)
//   const { resolvedTheme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const headerRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     setMounted(true)

//     const handleScroll = () => {
//       // Set navbar background when scrolled
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }

//       // Update active section based on scroll position
//       const sections = document.querySelectorAll("section[id]")

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100
//         const sectionHeight = section.offsetHeight
//         const sectionId = section.getAttribute("id") || ""

//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//           setActiveSection(sectionId)
//         }
//       })
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Handle smooth scrolling
//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault()
//     const targetId = href.replace("#", "")
//     const element = document.getElementById(targetId)

//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: "smooth",
//       })
//       setActiveSection(targetId)
//       setMobileMenuOpen(false)
//     }
//   }

//   const toggleTheme = () => {
//     setTheme(resolvedTheme === "dark" ? "light" : "dark")
//   }

//   return (
//     <motion.header
//       ref={headerRef}
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-500 py-4",
//         scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40" : "bg-transparent",
//       )}
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="#home" className="group flex items-center space-x-2" onClick={(e) => handleNavClick(e, "#home")}>
//             <div className="relative">
//               <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
//                 <span className="text-xl font-bold text-primary">MU</span>
//               </div>
//               <motion.div
//                 className="absolute inset-0 rounded-full border-2 border-primary/50"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   opacity: [0.7, 0.4, 0.7],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//               />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-lg font-bold tracking-tight leading-none font-dancing">Muhammad Usman</span>
//               <span className="text-xs text-muted-foreground">Frontend Developer ✨</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={(e) => handleNavClick(e, item.href)}
//                 className={cn(
//                   "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all",
//                   activeSection === item.href.replace("#", "")
//                     ? "text-primary bg-primary/10"
//                     : "text-muted-foreground hover:text-foreground hover:bg-muted",
//                 )}
//               >
//                 <span className="hidden lg:block">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {activeSection === item.href.replace("#", "") && <span className="ml-1 text-xs">•</span>}
//               </Link>
//             ))}
//           </nav>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             {mounted && (
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={toggleTheme}
//                 aria-label="Toggle theme"
//                 className="rounded-md hover:bg-muted"
//               >
//                 {resolvedTheme === "dark" ? (
//                   <Sun className="h-[1.2rem] w-[1.2rem]" />
//                 ) : (
//                   <Moon className="h-[1.2rem] w-[1.2rem]" />
//                 )}
//               </Button>
//             )}

//             <Button className="hidden md:inline-flex items-center space-x-2 px-4 py-2 h-9" size="sm">
//               <FileDown className="h-4 w-4" />
//               <span>Resume</span>
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden rounded-md hover:bg-muted"
//               onClick={() => setMobileMenuOpen(true)}
//               aria-label="Open menu"
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 md:hidden"
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <div className="flex flex-col h-full p-6">
//               <div className="flex justify-between items-center mb-8">
//                 <Link
//                   href="#home"
//                   className="flex items-center space-x-2"
//                   onClick={(e) => {
//                     handleNavClick(e, "#home")
//                     setMobileMenuOpen(false)
//                   }}
//                 >
//                   <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
//                     <span className="text-xl font-bold text-primary">MU</span>
//                   </div>
//                   <span className="text-lg font-bold">Muhammad Usman</span>
//                 </Link>
//                 <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
//                   <X className="h-5 w-5" />
//                 </Button>
//               </div>

//               <nav className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={(e) => handleNavClick(e, item.href)}
//                     className={cn(
//                       "flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all",
//                       activeSection === item.href.replace("#", "")
//                         ? "text-primary bg-primary/10"
//                         : "text-muted-foreground hover:text-foreground hover:bg-muted",
//                     )}
//                   >
//                     {item.icon}
//                     <span>{item.name}</span>
//                   </Link>
//                 ))}
//               </nav>

//               <div className="mt-auto">
//                 <Button className="w-full mt-6 items-center justify-center space-x-2">
//                   <FileDown className="h-4 w-4" />
//                   <span>Download Resume</span>
//                 </Button>

//                 <div className="flex justify-center mt-8">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={toggleTheme}
//                     aria-label="Toggle theme"
//                     className="rounded-full"
//                   >
//                     {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Moon, Sun, FileDown, Menu, Home, Code2, FolderKanban, MessageSquareText, X, Briefcase, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Expertise", href: "#skills", icon: <Code2 className="h-4 w-4" /> },
  { name: "Portfolio", href: "#projects", icon: <FolderKanban className="h-4 w-4" /> },
  { name: "Contact", href: "#contact", icon: <MessageSquareText className="h-4 w-4" /> },
]

const socialLinks = [
  { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
  { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Twitter className="h-4 w-4" />, href: "https://twitter.com", label: "Twitter" },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      // Set navbar background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(targetId)
      setMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <motion.header
        ref={headerRef}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled 
            ? "py-3 bg-background/95 backdrop-blur-md shadow-lg" 
            : "py-5 bg-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scroll Progress Bar */}
        {/* <div 
          className="absolute bottom-0 left-0 h-0.5 bg-primary/80"
          style={{ width: `${scrollProgress}%` }}
        /> */}
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="#home" 
              className="group flex items-center space-x-3" 
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <div className="relative shine">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">MU</span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.4, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none font-playfair">Muhammad Usman</span>
                <span className="text-xs text-muted-foreground">Full Stack Developer ✨</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  <span className="hidden lg:block">{item.icon}</span>
                  <span>{item.name}</span>
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeIndicator"
                      className=""
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Social Links Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="hidden md:flex">
                  <Button variant="ghost" size="sm" className="gap-1 text-xs">
                    <span>Connect</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {socialLinks.map((link, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Theme Toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="rounded-full hover:bg-muted"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  )}
                </Button>
              )}

              {/* Resume Button */}
              <Button 
                className="hidden md:inline-flex items-center space-x-2 px-4 py-2 h-9 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow"
                size="sm"
              >
                <FileDown className="h-4 w-4" />
                <span>Resume</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full hover:bg-muted"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="#home"
                  className="flex items-center space-x-2"
                  onClick={(e) => {
                    handleNavClick(e, "#home")
                    setMobileMenuOpen(false)
                  }}
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">MU</span>
                  </div>
                  <span className="text-lg font-bold font-playfair">Muhammad Usman</span>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMobileMenuOpen(false)} 
                  aria-label="Close menu"
                  className="rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all",
                        activeSection === item.href.replace("#", "")
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex space-x-3 mb-8">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  className="w-full mt-6 items-center justify-center space-x-2 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Resume</span>
                </Button>

                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="rounded-full"
                  >
                    {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
