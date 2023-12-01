/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

// Function to generate random points within a 3 dimensional space
const generateRandomPoints = (count) => {
  // Create a Float32Array with the correct number of entries
  // Each vertex has 3 entries for x, y, z
  // So the total number of entries is 3 * count
  // The array is initialized with zeros
  const positions = new Float32Array(count * 3);

  // Loop over each entry and set it to a random value between -1 and 1
  for (let i = 0; i < count; i++) {
    const index = i * 3;
    positions[index] = Math.random() * 2 - 1; // x coordinate between -1 and 1
    positions[index + 1] = Math.random() * 2 - 1; // y coordinate between -1 and 1
    positions[index + 2] = Math.random() * 2 - 1; // z coordinate between -1 and 1
  }

  return positions; // Return the array of the generated random points
};

const Stars = (props) => {
  const ref = useRef();

  // Holds the positions of each star in the scene in an array
  const [positions] = useState(() => generateRandomPoints(5000));

  // Animation logic to rotate the stars
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Rotate the stars around the x axis
    ref.current.rotation.y -= delta / 15; // Rotate the stars around the y axis
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* The Points component renders the stars */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        {/* The PointMaterial component to render and style the stars */}
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