// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

// export default function Hero() {
//   const [text, setText] = useState("")
//   const [index, setIndex] = useState(0)
//   const phrases = ["Frontend Developer", "React Specialist"]
//   const [isDeleting, setIsDeleting] = useState(false);

//   // useEffect(() => {
//   //   const typingInterval = setInterval(() => {
//   //     const currentPhrase = phrases[index]

//   //     if (text.length < currentPhrase.length) {
//   //       setText(currentPhrase.substring(0, text.length + 1))
//   //     } else {
//   //       // Wait a bit before starting to delete
//   //       setTimeout(() => {
//   //         clearInterval(typingInterval)

//   //         // Delete text
//   //         const deletingInterval = setInterval(() => {
//   //           if (text.length > 0) {
//   //             setText(text.substring(0, text.length - 1))
//   //           } else {
//   //             clearInterval(deletingInterval)
//   //             setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
//   //           }
//   //         }, 50)
//   //       }, 2000)
//   //     }
//   //   }, 100)

//   //   return () => clearInterval(typingInterval)
//   // }, [text, index, phrases])
//   useEffect(() => {
//     const currentPhrase = phrases[index];

//     if (!isDeleting) {
//       // Typing logica
//       if (text.length < currentPhrase.length) {
//         const typingTimeout = setTimeout(() => {
//           setText(currentPhrase.substring(0, text.length + 1));
//         }, 100);
//         return () => clearTimeout(typingTimeout);
//       } else {
//         // Pause before deleting
//         const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
//         return () => clearTimeout(pauseTimeout);
//       }
//     } else {
//       // Deleting logic
//       if (text.length > 0) {
//         const deletingTimeout = setTimeout(() => {
//           setText(text.substring(0, text.length - 1));
//         }, 50);
//         return () => clearTimeout(deletingTimeout);
//       } else {
//         // Move to the next phrase
//         setIsDeleting(false);
//         setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//       }
//     }
//   }, [text, isDeleting, index, phrases]);
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center pt-20 px-10">
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col space-y-6">
//             <motion.span variants={item} className="text-primary italic font-extrabold">
//               Hello, I&apos;m
//             </motion.span>

//             <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold">
//               Muhammad Usman
//             </motion.h1>

//             <motion.div variants={item} className="h-8">
//               <span className="text-xl md:text-2xl font-medium text-muted-foreground">
//                 I&apos;m a <span className="text-primary">{text}</span>
//                 <span className="animate-blink">|</span>
//               </span>
//             </motion.div>

//             <motion.p variants={item} className="text-muted-foreground max-w-md">
//               Passionate about creating beautiful, functional, and user-friendly digital experiences. With expertise in
//               React, Next.js, and modern frontend technologies.
//             </motion.p>

//             <motion.div variants={item} className="flex space-x-4">
//               <Button size="lg">Contact Me</Button>
//               <Button size="lg" variant="outline">
//                 View Projects
//               </Button>
//             </motion.div>

//             <motion.div variants={item} className="flex space-x-4 pt-4">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Github className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <Twitter className="h-6 w-6" />
//               </a>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative w-full aspect-square max-w-md mx-auato">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
//               <div className="relative bg-muted rounded-full overflow-hidden border-4 border-background shadow-xl">
//                 <Image
//                   src="/placeholder.svg?height=600&width=600"
//                   alt="Muhammad Usman"
//                   width={600}
//                   height={600}
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
//         >
//           <a
//             href="#skills"
//             className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
//             onClick={(e) => {
//               e.preventDefault()
//               document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
//             }}
//           >
//             <span className="text-sm mb-2">Scroll Down</span>
//             <ArrowDown className="h-5 w-5 animate-bounce" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

// export default function Hero() {
//   const [text, setText] = useState("")
//   const [index, setIndex] = useState(0)
//   const phrases = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast"]
//   const [isDeleting, setIsDeleting] = useState(false)

//   useEffect(() => {
//     const currentPhrase = phrases[index]

//     if (!isDeleting) {
//       // Typing logic
//       if (text.length < currentPhrase.length) {
//         const typingTimeout = setTimeout(() => {
//           setText(currentPhrase.substring(0, text.length + 1))
//         }, 100)
//         return () => clearTimeout(typingTimeout)
//       } else {
//         // Pause before deleting
//         const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000)
//         return () => clearTimeout(pauseTimeout)
//       }
//     } else {
//       // Deleting logic
//       if (text.length > 0) {
//         const deletingTimeout = setTimeout(() => {
//           setText(text.substring(0, text.length - 1))
//         }, 50)
//         return () => clearTimeout(deletingTimeout)
//       } else {
//         // Move to the next phrase
//         setIsDeleting(false)
//         setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
//       }
//     }
//   }, [text, isDeleting, index, phrases])

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 md:px-10">
//       <div className="container mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col space-y-8">
//             <motion.span variants={item} className="text-primary font-semibold tracking-wide">
//               Hello, I&apos;m
//             </motion.span>

//             <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//               Muhammad Usman
//             </motion.h1>

//             <motion.div variants={item} className="h-10">
//               <div className="text-xl md:text-2xl font-medium text-muted-foreground flex items-center">
//                 <span className="mr-2">I specialize in</span>
//                 <span className="text-primary font-semibold min-w-[12rem] inline-block">
//                   {text}
//                   <span className="animate-blink ml-1">|</span>
//                 </span>
//               </div>
//             </motion.div>

//             <motion.p variants={item} className="text-muted-foreground text-lg leading-relaxed max-w-md">
//               Dedicated to crafting exceptional digital experiences with a focus on performance, accessibility, and
//               user-centered design. Leveraging modern frontend technologies to build scalable web applications.
//             </motion.p>

//             <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
//               <Button size="lg" className="font-medium px-6">
//                 View Portfolio
//               </Button>
//               <Button size="lg" variant="outline" className="font-medium px-6">
//                 Download Resume
//               </Button>
//             </motion.div>

//             <motion.div variants={item} className="flex space-x-6 pt-4">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 aria-label="GitHub Profile"
//               >
//                 <Github className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 aria-label="LinkedIn Profile"
//               >
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 aria-label="Twitter Profile"
//               >
//                 <Twitter className="h-6 w-6" />
//               </a>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative mx-auto md:ml-auto"
//           >
//             <div className="relative w-full aspect-square max-w-md">
//               {/* Background glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl opacity-70" />

//               {/* Decorative elements */}
//               <motion.div
//                 className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 z-0"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   opacity: [0.7, 1, 0.7],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//               />
//               <motion.div
//                 className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 z-0"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 0.8, 0.5],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//               />

//               {/* Profile image */}
//               <div className="relative bg-muted rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
//                 <Image
//                   src="/placeholder.svg?height=600&width=600"
//                   alt="Muhammad Usman - Frontend Developer"
//                   width={600}
//                   height={600}
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.8, duration: 0.8 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
//         >
//           <a
//             href="#skills"
//             className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
//             onClick={(e) => {
//               e.preventDefault()
//               document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
//             }}
//           >
//             <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform">
//               Explore My Skills
//             </span>
//             <ArrowDown className="h-5 w-5 animate-bounce" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import { ArrowDown, Github, Linkedin, Twitter, Code, Sparkles, Layers, ExternalLink, FileDown, Mail } from 'lucide-react'

// export default function Hero() {
//   const [text, setText] = useState("")
//   const [index, setIndex] = useState(0)
//   const phrases = [
//     "Frontend Architect", 
//     "React Innovator", 
//     "UI/UX Strategist",
//     "Performance Expert"
//   ]
//   const [isDeleting, setIsDeleting] = useState(false)

//   useEffect(() => {
//     const currentPhrase = phrases[index]

//     if (!isDeleting) {
//       // Typing logic
//       if (text.length < currentPhrase.length) {
//         const typingTimeout = setTimeout(() => {
//           setText(currentPhrase.substring(0, text.length + 1))
//         }, 100)
//         return () => clearTimeout(typingTimeout)
//       } else {
//         // Pause before deleting
//         const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000)
//         return () => clearTimeout(pauseTimeout)
//       }
//     } else {
//       // Deleting logic
//       if (text.length > 0) {
//         const deletingTimeout = setTimeout(() => {
//           setText(text.substring(0, text.length - 1))
//         }, 50)
//         return () => clearTimeout(deletingTimeout)
//       } else {
//         // Move to the next phrase
//         setIsDeleting(false)
//         setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
//       }
//     }
//   }, [text, isDeleting, index, phrases])

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 md:px-10 overflow-hidden mt-5">
//       <div className="container mx-auto max-w-7xl">
//         {/* Decorative background elements */}
//         <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
//         <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col space-y-8">
//             <motion.div variants={item} className="flex items-center space-x-2">
//               <Sparkles className="h-5 w-5 text-primary" />
//               <span className="text-primary font-semibold tracking-wide">Transforming Ideas into Reality</span>
//             </motion.div>

//             <motion.h1 
//               variants={item} 
//               className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
//             >
//               Muhammad Usman
//             </motion.h1>

//             <motion.div variants={item} className="h-10">
//               <div className="text-xl md:text-2xl font-medium text-muted-foreground flex items-center">
//                 <Code className="h-5 w-5 mr-2 text-primary" />
//                 <span className="mr-2">I craft</span>
//                 <span className="text-primary font-semibold min-w-[16rem] inline-block">
//                   {text}
//                   <span className="animate-blink ml-1">|</span>
//                 </span>
//               </div>
//             </motion.div>

//             <motion.p 
//               variants={item} 
//               className="text-muted-foreground text-lg leading-relaxed max-w-md"
//             >
//               Elevating digital experiences through elegant code and intuitive design. 
//               I blend technical expertise with creative vision to build 
//               high-performance web solutions that captivate and convert.
//             </motion.p>

//             <motion.div variants={item} className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 pt-2">
//               <Button size="lg" className="font-medium px-6 group">
//                 <span>Explore Portfolio</span>
//                 <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button size="lg" variant="outline" className="font-medium px-6 group">
//                 <span>Download CV</span>
//                 <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
//               </Button>
//             </motion.div>

//             <motion.div variants={item}>
//               <p className="text-sm text-muted-foreground mb-3 font-medium flex items-center">
//                 <Layers className="h-4 w-4 mr-2" />
//                 Connect with me
//               </p>
//               <div className="flex space-x-6">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
//                   aria-label="GitHub Profile"
//                 >
//                   <Github className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
//                   aria-label="LinkedIn Profile"
//                 >
//                   <Linkedin className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
//                   aria-label="Twitter Profile"
//                 >
//                   <Twitter className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="mailto:contact@example.com"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
//                   aria-label="Email Contact"
//                 >
//                   <Mail className="h-6 w-6" />
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative mx-auto md:ml-auto"
//           >
//             <div className="relative w-full aspect-square max-w-md">
//               {/* Background glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl opacity-70" />
              
//               {/* Decorative elements */}
//               <motion.div 
//                 className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 z-0"
//                 animate={{ 
//                   scale: [1, 1.1, 1],
//                   opacity: [0.7, 1, 0.7]
//                 }}
//                 transition={{ 
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
//               <motion.div 
//                 className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 z-0"
//                 animate={{ 
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 0.8, 0.5]
//                 }}
//                 transition={{ 
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5
//                 }}
//               />
              
//               {/* Floating tech icons */}
//               <motion.div 
//                 className="absolute top-10 -left-8 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-20"
//                 animate={{ 
//                   y: [0, -10, 0],
//                   rotate: [0, 5, 0]
//                 }}
//                 transition={{ 
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <span className="text-2xl">⚛️</span>
//               </motion.div>
              
//               <motion.div 
//                 className="absolute bottom-10 -right-8 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-20"
//                 animate={{ 
//                   y: [0, 10, 0],
//                   rotate: [0, -5, 0]
//                 }}
//                 transition={{ 
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1
//                 }}
//               >
//                 <span className="text-2xl">🚀</span>
//               </motion.div>
              
//               {/* Profile image */}
//               <div className="relative bg-muted rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
//                 <Image
//                   src="/placeholder.svg?height=600&width=600"
//                   alt="Muhammad Usman - Frontend Developer"
//                   width={600}
//                   height={600}
//                   className="object-cover"
//                   priority
//                 />
//               </div>
              
//               {/* Badge */}
//               <motion.div 
//                 className="absolute -bottom-2 right-10 bg-background py-1 px-3 rounded-full shadow-lg z-20 flex items-center space-x-1"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//               >
//                 <span className="text-xs font-semibold">1+ Years Experience</span>
//                 <span className="text-sm">✨</span>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.8, duration: 0.8 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
//         >
//           <a
//             href="#skills"
//             className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
//             onClick={(e) => {
//               e.preventDefault()
//               document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
//             }}
//           >
//             <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform">Discover My Expertise</span>
//             <ArrowDown className="h-5 w-5 animate-bounce" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Code,
  Sparkles,
  ExternalLink,
  FileDown,
  Mail,
  Briefcase,
  ChevronRight,
} from "lucide-react"
import MYIMAGE from '@/assets/usman.png'
export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const phrases = ["Frontend Architect", "React Innovator", "UI/UX Strategist", "Full Stack Developer"]
  const [isDeleting, setIsDeleting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const currentPhrase = phrases[index]

    if (!isDeleting) {
      // Typing logic
      if (text.length < currentPhrase.length) {
        const typingTimeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1))
        }, 100)
        return () => clearTimeout(typingTimeout)
      } else {
        // Pause before deleting
        const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000)
        return () => clearTimeout(pauseTimeout)
      }
    } else {
      // Deleting logic
      if (text.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1))
        }, 50)
        return () => clearTimeout(deletingTimeout)
      } else {
        // Move to the next phrase
        setIsDeleting(false)
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      }
    }
  }, [text, isDeleting, index, phrases])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 md:px-10 overflow-hidden relative">
      <div ref={ref} className="container mx-auto max-w-7xl">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-noise opacity-20 -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col space-y-8"
            style={{ y, opacity }}
          >
            <motion.div variants={item} className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold tracking-wide">Transforming Ideas into Reality</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-playfair text-gradient"
            >
              Muhammad Usman
            </motion.h1>

            <motion.div variants={item} className="h-10">
              <div className="text-xl md:text-2xl font-medium text-muted-foreground flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                <span className="mr-2">I craft</span>
                <span className="text-primary font-semibold min-w-[16rem] inline-block">
                  {text}
                  <span className="animate-blink ml-1">|</span>
                </span>
              </div>
            </motion.div>

            <motion.p variants={item} className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Elevating digital experiences through elegant code and intuitive design. I blend technical expertise with
              creative vision to build high-performance web solutions that captivate and convert.
            </motion.p>

            <motion.div variants={item} className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 pt-2">
              <Button
                size="lg"
                className="font-medium px-6 group bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow"
              >
                <span>Explore Portfolio</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium px-6 group">
                <span>Download CV</span>
                <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <div className="flex items-center space-x-2 mb-3">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">1.5+ Years at Q-Solution</span>
                <ChevronRight className="h-4 w-4 text-primary" />
                <a
                  href="#experience"
                  className="text-sm text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  View Experience
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:contact@example.com" className="social-icon" aria-label="Email Contact">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto md:ml-auto"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl opacity-70" />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Floating tech icons */}
              <motion.div
                className="absolute top-10 -left-8 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -right-8 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              {/* Profile image */}
              <div className="relative bg-muted rounded-full overflow-hidden border-4 border-background shadow-2xl z-10 shine">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                <Image
                  src={MYIMAGE}
                  alt="Muhammad Usman - Frontend Developer"
                  width={350}
                  height={350}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-2 right-10 bg-background/90 backdrop-blur-sm py-1.5 px-4 rounded-full shadow-lg z-20 flex items-center space-x-1 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <span className="text-xs font-semibold">1.5+ Years Experience</span>
                <span className="text-sm">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a
            href="#experience"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform">
              Discover My Journey
            </span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

