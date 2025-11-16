import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import ko from './ko.json'
import en from './en.json'

const resources = { ko, en }

const LangContext = createContext({
  lang: 'ko',
  setLang: () => {},
  t: (key) => key,
})

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('ko')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    const initial = saved || 'ko'
    setLangState(initial)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = initial
    }
  }, [])

  function setLang(next) {
    setLangState(next)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', next)
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next
    }
  }

  const t = useMemo(() => {
    return (key) => {
      const dict = resources[lang] || {}
      return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), dict) || key
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useI18n() {
  return useContext(LangContext)
}


