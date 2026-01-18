import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react'
import { useFadeIn } from '@/hooks/useFadeIn'

export default function Hero({ data }) {
  const ref = useFadeIn()

  return (
    <section
      ref={ref}
      className="fade-up min-h-[calc(100vh-56px)] flex items-center py-16"
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left — text */}
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Full-Stack Software Engineer
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-4">
            Hi, I'm Nachiket.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-snug mb-2">
            I build scalable web apps
          </p>
          <p className="text-lg md:text-xl text-slate-500 leading-snug mb-8">
            and AI-powered APIs.
          </p>

          <p className="text-sm text-slate-400 mb-8">
            React · FastAPI · Node.js · AWS · LangChain
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {data.resume_link && (
              <a
                href={data.resume_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-700 transition-colors"
              >
                <FileText size={15} />
                View Resume
              </a>
            )}

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-900 border border-slate-300 rounded-full hover:bg-slate-50 transition-colors"
            >
              <ArrowDown size={15} />
              Projects
            </a>

            {/* Social icon buttons */}
            <a
              href={data.github_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 text-slate-500 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <Github size={17} />
            </a>

            <a
              href={data.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 text-slate-500 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-sm overflow-hidden border border-slate-200">
            <img
              src={data.self_photo}
              alt="Nachiket More – Full-Stack Software Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}