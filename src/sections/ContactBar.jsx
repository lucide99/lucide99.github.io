import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'

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
        <a href="minjikang116@gmail.com"
          className="px-4 py-2 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-sm text-gray-900 dark:text-white transition-colors">
          {t('contact.email')}
        </a>
        <a href="https://github.com/lucide99" target="_blank" rel="noreferrer"
          className="px-4 py-2 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-sm text-gray-900 dark:text-white transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/minjikang116/" className="px-4 py-2 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-sm text-gray-900 dark:text-white transition-colors">
          LinkedIn
        </a>
        {/* <a href="#" className="px-4 py-2 rounded bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-sm text-gray-900 dark:text-white transition-colors">
          X
        </a> */}
      </div>
    </section>
  )
}


