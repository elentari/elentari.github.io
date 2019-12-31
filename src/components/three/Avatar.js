import * as THREE from 'three';
import React, { useEffect, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function getMousePos(e) {
  return { x: e.clientX, y: e.clientY };
}
function moveJoint(mouse, joint, degreeLimit) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
  joint.rotation.y = THREE.Math.degToRad(degrees.x);
  joint.rotation.x = THREE.Math.degToRad(degrees.y);
}

function getMouseDegrees(x, y, degreeLimit) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

  let w = { x: window.innerWidth, y: window.innerHeight };

  // Left (Rotates neck left between 0 and -degreeLimit)

  // 1. If cursor is in the left half of screen
  if (x <= w.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = w.x / 2 - x;
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xdiff / (w.x / 2)) * 100;
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }
  // Right (Rotates neck right between 0 and degreeLimit)
  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }
  // Up (Rotates neck up between 0 and -degreeLimit)
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    // Note that I cut degreeLimit in half when she looks up
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
  }

  // Down (Rotates neck down between 0 and degreeLimit)
  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }
  return { x: dx, y: dy };
}

export function Avatar({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));

  const { scene, animations } = gltf;

  useEffect(() => {
    let neck;
    let waist;

    scene.traverse(object => {
      if (object.isBone && object.name === 'arissaNeck') {
        neck = object;
      }
      if (object.isBone && object.name === 'arissaSpine') {
        waist = object;
      }
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    scene.scale.set(7, 7, 7);
    scene.position.y = -11;

    let idleAnimationClip = THREE.AnimationClip.findByName(animations, 'idle');

    idleAnimationClip.tracks.splice(3, 3);
    idleAnimationClip.tracks.splice(9, 3);

    let animationAction = mixer.clipAction(idleAnimationClip, scene);
    animationAction.play();

    function onMouseMove(e) {
      var mousecoords = getMousePos(e);
      if (neck && waist) {
        moveJoint(mousecoords, neck, 50);
        moveJoint(mousecoords, waist, 30);
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      mixer.uncacheClip(idleAnimationClip);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [scene, animations]);

  return <primitive object={gltf.scene} />;
}
