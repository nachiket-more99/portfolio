import { useFadeIn } from '@/hooks/useFadeIn'

const categoryColors = {
  Languages: 'bg-slate-100 text-slate-700',
  Frontend: 'bg-blue-50 text-blue-800 border border-blue-200',
  Backend: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  Databases: 'bg-amber-50 text-amber-800 border border-amber-200',
  'AI / ML': 'bg-violet-50 text-violet-800 border border-violet-200',
  'Cloud & DevOps': 'bg-slate-100 text-slate-700',
}

export default function Skills({ skills }) {
  const ref = useFadeIn()

  return (
    <section id="skills" ref={ref} className="fade-up py-20">

      <p className="text-xs font-semibold tracking-[0.15em] text-blue-600 uppercase mb-2">
        Skills
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 mb-10">
        Technologies &amp; Tools
      </h2>

      <div className="flex flex-col gap-5">
        {skills.map((group, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-3">

            {/* Category label */}
            <div className="w-32 flex-shrink-0 pt-0.5">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                {group.category}
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryColors[group.category] || 'bg-slate-100 text-slate-700'}`}
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}