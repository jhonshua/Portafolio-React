import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import developer from '../assets/images/programador.png'
import pictiaxEvent from '../assets/images/pictiaxc.jpg'
import venturaPisopro from '../assets/images/ventura pisopro.jpg'
import { CTA, SEO } from '../components'
import { experiences, skills } from '../constants'
import { useI18n } from '../i18n/LanguageContext'

import 'react-vertical-timeline-component/style.min.css'

const SKILL_GROUPS = ['frontend', 'backend', 'devops', 'mobile']

const TIMELINE_PHOTOS = {
  pisopro: venturaPisopro,
  snap360: pictiaxEvent,
}

const SkillCard = ({ skill, description }) => (
  <div className='group relative' tabIndex={0}>
    <div className='flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:h-20 sm:w-20 sm:p-2.5'>
      <img
        src={skill.icon || skill.imageUrl}
        alt={skill.name}
        className='h-9 w-9 object-contain sm:h-12 sm:w-12'
      />
    </div>
    <div
      role='tooltip'
      className='pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-[min(16rem,calc(100vw-2rem))] origin-top -translate-x-1/2 scale-95 rounded-xl border border-slate-700 bg-slate-900 p-3 text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100'>
      <p className='mb-1 text-sm font-bold text-blue-400'>{skill.name}</p>
      <p className='text-xs leading-normal text-slate-300'>
        {description || skill.description}
      </p>
    </div>
  </div>
)

const About = () => {
  const { t } = useI18n()

  return (
    <section className='max-container'>
      <SEO title={t.about.seoTitle} description={t.about.seoDescription} />
      <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
        <h1 className='head-text'>
          {t.about.hello}{' '}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Julio.
          </span>
        </h1>
        <img
          src={developer}
          alt=''
          className='h-28 w-auto max-w-[9.5rem] object-contain sm:h-36 sm:max-w-[12rem]'
        />
      </div>

      <div className='mt-5 flex flex-col gap-3 text-slate-700'>
        <p>{t.about.bio}</p>
      </div>

      <div className='flex flex-col py-10'>
        <h3 className='subhead-text'>{t.about.skills}</h3>

        <div className='mt-10 flex flex-col gap-12'>
          {SKILL_GROUPS.map(group => (
            <div key={group}>
              <h4 className='mb-5 font-poppins text-lg font-semibold text-slate-800 sm:text-xl'>
                {t.about.skillGroups[group]}
              </h4>
              <div className='flex flex-wrap gap-3 pb-6 sm:gap-4'>
                {skills
                  .filter(skill => (skill.category || skill.group) === group)
                  .map(skill => (
                    <SkillCard
                      key={skill.id || skill.name}
                      skill={skill}
                      description={t.about.skillDescriptions?.[skill.id]}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>{t.about.experience}</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-700'>
          <p>{t.about.experienceIntro}</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map(experience => {
              const copy = t.experiences[experience.id] || {}
              const points = copy.points || experience.points || []
              const pointList = Array.isArray(points) ? points : [points]
              const company = copy.company || experience.company_name

              const dateLabel = copy.date || experience.date
              const photo = TIMELINE_PHOTOS[experience.id]
              const hasMedia = Boolean(photo)

              return (
                <VerticalTimelineElement
                  key={experience.id}
                  className={hasMedia ? 'vertical-timeline-element--has-media' : undefined}
                  date={
                    hasMedia ? (
                      <div className='timeline-media'>
                        <figure className='timeline-media__card rounded-2xl border border-slate-100 bg-white p-4 shadow-sm'>
                          <img
                            src={photo}
                            alt={copy.photoCaption || company}
                            className='timeline-media__img'
                          />
                          <figcaption className='timeline-media__caption text-left'>
                            <p className='timeline-media__caption-title mt-3 mb-1 text-base font-bold text-slate-900'>
                              {copy.photoCaption}
                            </p>
                            {copy.photoDetail && (
                              <p className='timeline-media__caption-detail text-sm leading-relaxed text-slate-600'>
                                {copy.photoDetail}
                              </p>
                            )}
                          </figcaption>
                        </figure>
                      </div>
                    ) : (
                      dateLabel
                    )
                  }
                  dateClassName='text-slate-700 font-medium'
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex h-full w-full items-center justify-center'>
                      <img
                        src={experience.icon}
                        alt={company}
                        className='h-[60%] w-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}>
                  <div>
                    {hasMedia && (
                      <p className='mb-2 text-sm font-medium text-slate-500'>
                        {dateLabel}
                      </p>
                    )}
                    <h3 className='font-poppins text-xl font-semibold text-black'>
                      {copy.title || experience.title}
                    </h3>
                    {experience.link ? (
                      <a
                        className='text-base font-medium text-blue-600 hover:underline'
                        style={{ margin: 0 }}
                        href={experience.link}
                        target='_blank'
                        rel='noreferrer'>
                        {company}
                      </a>
                    ) : (
                      <p
                        className='text-base font-medium text-slate-700'
                        style={{ margin: 0 }}>
                        {company}
                      </p>
                    )}
                  </div>

                  <ul className='my-5 ml-5 list-disc space-y-3'>
                    {pointList.map((point, index) => (
                      <li
                        key={`${experience.id}-point-${index}`}
                        className='pl-1 text-sm font-normal leading-relaxed text-slate-700'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About
