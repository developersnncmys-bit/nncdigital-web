import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // This marketing site uses anchor links (hash) with Lenis smooth scroll.
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
]
