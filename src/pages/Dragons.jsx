import React, { useEffect, Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Dragon, AnimatedDragon, DemonDragon, Sky, Nombre } from '../models'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import { LandingOverlay, Loader, SEO } from '../components'
import { useI18n } from '../i18n/LanguageContext'

const Dragons = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const ref = useRef()
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [hasExplored, setHasExplored] = useState(false)
  const { t } = useI18n()

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
      <SEO
        title={t.landing.seoTitle}
        description={t.landing.seoDescription}
      />
      <LandingOverlay hasExplored={hasExplored} />

      <Canvas
        className='w-full h-screen bg-transparent cursor-grab active:cursor-grabbing'
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
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

          <Dragon position={[0, -10, -18]} scale={[0.2, 0.2, 0.2]} />
          <AnimatedDragon />
          <DemonDragon />
          <Sky scale={[500, 500, 500]} isRotating={true} speed={0.038} />
          <Nombre position={[0, 8, -18]} scale={[0.2, 0.2, 0.2]} />
        </Suspense>
        <OrbitControls
          ref={ref}
          minDistance={1}
          maxDistance={20}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.7}
          onStart={() => setHasExplored(true)}
        />
      </Canvas>
      <div className='absolute bottom-2 left-2 z-20'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt={isPlayingMusic ? t.landing.musicOff : t.landing.musicOn}
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Dragons
