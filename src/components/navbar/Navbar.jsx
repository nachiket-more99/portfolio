import { Github, Linkedin } from 'lucide-react'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
]

export default function Navbar({ name }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

        <a href="#" className="text-[15px] font-semibold text-slate-900 tracking-tight hover:text-blue-600 transition-colors">
          {name}.
        </a>

        <nav className="flex items-center gap-1">

          <div className="hidden sm:flex items-center mr-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/nachiket-more99/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/nachiketmore99/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-700 transition-colors"
          >
            contact
          </a>

        </nav>
      </div>
    </header>
  )
}