import { Link } from 'react-router-dom'
import { CV_URL } from '../config/site'
import { useI18n } from '../i18n/LanguageContext'

const CTA = () => {
  const { t } = useI18n()

  return (
    <section className='cta py-12 sm:py-16'>
      <p className='cta-text'>
        {t.cta.text} <br className='sm:block hidden' />
        {t.cta.textLine2}
      </p>
      <div className='flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:items-center'>
        <Link to='/contact' className='btn'>
          {t.cta.button}
        </Link>
        <a
          href={CV_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='btn-outline'>
          {t.cta.cv}
        </a>
      </div>
    </section>
  )
}

export default CTA
