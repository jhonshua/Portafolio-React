import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (
    env.VITE_SITE_URL || 'https://jhonshua.github.io/Portafolio-React'
  ).replace(/\/$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'html-seo-replace',
        transformIndexHtml(html) {
          return html.replace(/__SITE_URL__/g, siteUrl)
        },
      },
      {
        name: 'seo-build-files',
        apply: 'build',
        writeBundle(options) {
          const outDir = options.dir || path.resolve(__dirname, 'dist')
          const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
          fs.writeFileSync(path.join(outDir, 'robots.txt'), robots)
          const urls = [
            { loc: `${siteUrl}/`, changefreq: 'weekly', p: '1.0' },
            { loc: `${siteUrl}/about`, changefreq: 'weekly', p: '0.9' },
            { loc: `${siteUrl}/projects`, changefreq: 'monthly', p: '0.9' },
            { loc: `${siteUrl}/home`, changefreq: 'monthly', p: '0.8' },
            { loc: `${siteUrl}/contact`, changefreq: 'monthly', p: '0.7' },
          ]
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.p}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
          fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
        },
      },
    ],
    assetsInclude: ['**/*.glb'],
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true,
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: ['**/*.glb', '**/*.gltf'],
      },
    },
  }
})
