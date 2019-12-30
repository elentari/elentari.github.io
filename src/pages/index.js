import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';

function Thing() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

function IndexPage() {
  return (
    <PageLayout>
      <NextSeo title="Home" />
      <Canvas
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Thing />
      </Canvas>
    </PageLayout>
  );
}

export default IndexPage;
