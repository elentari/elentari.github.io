import * as THREE from 'three';
import React from 'react';
import { useUpdate, useThree } from 'react-three-fiber';

export function Lights({ d = 8.25 }) {
  const { scene } = useThree();

  const hemisphereLightRef = useUpdate(light1 => {
    const hemisphereLightHelper = new THREE.HemisphereLightHelper(
      light1,
      5,
      0xff0000
    );

    // scene.add(hemisphereLightHelper);
  }, []);

  const directionalLightRef = useUpdate(light => {
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      light,
      5,
      0xff0000
    );

    // scene.add(directionalLightHelper);
  }, []);

  return (
    <>
      <hemisphereLight
        ref={hemisphereLightRef}
        position={[0, 50, 0]}
        skyColor={0xffffff}
        groundColor={0xffffff}
        intensity={0.61}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[-8, 12, 8]}
        color={0xffffff}
        intensity={0.54}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        shadow-camera-left={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-bottom={d * -1}
      />
    </>
  );
}
