import { useState } from 'react'

import { CTA, SEO } from '../components'
import { projects } from '../constants'
import { useI18n } from '../i18n/LanguageContext'

const ProjectGallery = ({ slides, title, labels = {} }) => {
  const [active, setActive] = useState(0)
  const current = slides[active]
  const currentLabel = labels[current.id] || current.label

  return (
    <div>
      <div className='aspect-video overflow-hidden rounded-xl bg-slate-100 shadow-md'>
        {current.video ? (
          <iframe
            key={current.id}
            className='h-full w-full'
            src={current.video}
            title={`${title} — ${currentLabel}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        ) : (
          <img
            key={current.id}
            src={current.src}
            alt={`${title} — ${currentLabel}`}
            className={`h-full w-full transition-all duration-300 ${
              current.fit === 'contain'
                ? `object-contain ${current.fitBg || 'bg-white'}`
                : 'object-cover'
            }`}
          />
        )}
      </div>
      {slides.length > 1 && (
      <div
        className={`mt-3 grid gap-2 ${
          slides.length === 2
            ? 'grid-cols-2'
            : slides.length === 4
              ? 'grid-cols-2 sm:grid-cols-4'
              : 'grid-cols-3'
        }`}>
        {slides.map((slide, index) => {
          const isActive = index === active
          const label = labels[slide.id] || slide.label
          const thumb = slide.thumb || slide.src
          return (
            <button
              key={slide.id}
              type='button'
              onClick={() => setActive(index)}
              className={`overflow-hidden rounded-lg text-left transition ${
                isActive
                  ? 'border-2 border-blue-600'
                  : 'border border-slate-200 hover:border-slate-300'
              }`}>
              <img
                src={thumb}
                alt={label}
                className={`aspect-video w-full ${
                  slide.fit === 'contain'
                    ? `object-contain ${slide.fitBg || 'bg-white'}`
                    : 'object-cover'
                }`}
              />
              <span
                className={`block px-1 py-1 text-center text-[10px] font-medium leading-tight sm:px-1.5 sm:text-[11px] ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
      )}
    </div>
  )
}

const ProjectCard = ({ project, copy, labels }) => {
  const title = copy.name || project.name
  const description = copy.description || project.description
  const preview = project.img || project.fallbackImg
  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0

  return (
    <article className='flex h-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm'>
      {hasGallery ? (
        <ProjectGallery
          slides={project.gallery}
          title={title}
          labels={copy.gallery}
        />
      ) : project.video ? (
        <div className='aspect-video overflow-hidden rounded-xl bg-slate-100 shadow-md'>
          <iframe
            className='h-full w-full'
            src={project.video}
            title={title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </div>
      ) : (
        <div className='aspect-video overflow-hidden rounded-xl bg-slate-100 shadow-md'>
          {preview ? (
            <img
              src={preview}
              alt={title}
              className={`h-full w-full ${
                project.imgFit === 'contain'
                  ? 'object-contain p-8'
                  : 'object-cover'
              }`}
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-6 text-center'>
              <p className='font-poppins text-sm font-semibold text-slate-500'>
                {title}
              </p>
            </div>
          )}
        </div>
      )}

      {project.stack.length > 0 && (
      <div className='mt-4 flex flex-wrap gap-2'>
        {project.stack.map(tech => (
          <span
            key={tech}
            className='rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700'>
            {tech}
          </span>
        ))}
      </div>
      )}

      <h3 className='mt-4 font-poppins text-xl font-semibold text-slate-900'>
        {title}
      </h3>
      <p className='mt-2 flex-1 text-sm leading-relaxed text-slate-600'>
        {description}
      </p>

      <div className='mt-5 flex flex-wrap gap-4 text-sm font-semibold'>
        {project.link && (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'>
            {labels.live}
          </a>
        )}
        {project.code && (
          <a
            href={project.code}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'>
            {labels.code}
          </a>
        )}
        {project.certificate && (
          <a
            href={project.certificate}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'>
            {labels.certificate}
          </a>
        )}
      </div>
    </article>
  )
}

const Projects = () => {
  const { t } = useI18n()

  return (
    <section className='max-container'>
      <SEO title={t.projects.seoTitle} description={t.projects.seoDescription} />
      <h1 className='head-text'>
        {t.projects.titlePrefix}{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {t.projects.title}
        </span>
      </h1>

      <p className='mt-2 break-words leading-relaxed text-slate-500'>
        {t.projects.intro}
      </p>

      <div className='my-16 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            copy={t.projectItems[project.id] || {}}
            labels={{
              live: t.projects.live,
              code: t.projects.code,
              certificate: t.projects.certificate,
            }}
          />
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects
