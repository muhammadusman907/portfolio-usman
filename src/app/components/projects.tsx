// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { Badge } from "@/components/ui/badge"
// import { Github, ExternalLink, X } from "lucide-react"
// import EHS from '@/assets/ehs.png'
// import BUILD from '@/assets/build.png'
// import CALENDAR from '@/assets/calendar.png'

// const projects = [
//   // {
//   //   id: 1,
//   //   title: "E-Commerce Platform",
//   //   description: "A full-featured e-commerce platform with product listings, cart, checkout, and admin dashboard.",
//   //   image: EHS,
//   //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
//   //   github: "https://github.com",
//   //   demo: "https://example.com",
//   //   details:
//   //     "This e-commerce platform features a responsive design, user authentication, product search and filtering, shopping cart functionality, secure checkout with Stripe, order history, and an admin dashboard for managing products and orders. Built with Next.js for server-side rendering and optimized performance.",
//   // },
//   {
//     id: 1,
//     title: "EHS Admin Dashboard",
//     description: "A safety compliance system with employee management and course tracking.",
//     image: EHS,
//     tags: ["React", "NestJS", "MySQL",""],
//     github: "https://github.com",
//     demo: "https://example.com",
//     details: "This web-based system helps organizations manage safety training, generate reports, assign courses, and monitor compliance. Features include order reports, employee tracking, and seamless user management.",
//   },
//   // {
//   //   id: 2,
//   //   title: "Task Management App",
//   //   description: "A Kanban-style task management application with drag-and-drop functionality.",
//   //   image: CALENDAR,
//   //   tags: ["React", "Redux", "Framer Motion", "Firebase", "Styled Components"],
//   //   github: "https://github.com",
//   //   demo: "https://example.com",
//   //   details:
//   //     "This task management app allows users to create boards, lists, and cards with a drag-and-drop interface. Features include user authentication, real-time updates, task assignments, due dates, labels, and activity tracking. The app uses Firebase for backend services and Framer Motion for smooth animations.",
//   // },
//   {
//     id: 2,
//     title: "Q-Calendar – Task & Project Management",
//     description: "A system for task assignment, project tracking, daily standups, and attendance management.",
//     image: CALENDAR,
//     tags: ["React", "NestJS", "MySQL", "Tailwind CSS"],
//     github: "https://github.com",
//     demo: "https://example.com",
//     details: "Q-Calendar is a project and task management platform designed to streamline team collaboration. It enables employees to log daily tasks, manage projects, participate in daily standups, and track attendance. The system also provides user reports for performance insights.",
//   },  
//   {
//     id: 3,
//     title: "BuildNest – Construction Management Web App",
//     description: "A platform for general contractors to manage subcontractors, projects, and tasks efficiently.",
//     image: BUILD,
//     tags: ["React", "NestJS", "MySQL", "Supabase", "ShadCN", "React DnD", "Tailwind CSS"],
//     github: "https://github.com",
//     demo: "https://example.com",
//     details: "BuildNest is a construction management web app designed to streamline project workflows. General contractors can create subcontractors, loan officers, and projects while defining pricing and property details. Homeowners and subcontractors can be invited, and tasks can be assigned and managed with a Kanban view for real-time project tracking.",
//   }
  
//   // {
//   //   id: 3,
//   //   title: "Finance Dashboard",
//   //   description: "An interactive dashboard for tracking personal finances and investments.",
//   //   image: BUILD,
//   //   tags: ["Next.js", "D3.js", "Tailwind CSS", "Supabase", "TypeScript"],
//   //   github: "https://github.com",
//   //   demo: "https://example.com",
//   //   details:
//   //     "This finance dashboard provides users with a comprehensive view of their financial data, including income, expenses, investments, and savings goals. Features include interactive charts and graphs, transaction categorization, budget planning, and financial insights. The dashboard is built with Next.js and uses D3.js for data visualization.",
//   // },
//   // {
//   //   id: 4,
//   //   title: "Social Media Platform",
//   //   description: "A social networking platform with real-time messaging and content sharing.",
//   //   image: "/placeholder.svg?height=600&width=800",
//   //   tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
//   //   github: "https://github.com",
//   //   demo: "https://example.com",
//   //   details:
//   //     "This social media platform allows users to create profiles, connect with friends, share posts, and engage in real-time messaging. Features include news feed, notifications, user search, media uploads, and privacy settings. The platform is built with the MERN stack and uses Socket.io for real-time communication.",
//   // },
//   // {
//   //   id: 5,
//   //   title: "Weather Application",
//   //   description: "A weather forecast application with location-based services and interactive maps.",
//   //   image: "/placeholder.svg?height=600&width=800",
//   //   tags: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS", "PWA"],
//   //   github: "https://github.com",
//   //   demo: "https://example.com",
//   //   details:
//   //     "This weather application provides users with current weather conditions and forecasts for any location. Features include location search, interactive maps, hourly and daily forecasts, weather alerts, and offline access as a Progressive Web App. The app uses the OpenWeather API for weather data and Mapbox for map visualization.",
//   // },
//   // {
//   //   id: 6,
//   //   title: "Recipe Sharing Platform",
//   //   description: "A community-driven recipe sharing platform with search and filtering capabilities.",
//   //   image: "/placeholder.svg?height=600&width=800",
//   //   tags: ["Next.js", "GraphQL", "Apollo", "MongoDB", "Cloudinary"],
//   //   github: "https://github.com",
//   //   demo: "https://example.com",
//   //   details:
//   //     "This recipe sharing platform allows users to discover, create, and share recipes with the community. Features include recipe search and filtering, user profiles, ratings and reviews, ingredient lists, step-by-step instructions, and image uploads. The platform is built with Next.js and uses GraphQL for efficient data fetching.",
//   // },
// ]

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   }

