import Header from "@/app/components/header"
import Hero from "@/app/components/hero"
import Skills from "@/app/components/skills"
import Projects from "@/app/components/projects"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"
import { Inter } from "next/font/google"
import Experience from "@/app/components/experience"

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen flex flex-col`}>
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Skills />
        <Experience/>
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

