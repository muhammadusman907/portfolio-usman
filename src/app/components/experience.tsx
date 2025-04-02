"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, CheckCircle2, Code2, Database, GitBranch, Globe, Layers, Sparkles } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const achievements = [
    "Developed and maintained multiple full-stack web applications using React, NestJS, and MySQL",
    "Implemented responsive UI designs and interactive features using modern frontend technologies",
    "Created RESTful APIs and optimized database queries for improved performance",
    "Collaborated with cross-functional teams to deliver high-quality software solutions",
    "Participated in code reviews and implemented best practices for code quality",
    "Integrated third-party services and APIs to enhance application functionality",
  ]

  const technologies = [
    "React",
    "TypeScript",
    "NestJS",
    "MySQL",
    "Tailwind CSS",
    "RESTful APIs",
    "Git",
    "Agile",
    "Redux",
    "Node.js",
    "Express",
    "Docker",
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dancing">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            My professional experience has equipped me with a robust skill set in full-stack development, allowing me to
            create comprehensive web solutions from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {/* Company Card */}
          <motion.div variants={item} className="lg:sticky lg:top-24">
            <Card className="border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <Badge className="bg-primary/90 hover:bg-primary text-white border-none px-3 py-1">Current</Badge>
                </div>

                <h3 className="text-2xl font-bold mb-2">Q-Solution</h3>
                <p className="text-muted-foreground mb-4">Full Stack Developer</p>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>January 2023 - Present (1.5 Years)</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-primary/80" />
                    <span>San Francisco, California</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-primary/80" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GitBranch className="h-5 w-5 text-primary/80" />
                    <span>Software Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary/80" />
                    <span>Full Stack Projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Details */}
          <motion.div variants={item} className="lg:col-span-2">
            <Card className="border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden mb-8">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Key Projects</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">EHS Admin Dashboard</h4>
                    <p className="text-muted-foreground">
                      Led the development of a comprehensive safety compliance system with employee management and
                      course tracking capabilities. Implemented complex database relationships and reporting features.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Q-Calendar – Task & Project Management</h4>
                    <p className="text-muted-foreground">
                      Developed a sophisticated project management solution for task assignment, progress tracking,
                      daily standups, and attendance monitoring. Created a real-time notification system and interactive
                      calendar interface.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">BuildNest – Construction Management Platform</h4>
                    <p className="text-muted-foreground">
                      Built a comprehensive solution for general contractors to orchestrate subcontractors, projects,
                      and tasks. Implemented drag-and-drop functionality and complex permission systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden mb-8">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Key Achievements</h3>
                </div>

                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Technologies Used</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

