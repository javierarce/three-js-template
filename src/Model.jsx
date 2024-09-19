import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

export default function Model() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2, 10, 10]} />
      <shaderMaterial
        ref={meshRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        uniforms={{
          uTime: { value: 0 },
          uBackColor: { value: new THREE.Color(0.1, 0.3, 0.5) },
        }}
      />
    </mesh>
  );
}
