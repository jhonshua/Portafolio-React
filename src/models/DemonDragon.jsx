import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

import demonDragonScene from '../assets/3d/demon_dragon_full_texture.glb'

const NEAR = {
  center: [18, 6.4, -23],
  radius: [9, 6],
  scale: [3.2, 3.2, 3.2],
  speed: 0.55,
}

const FAR = {
  center: [42, 22, -96],
  radius: [20, 14],
  scale: [1.15, 1.15, 1.15],
  speed: 0.22,
}

export function DemonDragon({ scenery = false }) {
  const dragonRef = useRef()
  const { scene, animations } = useGLTF(demonDragonScene)
  const { actions } = useAnimations(animations, dragonRef)
  const layout = scenery ? FAR : NEAR

  useEffect(() => {
    const flying = actions?.['flying_skeletal.3']
    if (!flying) return
    flying.reset().fadeIn(0.5).play()
    flying.timeScale = scenery ? 1.05 : 1.4
    flying.time = 1.8
  }, [actions, scenery])

  useFrame(({ clock }) => {
    if (!dragonRef.current) return

    const t = clock.elapsedTime * layout.speed + 1.15
    const [rx, rz] = layout.radius
    const [centerX, centerY, centerZ] = layout.center

    const x = centerX + Math.sin(t) * rx
    const z = centerZ + Math.sin(t * 2) * rz
    const y = centerY + Math.sin(t * 0.87) * 2.2 + Math.cos(t * 0.33) * 1.15

    const dx = Math.cos(t) * rx
    const dz = 2 * Math.cos(t * 2) * rz
    const dy =
      Math.cos(t * 0.87) * 2.2 * 0.87 - Math.sin(t * 0.33) * 1.15 * 0.33

    dragonRef.current.position.set(x, y, z)
    dragonRef.current.rotation.y = Math.atan2(dx, dz)
    dragonRef.current.rotation.x = dy * 0.05
    dragonRef.current.rotation.z = Math.sin(t * 2) * 0.18
  })

  return (
    <group
      ref={dragonRef}
      position={layout.center}
      scale={layout.scale}
      dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(demonDragonScene)
