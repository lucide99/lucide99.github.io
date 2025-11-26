import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LangToggle from './LangToggle.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { useI18n } from '../i18n/i18n.jsx'

export default function Navbar() {
  const { t } = useI18n()
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 dark:bg-black/40 border-b border-gray-200 dark:border-white/10 transition-colors">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-semibold tracking-tight text-gray-900 dark:text-white">
          {t('hero.name')} · {t('hero.title')}
        </Link>
        <div className="flex items-center gap-6">
          <a href="/#about" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.about')}</a>
          <a href="/#projects" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.projects')}</a>
          <a href="/#skills" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.skills')}</a>
          <a href="/#contact" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.contact')}</a>
          {/* <NavLink to="/projects" className="text-sm hover:text-primary hidden sm:inline">
            {t('nav.projects')}
          </NavLink> */}
          <ThemeToggle />
          <LangToggle />
        </div>
      </nav>
    </header>
  )
}


