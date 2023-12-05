import React, { useEffect, Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import ladpage from '../assets/images/landpage.png'
import { Dragon, Sky, Nombre } from '../models'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Dragons = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const ref = useRef()
  const [isPlayingMusic, setIsPlayingMusic] = useState(true)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  return (
    <section className='w-full h-screen relative'>
      <Link to='/home'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          <img src={ladpage} alt=' ladpage' />
        </div>
      </Link>

      <Canvas
        className={`w-full h-screen bg-transparent `}
        camera={{ fov: 75, near: 0.1, far: -500, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
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

          <Dragon position={[0, -10, -18]} scale={[0.2, 0.2, 0.2]} />
          <Sky scale={[500, 500, 500]} isRotating={true} />
          <Nombre position={[0, 10, -18]} scale={[0.2, 0.2, 0.2]} />
        </Suspense>
        <OrbitControls
          ref={ref}
          minDistance={1}
          maxDistance={20}
          minPitch={-10}
          maxPitch={45}
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
