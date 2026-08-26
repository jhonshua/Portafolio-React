import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import {
  personSchema,
  SEO_DEFAULT,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL,
} from '../config/site'
import { useI18n } from '../i18n/LanguageContext'

function SEO({ title, description, keywords }) {
  const { pathname } = useLocation()
  const { lang } = useI18n()
  const path = pathname === '/' ? '' : pathname
  const canonical = `${SITE_URL}${path || '/'}`
  const pageTitle = title || SEO_DEFAULT.title
  const pageDescription = description || SEO_DEFAULT.description
  const pageKeywords = (keywords || SEO_DEFAULT.keywords).join(', ')
  const ogTitle = pathname === '/about' || pathname === '/'
    ? SEO_DEFAULT.ogTitle
    : pageTitle
  const ogDescription = pathname === '/about' || pathname === '/'
    ? SEO_DEFAULT.ogDescription
    : pageDescription
  const locale = lang === 'es' ? 'es_ES' : 'en_US'
  const schema = personSchema(canonical)

  return (
    <Helmet
      prioritizeSeoTags
      htmlAttributes={{ lang }}
      title={pageTitle}>
      <meta name='description' content={pageDescription} />
      <meta name='keywords' content={pageKeywords} />
      <meta name='author' content={SITE_AUTHOR} />
      <meta name='robots' content='index, follow' />
      <link rel='canonical' href={canonical} />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:url' content={canonical} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${SITE_URL}/og-image.png`} />
      <meta property='og:locale' content={locale} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={ogTitle} />
      <meta name='twitter:description' content={ogDescription} />
      <meta name='twitter:image' content={`${SITE_URL}/og-image.png`} />
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default SEO
