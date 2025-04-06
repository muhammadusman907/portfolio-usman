"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Database, Globe, Layers, Cpu, Sparkles } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="h-10 w-10 text-primary" />,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="h-10 w-10 text-primary" />,
    items: [
      { name: "Figma", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "UI Prototyping", level: 85 },
    ],
  },
  {
    category: "Backend Systems",
    icon: <Database className="h-10 w-10 text-primary" />,
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Web Ecosystem",
    icon: <Globe className="h-10 w-10 text-primary" />,
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Testing", level: 75 },
      { name: "Performance Optimization", level: 85 },
      { name: "SEO", level: 80 },
      { name: "Deployment", level: 85 },
    ],
  },
  {
    category: "Architecture",
    icon: <Layers className="h-10 w-10 text-primary" />,
    items: [
      { name: "Component Design", level: 90 },
      { name: "State Management", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Performance", level: 85 },
      { name: "Accessibility", level: 80 },
    ],
  },
  {
    category: "Development Tools",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    items: [
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 80 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "NPM/Yarn", level: 90 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: "easeInOut",
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
    <section id="skills" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Professional Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dancing">Technical Proficiency</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            With a passion for creating exceptional digital experiences, I&apos;ve cultivated expertise across the full
            spectrum of web development technologies and methodologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center mb-8">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">{skill.icon}</div>
                    <h3 className="text-2xl font-bold text-center">{skill.category}</h3>
                  </div>

                  <div className="space-y-6">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-lg font-medium">{item.name}</span>
                          <span className="text-sm font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {item.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden p-0.5">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-primary/80 to-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{
                              duration: 1.2,
                              delay: 0.2 + itemIndex * 0.1,
                              ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



