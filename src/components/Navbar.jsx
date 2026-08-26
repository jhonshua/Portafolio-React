import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { house } from '../assets/images'
import { useI18n } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-600 text-3xl' : ' text-green-300  fw-bold '

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 text-xl font-bold py-2'
      : 'text-green-300 font-bold py-2 hover:text-blue-600 transition-colors'

  return (
    <header className='header'>
      <NavLink to='/home'>
        <img
          src={house}
          alt='house'
          className='w-12 h-12 sm:w-18 sm:h-18 object-contain'
        />
      </NavLink>

      <div className='hidden items-center gap-6 md:flex'>
        <nav className='flex text-lg gap-7 font-large font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]'>
          <NavLink to='/' className={linkClass}>
            {t.nav.model3d}
          </NavLink>
          <NavLink to='/home' className={linkClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to='/projects' className={linkClass}>
            {t.nav.projects}
          </NavLink>
          <NavLink to='/contact' className={linkClass}>
            {t.nav.contact}
          </NavLink>
        </nav>
        <LanguageSwitcher />
      </div>

      <div className='flex items-center gap-3 md:hidden'>
        <LanguageSwitcher />
        <button
          className='flex h-8 w-8 flex-col items-center justify-center space-y-1'
          onClick={toggleMenu}
          aria-label={t.nav.menu}>
          <span
            className={`block h-0.5 w-6 bg-green-300 transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}></span>
          <span
            className={`block h-0.5 w-6 bg-green-300 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
          <span
            className={`block h-0.5 w-6 bg-green-300 transition-transform duration-300 ${
              isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}></span>
        </button>
      </div>

      <nav
        className={`absolute left-0 right-0 top-full z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}>
        <div className='flex flex-col space-y-4 px-8 py-4'>
          <NavLink to='/' onClick={closeMenu} className={mobileLinkClass}>
            {t.nav.model3d}
          </NavLink>
          <NavLink to='/home' onClick={closeMenu} className={mobileLinkClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to='/about' onClick={closeMenu} className={mobileLinkClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to='/projects' onClick={closeMenu} className={mobileLinkClass}>
            {t.nav.projects}
          </NavLink>
          <NavLink to='/contact' onClick={closeMenu} className={mobileLinkClass}>
            {t.nav.contact}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
