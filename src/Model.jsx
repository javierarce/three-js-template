import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { useTexture, useAspect } from "@react-three/drei";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

export default function Model() {
  const meshRef = useRef();
  const texture = useTexture("./src/assets/photo.jpg");
  const scale = useAspect(texture.image.width, texture.image.height, 0.5);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  const uniforms = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uBackColor: { value: new THREE.Color(0.1, 0.3, 0.5) },
    uResolution: {
      value: new THREE.Vector2(texture.image.width, texture.image.height),
    },
  });

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1, 10, 10]} />
      <shaderMaterial
        ref={meshRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