//   return (
//     <section id="projects" className="py-20">
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">My Projects</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Here are some of my recent projects. Each project is built with modern technologies and best practices in
//             mind.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {projects.map((project) => (
//             <motion.div key={project.id} variants={item} transition={{ duration: 0.5 }}>
//               <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
//                 <div className="overflow-hidden relative aspect-video">
//                   <Image
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     width={800}
//                     height={600}
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                   <CardDescription>{project.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, index) => (
//                       <Badge key={index} variant="secondary">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                   <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
//                     View Details
//                   </Button>
//                   <div className="flex space-x-2">
//                     <a href={project.github} target="_blank" rel="noopener noreferrer">
//                       <Button variant="ghost" size="icon">
//                         <Github className="h-5 w-5" />
//                       </Button>
//                     </a>
//                     <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                       <Button variant="ghost" size="icon">
//                         <ExternalLink className="h-5 w-5" />
//                       </Button>
//                     </a>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         <AnimatePresence>
//           {selectedProject && (
//             <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
//               <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
//                 <div className="relative aspect-video">
//                   <Image
//                     src={selectedProject.image || "/placeholder.svg"}
//                     alt={selectedProject.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full"
//                     onClick={() => setSelectedProject(null)}
//                   >
//                     <X className="h-5 w-5" />
//                   </Button>
//                 </div>
//                 <DialogHeader className="p-6">
//                   <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
//                   <DialogDescription className="text-base mt-2">{selectedProject.details}</DialogDescription>
//                 </DialogHeader>
//                 <div className="p-6 pt-0">
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {selectedProject.tags.map((tag, index) => (
//                       <Badge key={index} variant="secondary">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
//                       <Button>
//                         <Github className="h-5 w-5 mr-2" />
//                         View Code
//                       </Button>
//                     </a>
//                     <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
//                       <Button variant="outline">
//                         <ExternalLink className="h-5 w-5 mr-2" />
//                         Live Demo
//                       </Button>
//                     </a>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, X, FolderKanban, ArrowUpRight, Sparkles } from "lucide-react"
import EHS from "@/assets/ehs.png"
import BUILD from "@/assets/build.png"
import CALENDAR from "@/assets/calendar.png"

const projects = [
  {
    id: 1,
    title: "EHS Admin Dashboard",
    description:
      "Comprehensive safety compliance system with intuitive employee management and course tracking capabilities.",
    image: EHS,
    tags: ["React", "NestJS", "MySQL", "RESTful API"],
    github: "https://github.com",
    demo: "https://example.com",
    details:
      "This enterprise-grade safety compliance platform empowers organizations to streamline safety training workflows, generate comprehensive analytics reports, assign specialized courses, and monitor regulatory compliance. The system features customizable reporting tools, real-time employee tracking, and seamless user management with role-based access control.",
  },
  {
    id: 2,
    title: "Q-Calendar – Task & Project Management",
    description:
      "Sophisticated project management solution for task assignment, progress tracking, daily standups, and attendance monitoring.",
    image: CALENDAR,
    tags: ["React", "NestJS", "MySQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    details:
      "Q-Calendar is an enterprise project and task management platform engineered to optimize team collaboration and productivity. The system enables employees to document daily tasks, manage complex projects, participate in structured daily standups, and maintain accurate attendance records. Advanced reporting capabilities provide actionable performance insights for both individual contributors and management teams.",
  },
  {
    id: 3,
    title: "BuildNest – Construction Management Platform",
    description:
      "Comprehensive solution for general contractors to orchestrate subcontractors, projects, and tasks with maximum efficiency.",
    image: BUILD,
    tags: ["React", "NestJS", "MySQL", "Supabase", "ShadCN", "React DnD", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    details:
      "BuildNest is a sophisticated construction management platform designed to transform project workflows in the construction industry. General contractors can seamlessly onboard subcontractors and loan officers, create detailed project specifications with comprehensive pricing models and property details. The system facilitates secure invitation workflows for homeowners and subcontractors, while the intuitive task assignment system with Kanban visualization provides real-time project tracking and milestone management.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-10 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <FolderKanban className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dancing">Portfolio Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Explore a collection of my most significant projects, each demonstrating technical expertise,
            problem-solving capabilities, and commitment to creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex flex-col bg-card/50 backdrop-blur-sm group">
                <div className="overflow-hidden relative aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-primary/90 hover:bg-primary text-white border-none">Featured</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold tracking-tight flex items-center">
                    {project.title}
                    <Sparkles className="h-4 w-4 ml-2 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-base mt-2 line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="font-medium text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2 border-t border-border/30">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-primary hover:text-primary hover:bg-primary/10 font-medium"
                  >
                    <span>Project Details</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                  <div className="flex space-x-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                    >
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none bg-background/95 backdrop-blur-md shadow-2xl">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full z-20 hover:bg-background/90"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span>Project Overview</span>
                    <div className="h-px flex-grow bg-border ml-4" />
                  </h4>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">{selectedProject.details}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full group">
                        <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                        <span>View Source Code</span>
                      </Button>
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full group">
                        <ExternalLink className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                        <span>Explore Live Demo</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

