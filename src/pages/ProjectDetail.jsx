import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} · AI Engineer Portfolio`
    }
    return () => {
      document.title = 'AI Engineer Portfolio'
    }
  }, [project])

  if (!project) {
    return (
      <section className="container mx-auto py-20">
        <h1 className="text-2xl font-semibold mb-4">Not Found</h1>
        <Link className="text-primary hover:underline" to="/projects">Back to Projects</Link>
      </section>
    )
  }

  return (
    <article className="container mx-auto py-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-white/70">{project.summary}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {project.period && <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{project.period}</span>}
          {project.role?.map((r) => (
            <span key={r} className="text-[10px] px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">{r}</span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">
              {s}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">Problem</h2>
          <p className="text-white/70">{project.problem || '—'}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Approach / Architecture</h2>
          <p className="text-white/70">{project.approach || '—'}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Key Features</h2>
          {project.features?.length ? (
            <ul className="list-disc pl-5 text-white/70">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ) : (
            <p className="text-white/70">—</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          <p className="text-white/70">{project.results || '—'}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <div className="flex gap-4">
            {project.links.github && (
              <a className="text-primary hover:underline" href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a className="text-primary hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}


