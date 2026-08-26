import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { translations } from './translations'

const STORAGE_KEY = 'portfolio-lang'
const LanguageContext = createContext(null)

const detectLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    /* ignore */
  }
  const browser = navigator.language || navigator.userLanguage || 'en'
  return browser.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectLang)

  const setLang = next => {
    const value = next === 'es' ? 'es' : 'en'
    setLangState(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export const useI18n = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useI18n must be used within LanguageProvider')
  }
  return ctx
}
