import { Link } from 'react-router-dom'

import { CTA } from '../components'
import { projects } from '../constants'
import { arrow } from '../assets/icons'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{' '}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16 btn-back '>
        {projects.map(project => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='project icon'
                  className='w-1/2 h-1/2 object-contain'
                />{' '}
              </div>{' '}
            </div>{' '}
            <br />
            {/* Lógica condicional para mostrar video o imagen */}
            {project.video ? (
              <iframe
                width='340'
                height='215'
                src={project.video}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen>
              </iframe>
            ) : project.img ? (
              <img
                src={project.img}
                alt={`Imagen del proyecto ${project.name}`}
                className='w-[340px] h-[215px] object-cover rounded'
              />
            ) : (
              <div className='w-[340px] h-[215px] flex justify-center items-center bg-gray-200 text-gray-500 rounded'>
                No hay contenido multimedia disponible.
              </div>
            )}
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                {project.link ? (
                  <>
                    <Link
                      to={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'>
                      Live Link.
                    </Link>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                {project.code ? (
                  <>
                    <Link
                      to={project.code}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'>
                      view the code.
                    </Link>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className='mt-5 flex items-center gap-2 font-poppins'>
                {project.certificate ? (
                  <>
                    <Link
                      to={project.certificate}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'>
                      view the certificate.
                    </Link>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects