import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n.jsx'

export default function ProjectCard({ project }) {
  const { lang } = useI18n()
  const localized = lang === 'en' && project.en ? { ...project, ...project.en } : project
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-5 hover:bg-gray-50 dark:hover:bg-white/10 transition shadow-sm hover:shadow-md"
    >
      <div className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{localized.title}</div>
      <div className="mb-2 text-sm text-gray-600 dark:text-white/70">{localized.summary}</div>
      {localized.results && <div className="mb-4 text-xs text-gray-500 dark:text-white/60">{localized.results}</div>}
      <div className="flex flex-wrap gap-2">
        {localized.stack?.slice(0, 4).map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
            {s}
          </span>
        ))}
      </div>
      {localized.role?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {localized.role.map((r) => (
            <span key={r} className="text-[10px] px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
              {r}
            </span>
          ))}
        </div>
      )}
      <div className="absolute inset-0 rounded-xl ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/40 transition"></div>
    </Link>
  )
}


