import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const MouseHint = () => (
  <svg
    viewBox='0 0 48 48'
    className='w-8 h-8 sm:w-9 sm:h-9'
    fill='none'
    aria-hidden='true'>
    <rect
      x='16'
      y='6'
      width='16'
      height='26'
      rx='8'
      stroke='currentColor'
      strokeWidth='2'
    />
    <path
      d='M24 11v6'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M10 24H6M42 24h-4M24 38v4'
      stroke='#facc15'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M8 24l3-2.5M8 24l3 2.5M40 24l-3-2.5M40 24l-3 2.5M24 40l-2.5-3M24 40l2.5-3'
      stroke='#facc15'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

const LandingOverlay = ({ hasExplored }) => {
  const { t } = useI18n()

  return (
    <div className='pointer-events-none absolute inset-0 z-10 flex flex-col justify-between'>
      <div className='landing-scrim-top px-4 pt-6 sm:px-10 sm:pt-10'>
        <div className='mb-6 flex justify-end'>
          <LanguageSwitcher className='pointer-events-auto' />
        </div>
        <div className='landing-fade-up mx-auto max-w-2xl text-center'>
          <p className='mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-xs'>
            {t.landing.eyebrow}
          </p>
          <h1 className='font-poppins text-2xl font-semibold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl'>
            {t.landing.title}
          </h1>
          <p className='mx-auto mt-3 max-w-xl text-sm text-white/85 drop-shadow sm:text-base'>
            {t.landing.subtitle}
          </p>
        </div>
      </div>

      <div className='landing-scrim-bottom flex flex-col items-center gap-4 px-5 pb-6 sm:pb-8'>
        <div
          className={`landing-hint flex items-center gap-3 text-white/90 transition-all duration-500 ${
            hasExplored
              ? 'pointer-events-none translate-y-2 opacity-0'
              : 'opacity-100'
          }`}>
          <span className='flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-sky-500/80 text-white shadow-lg backdrop-blur-sm'>
            <MouseHint />
          </span>
          <span className='text-sm font-medium drop-shadow sm:text-base'>
            {t.landing.hint}
          </span>
        </div>

        <Link
          to='/home'
          className='landing-cta pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:text-base'>
          {t.landing.cta}
          <svg
            className='h-4 w-4'
            viewBox='0 0 14 15'
            fill='none'
            aria-hidden='true'>
            <path
              d='M1.17 7.5h11.66M12.83 7.5 7 1.67M12.83 7.5 7 13.33'
              stroke='currentColor'
              strokeWidth='1.67'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default LandingOverlay
