import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const indexPath = resolve(dist, 'index.html')
const notFoundPath = resolve(dist, '404.html')

if (!existsSync(dist)) {
  mkdirSync(dist, { recursive: true })
}

try {
  copyFileSync(indexPath, notFoundPath)
  console.log('Copied index.html to 404.html for SPA fallback.')
} catch (e) {
  console.warn('Failed to copy SPA fallback:', e?.message || e)
}


