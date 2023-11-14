/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const generateRandomPoints = (count) => {
  // Create a Float32Array with the correct number of entries
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const index = i * 3;
    positions[index] = Math.random() * 2 - 1; // x
    positions[index + 1] = Math.random() * 2 - 1; // y
    positions[index + 2] = Math.random() * 2 - 1; // z
  }

  return positions;
};

const Stars = (props) => {
  const ref = useRef();

  // Define positions as a Float32Array with 3 entries per vertex
  const [positions] = useState(() => generateRandomPoints(5000));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#F4A460'
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;