import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import planeScene from "../assets/3d/plane.glb";

const BOBBING_AMPLITUDE = 1;
const BOBBING_SPEED = 1.2;

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, position = [0, 0, 0], ...props }) {
  const ref = useRef();

  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const baseY = position[1] ?? 0;
    ref.current.position.y = baseY + Math.sin(clock.elapsedTime * BOBBING_SPEED) * BOBBING_AMPLITUDE;
  });

  return (
    <mesh {...props} position={position} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
