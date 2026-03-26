import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Cyl = () => {
  const tex = useTexture('../download.jpg');
  const cylRef = useRef(null); 

  useFrame((state, delta) => {
    if (cylRef.current) {
      cylRef.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cylRef}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
