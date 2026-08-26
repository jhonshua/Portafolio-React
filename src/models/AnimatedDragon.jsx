import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

import dragonScene from '../assets/3d/animated_dragon_three_motion_loops.glb'

const NEAR = {
  center: [-17, -0.4, -12],
  radius: [9, 8],
  scale: [3, 3, 3],
  speed: 0.4,
  lift: 2.4,
}

const FAR = {
  center: [-38, 18, -88],
  radius: [22, 16],
  scale: [1.05, 1.05, 1.05],
  speed: 0.18,
  lift: 4,
}

export function AnimatedDragon({ scenery = false }) {
  const dragonRef = useRef()
  const { scene, animations } = useGLTF(dragonScene)
  const { actions } = useAnimations(animations, dragonRef)
  const layout = scenery ? FAR : NEAR

  useEffect(() => {
    const flying = actions?.Flying
    if (!flying) return
    flying.reset().fadeIn(0.5).play()
    flying.timeScale = scenery ? 0.85 : 1.08
  }, [actions, scenery])

  useFrame(({ clock }) => {
    if (!dragonRef.current) return

    const t = clock.elapsedTime * layout.speed
    const [rx, rz] = layout.radius
    const [centerX, centerY, centerZ] = layout.center

    const x = centerX + Math.cos(-t) * rx
    const z = centerZ + Math.sin(-t) * rz
    const y =
      centerY + Math.sin(t * 0.53) * layout.lift + Math.sin(t * 1.27) * 0.4

    const dx = Math.sin(-t) * rx
    const dz = -Math.cos(-t) * rz
    const dy =
      Math.cos(t * 0.53) * layout.lift * 0.53 + Math.cos(t * 1.27) * 0.45 * 1.27

    dragonRef.current.position.set(x, y, z)
    dragonRef.current.rotation.y = Math.atan2(dx, dz)
    dragonRef.current.rotation.x = dy * 0.06
    dragonRef.current.rotation.z = Math.sin(t * 0.53) * 0.12
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

useGLTF.preload(dragonScene)
