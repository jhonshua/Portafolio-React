import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import { arrow } from '../assets/icons'
import developer from '../assets/images/programador.png'
import developer2 from '../assets/images/programador2.png'
import proyecto from '../assets/images/proyecto.png'
import callme from '../assets/images/callme.png'

const STAGE_LINKS = {
  1: '/about',
  2: '/about',
  3: '/projects',
  4: '/contact',
}

const STAGE_IMAGES = {
  1: developer,
  2: developer2,
  3: proyecto,
  4: callme,
}

const HomeInfo = ({ currentStage }) => {
  const { t } = useI18n()
  const stage = t.home.stages[currentStage]
  if (!stage) return null

  const imageSrc = STAGE_IMAGES[currentStage]

  return (
    <div
      key={`${currentStage}-${stage.title}`}
      className='landing-fade-up pointer-events-auto mx-auto flex w-full min-w-0 max-w-md flex-col items-center px-4'>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=''
          className='mb-1 h-24 w-auto max-w-[9.5rem] object-contain drop-shadow-lg sm:h-36 sm:max-w-[12rem]'
        />
      ) : null}
      <article className='home-info-card w-full min-w-0 px-4 py-4 text-center sm:px-6'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[11px]'>
          {stage.eyebrow}
        </p>
        <h1 className='font-poppins text-base font-semibold leading-snug text-white sm:text-xl'>
          {stage.title}
        </h1>
        <p className='mt-1 text-xs leading-relaxed text-white/85 break-words sm:text-sm'>
          {stage.body}
        </p>
        <Link
          to={STAGE_LINKS[currentStage]}
          className='mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-200 transition hover:text-white'>
          {stage.cta}
          <img src={arrow} alt='' className='h-4 w-4 object-contain' />
        </Link>
      </article>
    </div>
  )
}

export default HomeInfo
