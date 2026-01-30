import { Mail, Github, Linkedin } from 'lucide-react'
import { useFadeIn } from '@/hooks/useFadeIn'

export default function Contact({ email, github_url, linkedin_url }) {
  const ref = useFadeIn()

  return (
    <footer id="contact" ref={ref} className="fade-up mt-20 bg-[#1a1a2e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">

        {/* Top row */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Open to new opportunities.
          </h2>
          <p className="text-slate-400 text-sm">
            Full-time · Contract · Interesting projects
          </p>
        </div>

        {/* Email CTA button */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-full hover:bg-slate-100 transition-colors mb-10"
        >
          <Mail size={15} />
          {email}
        </a>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github size={15} />
              github.com/nachiket-more99
            </a>
            <a
              href={linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={15} />
              linkedin.com/in/nachiketmore99
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © 2026 Nachiket More · Built with React + Vite
          </p>

        </div>
      </div>
    </footer>
  )
}