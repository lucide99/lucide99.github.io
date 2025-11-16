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
          <p className="text-white/70">Placeholder — 문제정의</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Approach / Architecture</h2>
          <p className="text-white/70">Placeholder — 접근/아키텍처</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc pl-5 text-white/70">
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          <p className="text-white/70">Placeholder — 결과/성과</p>
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


