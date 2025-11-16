import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.js'

export default function AboutSection() {
  const { t } = useI18n()
  return (
    <section id="about" className="container mx-auto py-20">
      <motion.h2
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t('about.title')}
      </motion.h2>
      <motion.p
        className="mt-4 text-white/70 max-w-3xl"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t('about.desc')}
      </motion.p>
    </section>
  )
}


