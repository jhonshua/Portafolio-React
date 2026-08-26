import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'

import sakura from '../assets/sakura.mp3'
import { FlightGame, HomeInfo, Loader, SEO } from '../components'
import { soundoff, soundon } from '../assets/icons'
import { useI18n } from '../i18n/LanguageContext'
import { AnimatedDragon, Bird, DemonDragon, Island, Sky } from '../models'

const getBiplaneLayout = () => {
  if (window.innerWidth < 768) {
    return { scale: [1.5, 1.5, 1.5], position: [0, -1.5, 0] }
  }
  return { scale: [3, 3, 3], position: [0, -4, -4] }
}

const getIslandLayout = () => {
  if (window.innerWidth < 768) {
    return { scale: [0.9, 0.9, 0.9], position: [0, -6.5, -43.4] }
  }
  return { scale: [1, 1, 1], position: [0, -6.5, -43.4] }
}

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const [isRotatingSki] = useState(true)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [biplane, setBiplane] = useState(getBiplaneLayout)
  const [island, setIsland] = useState(getIslandLayout)
  const [gameActive, setGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [scoreHit, setScoreHit] = useState(false)
  const keysRef = useRef({ up: false, down: false, left: false, right: false })
  const { t } = useI18n()

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  useEffect(() => {
    const onResize = () => {
      setBiplane(getBiplaneLayout())
      setIsland(getIslandLayout())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const startGame = () => {
    setScore(0)
    setGameActive(true)
  }

  const exitGame = () => {
    keysRef.current = { up: false, down: false, left: false, right: false }
    setGameActive(false)
  }

  const addScore = points => {
    setScore(prev => Math.max(0, prev + points))
    if (points < 0) {
      setScoreHit(true)
      window.setTimeout(() => setScoreHit(false), 450)
    }
  }

  const hold = (dir, pressed) => {
    keysRef.current[dir] = pressed
    if (pressed && !gameActive) startGame()
  }

  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <SEO title={t.home.seoTitle} description={t.home.seoDescription} />

      <div
        className={`pointer-events-none absolute left-0 right-0 top-24 z-10 flex min-w-0 justify-center px-1 transition-opacity duration-300 sm:top-28 ${
          gameActive ? 'opacity-0' : 'opacity-100'
        }`}>
        {currentStage ? <HomeInfo currentStage={currentStage} /> : null}
      </div>

      {gameActive && (
        <div className='absolute top-24 right-3 z-20 flex flex-col items-end gap-2 sm:right-6'>
          <div
            className={`rounded-2xl border px-3 py-2 shadow-lg backdrop-blur-sm transition ${
              scoreHit
                ? 'border-red-400 bg-red-700/70 text-white'
                : 'border-white/25 bg-slate-900/45 text-white'
            }`}>
            <p className='text-[10px] uppercase tracking-[0.18em] text-white/70'>
              {t.home.gameScore}
            </p>
            <p className='font-poppins text-2xl font-semibold leading-none'>
              {score}
            </p>
          </div>
          <button
            type='button'
            onClick={exitGame}
            className='rounded-full border border-white/25 bg-slate-900/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm hover:bg-slate-900/75'>
            {t.home.gameExitBtn} · Esc
          </button>
        </div>
      )}

      <Canvas
        className={`h-screen w-full bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird scenery />
          <AnimatedDragon scenery />
          <DemonDragon scenery />
          <Sky isRotating={isRotatingSki} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            enableKeyboard={!gameActive}
            position={island.position}
            rotation={[0.1, 4.7077, 0]}
            scale={island.scale}
          />
          <FlightGame
            planeScale={biplane.scale}
            planePosition={biplane.position}
            planeRotation={[0, 20.1, 0]}
            gameActive={gameActive}
            keysRef={keysRef}
            onStart={startGame}
            onScore={addScore}
            onExit={exitGame}
          />
        </Suspense>
      </Canvas>

      <div className='pointer-events-none absolute bottom-[7.5rem] left-0 right-0 z-10 flex flex-col items-center gap-3 px-4 sm:bottom-24'>
        <div className='max-w-[22rem] rounded-2xl border border-white/20 bg-slate-900/40 px-3 py-1.5 text-center text-xs leading-snug text-white/90 backdrop-blur-sm sm:max-w-none sm:rounded-full sm:text-sm'>
          {gameActive
            ? `${t.home.gameHint} · ${t.home.gameExit}`
            : `${t.home.gameStart} · ${t.home.gameHint}`}
        </div>

        {!gameActive && (
          <div className='flex items-center gap-2' aria-hidden='true'>
            {[1, 2, 3, 4].map(stage => (
              <span
                key={stage}
                className={`h-2 w-2 rounded-full transition ${
                  currentStage === stage ? 'scale-125 bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className='absolute bottom-4 right-3 z-20 grid grid-cols-3 gap-1.5'>
        <span />
        <PadButton label='▲' onHold={pressed => hold('up', pressed)} />
        <span />
        <PadButton label='◀' onHold={pressed => hold('left', pressed)} />
        <PadButton label='▼' onHold={pressed => hold('down', pressed)} />
        <PadButton label='▶' onHold={pressed => hold('right', pressed)} />
      </div>

      <button
        type='button'
        className='absolute bottom-4 left-3 z-20'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        aria-label={isPlayingMusic ? t.home.musicOff : t.home.musicOn}>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt=''
          className='h-10 w-10 cursor-pointer object-contain'
        />
      </button>
    </section>
  )
}

const PadButton = ({ label, onHold }) => (
  <button
    type='button'
    className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-slate-900/50 text-lg text-white backdrop-blur-sm active:bg-sky-500/70'
    onPointerDown={event => {
      event.preventDefault()
      onHold(true)
    }}
    onPointerUp={() => onHold(false)}
    onPointerLeave={() => onHold(false)}>
    {label}
  </button>
)

export default Home
