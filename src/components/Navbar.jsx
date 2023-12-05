import { NavLink } from 'react-router-dom'
import { house } from '../assets/images'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/home'>
        <img src={house} alt='house' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-large font-bold'>
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
    </header>
  )
}

export default Navbar
