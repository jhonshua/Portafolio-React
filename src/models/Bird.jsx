import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

import birdScene from '../assets/3d/bird.glb'

export function Bird({ scenery = false }) {
  const birdRef = useRef()
  const { scene, animations } = useGLTF(birdScene)
  const { actions } = useAnimations(animations, birdRef)

  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return

    if (scenery) {
      const t = clock.elapsedTime * 0.16
      birdRef.current.position.x = -12 + Math.sin(t) * 28
      birdRef.current.position.y = 16 + Math.sin(t * 1.4) * 2.2
      birdRef.current.position.z = -78 + Math.cos(t) * 10
      birdRef.current.rotation.y = Math.cos(t) > 0 ? 0 : Math.PI
      return
    }

    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    } else {
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh
      ref={birdRef}
      position={scenery ? [-12, 16, -78] : [-5, 2, 1]}
      scale={scenery ? [0.0011, 0.0011, 0.0011] : [0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}
