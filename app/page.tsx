import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Metrics from "@/components/sections/metrics"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Workflow from "@/components/sections/workflow"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Metrics />
      <Projects />
      <Skills />
      <Workflow />
      <Contact />
    </>
  )
}
