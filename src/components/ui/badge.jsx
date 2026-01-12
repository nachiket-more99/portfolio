import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-700',
        blue: 'bg-blue-50 text-blue-800 border border-blue-200',
        green: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
        purple: 'bg-violet-50 text-violet-800 border border-violet-200',
        amber: 'bg-amber-50 text-amber-800 border border-amber-200',
        live: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}