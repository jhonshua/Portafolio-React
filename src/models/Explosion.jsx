import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import explosionScene from '../assets/3d/explosion_action_effect_part.glb'

const CENTER = [0, 33.4, 0]
const BASE_SCALE = 0.048
const DURATION = 1.15

export function Explosion({ position = [0, 0, 0], playId = 0 }) {
  const group = useRef()
  const { scene } = useGLTF(explosionScene)
  const [visible, setVisible] = useState(false)
  const life = useRef(0)
  const materials = useRef([])

  useLayoutEffect(() => {
    const collected = []
    scene.traverse(obj => {
      if (!obj.isMesh || !obj.material) return
      const mat = obj.material.clone()
      mat.transparent = true
      mat.depthWrite = false
      mat.toneMapped = false
      obj.material = mat
      collected.push(mat)
    })
    materials.current = collected
  }, [scene])

  useEffect(() => {
    if (!playId) return
    setVisible(true)
    life.current = DURATION
    materials.current.forEach(mat => {
      mat.opacity = 1
    })
  }, [playId])

  useFrame((_, delta) => {
    if (!group.current || !visible) return
    life.current -= delta
    const progress = 1 - Math.max(0, life.current) / DURATION
    const grow = 0.55 + progress * 0.7
    group.current.scale.setScalar(grow)
    materials.current.forEach(mat => {
      mat.opacity = Math.max(0, 1 - progress)
    })
    if (life.current <= 0) setVisible(false)
  })

  return (
    <group ref={group} position={position} visible={visible} scale={1}>
      <group scale={BASE_SCALE}>
        <primitive object={scene} position={CENTER} />
      </group>
      {visible && (
        <pointLight color='#ff8a1d' intensity={18} distance={14} decay={2} />
      )}
    </group>
  )
}

useGLTF.preload(explosionScene)
