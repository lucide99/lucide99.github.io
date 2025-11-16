import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n.jsx'
import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function ProjectsGrid() {
  const { t } = useI18n()
  return (
    <section id="projects" className="container mx-auto py-20">
      <div className="flex items-center justify-between">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>
        <Link to="/projects" className="text-sm text-primary hover:underline">
          {t('projects.viewAll')}
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 5).map((p) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}


