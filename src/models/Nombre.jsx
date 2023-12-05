import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scene from '../assets/3d/nombre.glb'
export function Nombre(props) {
  const { nodes, materials } = useGLTF(scene)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
        material={materials['lambert2SG.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(scene)
