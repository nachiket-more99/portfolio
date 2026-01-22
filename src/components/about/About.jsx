import { Separator } from '@/components/ui/separator'
import { useFadeIn } from '@/hooks/useFadeIn'
import { Badge } from '@/components/ui/badge'

export default function About({ education, experience }) {
  const ref = useFadeIn()

  return (
    <section id="about" ref={ref} className="fade-up py-20">

      <p className="text-xs font-semibold tracking-[0.15em] text-blue-600 uppercase mb-2">
        About Me
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 mb-10">
        Education &amp; Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* Education card */}
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="h-1 bg-blue-600 w-full" />
          <div className="p-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] text-blue-600 uppercase mb-4">
              Education
            </p>
            {education.map((item, index) => (
              <div key={index}>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.degree}
                  </p>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {item.college}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.start_date} – {item.end_date}
                  </p>
                </div>
                {index < education.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience card */}
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="h-1 bg-slate-900 w-full" />
          <div className="p-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] text-slate-900 uppercase mb-4">
              Experience
            </p>
            {experience.map((item, index) => (
              <div key={index}>
                <div className="mb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.position}
                      </p>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {item.company} · {item.location}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.start_date} – {item.end_date}
                      </p>
                    </div>
                  </div>
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((tag, i) => (
                        <Badge key={i} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {index < experience.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}