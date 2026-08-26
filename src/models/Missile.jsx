import { Clone, useGLTF } from '@react-three/drei'

import missileScene from '../assets/3d/simple_rocket_ship_or_missile.glb'

export function Missile({ scale = 0.09, ...props }) {
  const { scene } = useGLTF(missileScene)

  return (
    <group {...props}>
      <Clone object={scene} scale={scale} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload(missileScene)
