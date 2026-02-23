import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

import dragonScene from '../assets/3d/animated_dragon_three_motion_loops.glb'

export function AnimatedDragon() {
  const dragonRef = useRef()
  const { scene, animations } = useGLTF(dragonScene)
  const { actions } = useAnimations(animations, dragonRef)

  useEffect(() => {
    if (actions?.Flying) {
      actions.Flying.reset().fadeIn(0.5).play()
    }
  }, [actions])

  useFrame(({ clock }) => {
    if (!dragonRef.current) return

    const t = clock.elapsedTime * 0.3
    const radius = 10
    const centerY = 0
    const centerZ = -16

    dragonRef.current.position.x = Math.cos(t) * radius
    dragonRef.current.position.y = centerY + Math.sin(t * 0.7) * 3
    dragonRef.current.position.z = centerZ + Math.sin(t) * radius

    dragonRef.current.rotation.y = -t
  })

  return (
    <group
      ref={dragonRef}
      position={[0, 0, -16]}
      scale={[3, 3, 3]}
      dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(dragonScene)
