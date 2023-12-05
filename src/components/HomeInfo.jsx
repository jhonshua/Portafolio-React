import { Link } from 'react-router-dom'
import developer from '../assets/images/programador.png'
import developer2 from '../assets/images/programador2.png'
import proyecto from '../assets/images/proyecto.png'
import callme from '../assets/images/callme.png'
import { arrow } from '../assets/icons'

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div>
        <img src={developer} alt='developer' />

        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5  border-black border-b-2'>
          Hi, I'm
          <span className='font-semibold mx-2 text-white'>
            Julio Cesar Llinas
          </span>
          👋
          <br />
          I'm an electronic engineer and full-stack developer.
        </h1>
      </div>
    )

  if (currentStage === 2) {
    return (
      <div>
        <img src={developer2} alt='developer2' />

        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Would you like to learn more about me and my skills? <br />
          </p>

          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Learn more about me.
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            🧐
          </Link>
        </div>
      </div>
    )
  }

  if (currentStage === 3) {
    return (
      <div>
        <img src={proyecto} alt='developer' />
        <br />
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Would you be interested in seeing some of my projects? I'm always
            looking for feedback. <br />
          </p>

          <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Visit my portfolio
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            😎
          </Link>
        </div>
      </div>
    )
  }

  if (currentStage === 4) {
    return (
      <div>
        <img src={callme} alt='developer' />
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Need a project done or looking for a dev? <br /> I'm just a few
            keystrokes away
          </p>

          <Link to='/contact' className='neo-brutalism-white neo-btn'>
            Let's talk
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            🥇
          </Link>
        </div>
      </div>
    )
  }

  return null
}

export default HomeInfo
