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
    demo: "https://ehs.hazwoper-osha.com",
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
    demo: "https://calendar.q-sols.com/login",
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
    demo: "https://buildnest.net",
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
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                    >
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a> */}
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

