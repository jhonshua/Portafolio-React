import { useEffect, useRef, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { About, Contact, Home, Projects, Dragons } from './pages'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const RouteFade = ({ children }) => {
  const location = useLocation()
  const [displayed, setDisplayed] = useState(location)
  const [visible, setVisible] = useState(true)
  const nextLocation = useRef(location)

  const showNext = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setDisplayed(nextLocation.current)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true))
    })
  }

  useEffect(() => {
    if (location.pathname === displayed.pathname) return
    nextLocation.current = location

    if (prefersReducedMotion()) {
      showNext()
      return
    }

    setVisible(false)
  }, [location, displayed.pathname])

  const handleTransitionEnd = event => {
    if (event.target !== event.currentTarget) return
    if (event.propertyName !== 'opacity') return
    if (visible) return
    showNext()
  }

  return (
    <div
      className={`route-fade${visible ? ' route-fade--visible' : ''}`}
      onTransitionEnd={handleTransitionEnd}>
      {children(displayed)}
    </div>
  )
}

const AppShell = () => {
  const { pathname } = useLocation()
  const isLanding = pathname === '/'
  const isHome = pathname === '/home'

  return (
    <>
      {!isLanding && <Navbar />}
      <RouteFade>
        {location => (
          <Routes location={location}>
            <Route path='/' element={<Dragons />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        )}
      </RouteFade>
      {!isLanding && !isHome && <Footer />}
    </>
  )
}

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <AppShell />
      </Router>
    </main>
  )
}

export default App
