export default function Model() {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 10, 10]} />
      <meshBasicMaterial color="hotpink" wireframe={true} />
    </mesh>
  );
}
