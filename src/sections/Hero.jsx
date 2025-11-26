import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground.jsx'
import { useI18n } from '../i18n/i18n.jsx'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto min-h-[70vh] flex flex-col items-start justify-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.name')} <span className="text-primary">— {t('hero.title')}</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 dark:text-white/70 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('hero.intro')}
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-white hover:opacity-90"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


