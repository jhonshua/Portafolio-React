import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { house } from '../assets/images'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <NavLink to='/home'>
        <img src={house} alt='house' className='w-12 h-12 sm:w-18 sm:h-18 object-contain' />
      </NavLink>
      
      {/* Desktop Navigation */}
      <nav className='hidden md:flex text-lg gap-7 font-large font-bold'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-blue-600 text-3xl' : ' text-green-300  fw-bold '
          }>
          3d model
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-600 text-3xl' : ' text-green-300  fw-bold '
          }>
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-blue-600 text-3xl' : ' text-green-300  fw-bold '
          }>
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-blue-600 text-3xl' : ' text-green-300  fw-bold '
          }>
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1'
        onClick={toggleMenu}
        aria-label='Toggle menu'>
        <span className={`block w-6 h-0.5 bg-green-300 transition-transform duration-300 ${
          isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}></span>
        <span className={`block w-6 h-0.5 bg-green-300 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`block w-6 h-0.5 bg-green-300 transition-transform duration-300 ${
          isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 transition-all duration-300 z-50 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className='flex flex-col py-4 px-8 space-y-4'>
          <NavLink
            to='/'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive 
                ? 'text-blue-600 text-xl font-bold py-2' 
                : 'text-green-300 font-bold py-2 hover:text-blue-600 transition-colors'
            }>
            3d model
          </NavLink>
          <NavLink
            to='/about'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive 
                ? 'text-blue-600 text-xl font-bold py-2' 
                : 'text-green-300 font-bold py-2 hover:text-blue-600 transition-colors'
            }>
            About
          </NavLink>
          <NavLink
            to='/projects'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive 
                ? 'text-blue-600 text-xl font-bold py-2' 
                : 'text-green-300 font-bold py-2 hover:text-blue-600 transition-colors'
            }>
            Projects
          </NavLink>
          <NavLink
            to='/contact'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive 
                ? 'text-blue-600 text-xl font-bold py-2' 
                : 'text-green-300 font-bold py-2 hover:text-blue-600 transition-colors'
            }>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
