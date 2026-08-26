export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://jhonshua.github.io/Portafolio-React'
).replace(/\/$/, '')

export const SITE_AUTHOR = 'Julio'
export const SITE_NAME = 'Julio — Portafolio'
export const CV_URL =
  'https://drive.google.com/file/d/1P78BpfNQSPaJu76k1V5Urp99eWf_Zcs7/view?usp=drive_link'

export const SEO_DEFAULT = {
  title: 'Julio — Lead Software Engineer, DevOps & Full-Stack Developer',
  description:
    'Portafolio profesional de Julio, Ingeniero de Electrónica, Lead Software Engineer y Arquitecto DevOps. Especialista en React, Next.js, Python, Django, Docker y Kubernetes.',
  keywords: [
    'Software Engineer',
    'DevOps Architect',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Python',
    'Django',
    'PisoPro',
    'PictiaX',
  ],
  ogTitle: 'Julio — Lead Software Engineer & DevOps Architect',
  ogDescription:
    'Portafolio profesional y trayectoria técnica en desarrollo web, robótica e infraestructura Cloud.',
}

export const SOCIAL_PROFILES = [
  'https://github.com/jhonshua',
  'https://www.linkedin.com/in/julio-cesar-llinas-ba65a6127/',
]

export const personSchema = (url = SITE_URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Julio',
  url,
  jobTitle: 'Lead Software Engineer & DevOps Architect',
  knowsAbout: [
    'Software Engineering',
    'DevOps',
    'Python',
    'Django',
    'React',
    'Next.js',
    'Kubernetes',
    'Docker',
  ],
  sameAs: SOCIAL_PROFILES,
})
