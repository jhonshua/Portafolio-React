import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { About, Contact, Home, Projects, Dragons } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path='/' element={<Dragons />} />
          <Route
            path='/*'
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path='/home' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App
