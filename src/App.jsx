import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import "./App.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Model />
    </Canvas>
  );
}
