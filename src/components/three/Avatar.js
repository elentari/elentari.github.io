import * as THREE from 'three';
import React, { useEffect, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export function Avatar({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));

  const { scene, animations } = gltf;

  useEffect(() => {
    let idleAnimationClip = THREE.AnimationClip.findByName(animations, 'idle');
    let animationAction = mixer.clipAction(idleAnimationClip, scene);
    animationAction.play();
    return () => mixer.uncacheClip(idleAnimationClip);
  }, []);

  scene.traverse(object => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  scene.scale.set(7, 7, 7);
  scene.position.y = -11;

  return <primitive object={gltf.scene} />;
}
