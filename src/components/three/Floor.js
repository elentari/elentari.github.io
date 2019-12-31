import React from 'react';

export function Floor() {
  return (
    <mesh rotation-x={-0.5 * Math.PI} receiveShadow position-y={-11}>
      <planeGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
      <meshPhongMaterial attach="material" color={0xffffff} shininess={0} />
    </mesh>
  );
}
