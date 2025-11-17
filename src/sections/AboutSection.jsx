import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'

export default function AboutSection() {
  const { t } = useI18n()
  const [useEmoji, setUseEmoji] = useState(false)
  const profileSrc = '/0422%20강민지.JPG'
  return (
    <section id="about" className="container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-8">
        <div>
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
        </div>
        <motion.div
          className="md:justify-self-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {useEmoji ? (
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-white/5 border border-white/10 select-none">
              <span className="text-4xl md:text-5xl">🙂</span>
            </div>
          ) : (
            <img
              src={profileSrc}
              alt="Profile"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-white/10 ring-1 ring-white/10"
              onError={() => setUseEmoji(true)}
              loading="lazy"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}


