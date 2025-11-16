import React from 'react'
import { useI18n } from '../i18n/i18n.jsx'

export default function LangToggle() {
  const { lang, setLang } = useI18n()
  const next = lang === 'ko' ? 'en' : 'ko'
  return (
    <button
      onClick={() => setLang(next)}
      className="px-2 py-1 rounded border border-white/10 hover:border-primary text-xs"
      aria-label="Toggle language"
    >
      {lang.toUpperCase()}
    </button>
  )
}


