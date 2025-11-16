import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.js'

export default function ContactBar() {
  const { t } = useI18n()
  return (
    <section id="contact" className="container mx-auto py-20">
      <motion.h2
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t('contact.title')}
      </motion.h2>
      <div className="mt-4 flex items-center gap-4">
        <a href="mailto:your@email"
           className="px-4 py-2 rounded bg-white/10 border border-white/10 hover:bg-white/15 text-sm">
          {t('contact.email')}
        </a>
        <a href="https://github.com/lucide99" target="_blank" rel="noreferrer"
           className="px-4 py-2 rounded bg-white/10 border border-white/10 hover:bg-white/15 text-sm">
          GitHub
        </a>
        <a href="#" className="px-4 py-2 rounded bg-white/10 border border-white/10 hover:bg-white/15 text-sm">
          LinkedIn
        </a>
        <a href="#" className="px-4 py-2 rounded bg-white/10 border border-white/10 hover:bg-white/15 text-sm">
          X
        </a>
      </div>
    </section>
  )
}


