import data from '@/data/resume.json'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar name={data.name} />

      <main className="max-w-5xl mx-auto px-6 md:px-10">
        <Hero data={data} />

        <div className="border-t border-slate-100" />
        <About
          education={data.education}
          experience={data.experience}
          publications={data.publications}
        />

        <div className="border-t border-slate-100" />
        <Skills skills={data.skills} />

        <div className="border-t border-slate-100" />
        <Projects projects={data.projects} />
      </main>

      <Contact
        email={data.email}
        github_url={data.github_url}
        linkedin_url={data.linkedin_url}
      />

    </div>
  )
}