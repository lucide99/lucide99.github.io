import React from 'react'
import { useI18n } from '../i18n/i18n.jsx'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container mx-auto py-8 text-sm text-white/60 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {t('hero.name')} · {t('hero.title')}</span>
        <span>{t('footer.rights')}</span>
      </div>
    </footer>
  )
}


