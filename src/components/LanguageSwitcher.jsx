import { useI18n } from '../i18n/LanguageContext'

const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      className={`inline-flex shrink-0 overflow-hidden rounded-full border border-slate-300/80 bg-white/90 p-0.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm ${className}`}
      role='group'
      aria-label={t.lang.label}>
      <button
        type='button'
        onClick={() => setLang('es')}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === 'es'
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={lang === 'es'}
        title={t.lang.es}>
        ES
      </button>
      <button
        type='button'
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={lang === 'en'}
        title={t.lang.en}>
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
