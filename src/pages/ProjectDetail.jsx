// import React, { useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import projects from '../data/projects.js'

// export default function ProjectDetail() {
//   const { slug } = useParams()
//   const project = projects.find((p) => p.slug === slug)

//   useEffect(() => {
//     if (project) {
//       document.title = `${project.title} · AI Engineer Portfolio`
//     }
//     return () => {
//       document.title = 'AI Engineer Portfolio'
//     }
//   }, [project])

//   if (!project) {
//     return (
//       <section className="container mx-auto py-20">
//         <h1 className="text-2xl font-semibold mb-4">Not Found</h1>
//         <Link className="text-primary hover:underline" to="/projects">Back to Projects</Link>
//       </section>
//     )
//   }

//   return (
//     <article className="container mx-auto py-20">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold">{project.title}</h1>
//         <p className="mt-2 text-white/70">{project.summary}</p>
//         <div className="mt-3 flex flex-wrap items-center gap-3">
//           {project.period && <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{project.period}</span>}
//           {project.role?.map((r) => (
//             <span key={r} className="text-[10px] px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">{r}</span>
//           ))}
//         </div>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {project.stack.map((s) => (
//             <span key={s} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">
//               {s}
//             </span>
//           ))}
//         </div>
//       </header>

//       <section className="space-y-10">
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Problem</h2>
//           <p className="text-white/70">{project.problem || '—'}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Approach / Architecture</h2>
//           <p className="text-white/70">{project.approach || '—'}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Key Features</h2>
//           {project.features?.length ? (
//             <ul className="list-disc pl-5 text-white/70">
//               {project.features.map((f) => (
//                 <li key={f}>{f}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-white/70">—</p>
//           )}
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Results</h2>
//           <p className="text-white/70">{project.results || '—'}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Links</h2>
//           <div className="flex gap-4">
//             {project.links.github && (
//               <a className="text-primary hover:underline" href={project.links.github} target="_blank" rel="noreferrer">
//                 GitHub
//               </a>
//             )}
//             {project.links.demo && (
//               <a className="text-primary hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">
//                 Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </section>
//     </article>
//   )
// }
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.js'
import { useI18n } from '../i18n/i18n.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const { t, lang } = useI18n()
  const localized = (lang === 'en' && project?.en) ? { ...project, ...project.en } : project

  useEffect(() => {
    if (localized) {
      document.title = `${localized.title} · AI Engineer Portfolio`
    }
    return () => {
      document.title = 'AI Engineer Portfolio'
    }
  }, [localized])

  if (!localized) {
    return (
      <section className="container mx-auto py-20">
        <h1 className="text-2xl font-semibold mb-4">Not Found</h1>
        <Link className="text-primary hover:underline" to="/projects">{t('detail.back')}</Link>
      </section>
    )
  }

  return (
    <article className="container mx-auto py-20 space-y-16">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{localized.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-white/70">{localized.summary}</p>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          {localized.period && (
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
              {localized.period}
            </span>
          )}

          {localized.role?.map((r) => (
            <span
              key={r}
              className="text-[10px] px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary"
            >
              {r}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {localized.stack?.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
              {s}
            </span>
          ))}
        </div>
      </header>

      {/* PROBLEM */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t('detail.problem')}</h2>
        <p className="text-gray-600 dark:text-white/70">{localized.problem || '—'}</p>
      </section>

      {/* APPROACH */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t('detail.approach')}</h2>
        <p className="text-gray-600 dark:text-white/70 whitespace-pre-line">
          {localized.approach || '—'}
        </p>
      </section>

      {/* CONTRIBUTIONS & RESULTS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t('detail.results')}</h2>

        {localized.resultsList?.length ? (
          <ul className="list-disc pl-5 text-gray-600 dark:text-white/70 space-y-1">
            {localized.resultsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-white/70">
            {localized.results ? localized.results : '—'}
          </p>
        )}
      </section>

      {/* IMAGES */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t('detail.gallery')}</h2>
        {localized.images?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localized.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${localized.title} screenshot ${idx + 1}`}
                className="rounded-lg border border-gray-200 dark:border-white/10 shadow-sm"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-white/50">이미지가 아직 없습니다.</p>
        )}
      </section>

      {/* LINKS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t('detail.links')}</h2>
        <div className="flex gap-4">
          {localized.links?.github && (
            <a
              className="text-primary hover:underline"
              href={localized.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          {localized.links?.demo && (
            <a
              className="text-primary hover:underline"
              href={localized.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </section>
    </article>
  )
}

