import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition"
    >
      <div className="mb-2 text-lg font-semibold">{project.title}</div>
      <div className="mb-4 text-sm text-white/70">{project.summary}</div>
      <div className="flex flex-wrap gap-2">
        {project.stack?.slice(0, 4).map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">
            {s}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 rounded-xl ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/40 transition"></div>
    </Link>
  )
}


