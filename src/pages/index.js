import * as THREE from 'three';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { Cube } from '../components/three/Cube';
import { Lights } from '../components/three/Lights';
import { Floor } from '../components/three/Floor';
import { BackgroundCircle } from '../components/three/BackgroundCircle';
import { Avatar } from '../components/three/Avatar';

function IndexPage() {
  return (
    <PageLayout>
      <NextSeo title="Home" />
      <Canvas
        camera={{ position: [0, -3, 50], fov: 20, near: 0.1, far: 1000 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.gammaFactor = 2.2;
          gl.gammaOutput = true;
          gl.antialias = true;
        }}
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Lights />
        <BackgroundCircle />
        <Suspense fallback={<Cube />}>
          <Avatar url="/avatar.glb" />
        </Suspense>
        <Floor />
      </Canvas>
    </PageLayout>
  );
}

export default IndexPage;
