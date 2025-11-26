import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'

const skills = {
  backend: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'],
  llm: ['OpenAI API', 'LangChain', 'RAG', 'Vector DB'],
  automation: ['Airflow', 'Celery', 'Selenium', 'Playwright'],
  frontend: ['React', 'TailwindCSS', 'Vite', 'Framer Motion']
}

export default function SkillsGrid() {
  const { t } = useI18n()
  return (
    <section id="skills" className="container mx-auto py-20">
      <motion.h2
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t('skills.title')}
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([k, list]) => (
          <div key={k} className="rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white dark:bg-white/5 shadow-sm">
            <div className="font-semibold mb-3 text-gray-900 dark:text-white">{t(`skills.${k}`)}</div>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


