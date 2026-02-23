import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

import demonDragonScene from '../assets/3d/demon_dragon_full_texture.glb'

export function DemonDragon() {
  const dragonRef = useRef()
  const { scene, animations } = useGLTF(demonDragonScene)
  const { actions } = useAnimations(animations, dragonRef)

  useEffect(() => {
    if (actions?.['flying_skeletal.3']) {
      actions['flying_skeletal.3'].reset().fadeIn(0.5).play()
    }
  }, [actions])

  useFrame(({ clock }) => {
    if (!dragonRef.current) return

    const t = clock.elapsedTime * 0.25 + 2
    const radius = 12
    const centerY = 2
    const centerZ = -18

    dragonRef.current.position.x = Math.cos(t) * radius
    dragonRef.current.position.y = centerY + Math.sin(t * 0.6) * 2
    dragonRef.current.position.z = centerZ + Math.sin(t) * radius

    dragonRef.current.rotation.y = -t
  })

  return (
    <group
      ref={dragonRef}
      position={[0, 2, -18]}
      scale={[3.2, 3.2, 3.2]}
      dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(demonDragonScene)
