import { ExternalLink, Github } from 'lucide-react'
import { useFadeIn } from '@/hooks/useFadeIn'

const accentColors = [
  'bg-violet-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-blue-500',
  'bg-teal-500',
]

function ProjectCard({ item, index }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

      {/* Colored accent stripe */}
      <div className={`h-1 w-full ${accentColors[index % accentColors.length]}`} />

      <div className="p-6">

        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-sm font-semibold text-slate-900 leading-snug">
            {item.project_title}
          </h3>
          {item.deployed_link && (
            <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              ● Live
            </span>
          )}
        </div>

        {/* Date */}
        <p className="text-xs text-slate-400 mb-3">
          {item.date}
        </p>

        {/* Summary */}
        <p className="text-sm text-slate-500 italic mb-4">
          {item.summary}
        </p>

        {/* Bullet points */}
        <ul className="space-y-1.5 mb-5">
          {item.info.map((point, i) => (
            <li key={i} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-300 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          {item.deployed_link && (
            <a
              href={item.deployed_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {item.repo_link && (
            <a
              href={item.repo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  const ref = useFadeIn()

  return (
    <section id="projects" ref={ref} className="fade-up py-20">

      <p className="text-xs font-semibold tracking-[0.15em] text-blue-600 uppercase mb-2">
        Projects
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 mb-10">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} index={index} />
        ))}
      </div>

    </section>
  )
}