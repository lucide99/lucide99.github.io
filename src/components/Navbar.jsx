import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LangToggle from './LangToggle.jsx'
import { useI18n } from '../i18n/i18n.js'

export default function Navbar() {
  const { t } = useI18n()
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-semibold tracking-tight">
          {t('hero.name')} · {t('hero.title')}
        </Link>
        <div className="flex items-center gap-6">
          <a href="/#about" className="text-sm hover:text-primary">{t('nav.about')}</a>
          <a href="/#projects" className="text-sm hover:text-primary">{t('nav.projects')}</a>
          <a href="/#skills" className="text-sm hover:text-primary">{t('nav.skills')}</a>
          <a href="/#contact" className="text-sm hover:text-primary">{t('nav.contact')}</a>
          <NavLink to="/projects" className="text-sm hover:text-primary hidden sm:inline">
            {t('nav.projects')}
          </NavLink>
          <LangToggle />
        </div>
      </nav>
    </header>
  )
}


