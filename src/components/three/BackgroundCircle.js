import React from 'react';

export function BackgroundCircle() {
  return (
    <mesh position={[0, -2.5, -15]}>
      <sphereGeometry attach="geometry" args={[8, 32, 32]} />
      <meshBasicMaterial attach="material" color={0x6b52ae} />
    </mesh>
  );
}
