import React, { useEffect, Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import ladpage from '../assets/images/landpage.png'
import { Dragon, Sky, Nombre } from '../models'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import {  Loader } from '../components'

const Dragons = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const ref = useRef()
  const dragonRef = useRef()
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [deviceOrientation, setDeviceOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [gyroscopeEnabled, setGyroscopeEnabled] = useState(false)
  const [sensitivity, setSensitivity] = useState(0.08) // Estado para sensibilidad ajustable

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Manejar orientación del dispositivo
  useEffect(() => {
    if (!isMobile) return

    const handleOrientation = (event) => {
      if (gyroscopeEnabled) {
        setDeviceOrientation({
          alpha: event.alpha || 0, // Rotación Z (0-360)
          beta: event.beta || 0,   // Rotación X (-180 a 180)
          gamma: event.gamma || 0  // Rotación Y (-90 a 90)
        })
      }
    }

    if (typeof DeviceOrientationEvent !== 'undefined') {
      // Para iOS 13+ necesitamos pedir permisos
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS
        const requestPermission = async () => {
          try {
            const permission = await DeviceOrientationEvent.requestPermission()
            if (permission === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation)
              setGyroscopeEnabled(true)
            }
          } catch (error) {
            console.log('Error requesting device orientation permission:', error)
          }
        }
        
        if (gyroscopeEnabled) {
          requestPermission()
        }
      } else {
        // Android y otros
        window.addEventListener('deviceorientation', handleOrientation)
        setGyroscopeEnabled(true)
      }
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [isMobile, gyroscopeEnabled])

  // Función para activar giroscopio (especialmente para iOS)
  const enableGyroscope = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission()
        if (permission === 'granted') {
          setGyroscopeEnabled(true)
        } else {
          alert('Permiso de giroscopio denegado')
        }
      } catch (error) {
        console.log('Error:', error)
        alert('Error al solicitar permisos de giroscopio')
      }
    } else {
      setGyroscopeEnabled(true)
    }
  }

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  // Convertir orientación del dispositivo a rotación del modelo
  const getDragonRotation = () => {
    if (!isMobile || !gyroscopeEnabled) {
      return [0, 0, 0]
    }

    // Convertir grados a radianes y ajustar sensibilidad
    const rotationX = (deviceOrientation.beta * Math.PI / 180) * sensitivity
    const rotationY = (deviceOrientation.gamma * Math.PI / 180) * sensitivity
    const rotationZ = (deviceOrientation.alpha * Math.PI / 180) * sensitivity * 0.5

    return [rotationX, rotationY, rotationZ]
  }

  return (
    <section className='w-full h-screen relative'>
      <Link to='/home'>
        <div className='absolute top-28 left-0 right-0 z-0 flex items-center justify-center'>
          <img src={ladpage} alt=' ladpage' className='max-w-[90%] h-auto' />
        </div>
      </Link>

      {/* Botón para activar giroscopio en móviles */}
      {isMobile && !gyroscopeEnabled && (
        <div className='absolute top-4 right-4 z-20'>
          <button
            onClick={enableGyroscope}
            className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg'>
            📱 Activar Giroscopio
          </button>
        </div>
      )}

      {/* Indicador de giroscopio activo */}
      {isMobile && gyroscopeEnabled && (
        <div className='absolute top-4 right-4 z-20'>
          <div className='bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
            📱 Giroscopio ON
          </div>
        </div>
      )}

      <Canvas
        className={`w-full h-screen bg-transparent `}
        camera={{ fov: 75, near: 0.1, far: -500, position: [0, 0, 5] }}>
         <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 500, 10]}
            angle={10}
            penumbra={1}
            intensity={2}
          />
          <Stage
            controls={ref}
            preset='rembrandt'
            intensity={0.5}
            environment='night'></Stage>

          <Dragon 
            ref={dragonRef}
            position={[0, -10, -18]} 
            scale={[0.2, 0.2, 0.2]} 
            rotation={getDragonRotation()}
          />
          <Sky scale={[500, 500, 500]} isRotating={true} />
          <Nombre position={[0, 10, -18]} scale={[0.2, 0.2, 0.2]} />
        </Suspense>
        <OrbitControls
          ref={ref}
          minDistance={1}
          maxDistance={20}
          minPitch={-10}
          maxPitch={45}
          enabled={!isMobile || !gyroscopeEnabled} // Deshabilitar controles manuales cuando el giroscopio está activo
        />
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Dragons
