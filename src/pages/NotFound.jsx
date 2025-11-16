import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n.js'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <section className="container mx-auto py-20">
      <h1 className="text-2xl font-semibold mb-4">{t('notFound.title')}</h1>
      <Link className="text-primary hover:underline" to="/">Go Home</Link>
    </section>
  )
}


