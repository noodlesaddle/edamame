//@ts-nocheck
"use client";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import React, { useRef, useEffect, useState } from "react";

const CanvasComponent = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const SHADOW_MAP_WIDTH = 2048,
      SHADOW_MAP_HEIGHT = 1024;
    const FLOOR = -250;
    const ANIMATION_GROUPS = 10;

    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;

    const NEAR = 5,
      FAR = 3000;

    let camera, scene, renderer;

    let morph, mixer;

    const morphs = [],
      animGroups = [];

    const clock = new THREE.Clock();

    const container = mountRef.current;

    // Loading Manager
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onStart = () => {
      console.log("Loading started");
    };
    loadingManager.onLoad = () => {
      console.log("Loading complete");
      setLoading(false);
    };
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log(
        `Loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`
      );
    };
    loadingManager.onError = (url) => {
      console.log(`There was an error loading ${url}`);
    };

    // CAMERA
    camera = new THREE.PerspectiveCamera(
      24,
      SCREEN_WIDTH / SCREEN_HEIGHT,
      NEAR,
      FAR
    );
    camera.position.set(0, 200, 2500); // Adjust camera position to look from the side

    // SCENE
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0); // Set background color to off-white
    scene.fog = new THREE.Fog(0xf0f0f0, 2000, FAR); // Make fog lighter

    // LIGHTS
    const ambient = new THREE.AmbientLight(0xffffff, 2); // Increase ambient light intensity
    scene.add(ambient);

    const light1 = new THREE.DirectionalLight(0xffffff, 3);
    light1.position.set(0, 1500, 1000);
    light1.castShadow = true;
    light1.shadow.camera.top = 2000;
    light1.shadow.camera.bottom = -2000;
    light1.shadow.camera.left = -2000;
    light1.shadow.camera.right = 2000;
    light1.shadow.camera.near = 1200;
    light1.shadow.camera.far = 2500;
    light1.shadow.bias = 0.0001;
    light1.shadow.mapSize.width = SHADOW_MAP_WIDTH;
    light1.shadow.mapSize.height = SHADOW_MAP_HEIGHT;
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.5);
    light2.position.set(-1000, 1500, -1000);
    light2.castShadow = true;
    scene.add(light2);

    // Add a bright light on the left side
    const brightLight = new THREE.DirectionalLight(0xffffff, 5);
    brightLight.position.set(-2000, 500, 0); // Position the light on the left side
    brightLight.castShadow = true;
    scene.add(brightLight);

    createScene();

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setAnimationLoop(animate);
    container.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize);

    function onWindowResize() {
      SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;

      camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
      camera.updateProjectionMatrix();

      renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    }

    function createScene() {
      // GROUND
      const geometry = new THREE.PlaneGeometry(100, 100);
      const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xf0f0f0 }); // Set ground color to off-white

      const ground = new THREE.Mesh(geometry, planeMaterial);
      ground.position.set(0, FLOOR, 0);
      ground.rotation.x = -Math.PI / 2;
      ground.scale.set(100, 100, 100);
      ground.castShadow = false;
      ground.receiveShadow = true;
      scene.add(ground);

      mixer = new THREE.AnimationMixer(scene);

      for (let i = 0; i !== ANIMATION_GROUPS; ++i) {
        const group = new THREE.AnimationObjectGroup();
        animGroups.push(group);
      }

      // MORPHS
      function addMorph(
        mesh,
        clip,
        speed,
        duration,
        x,
        y,
        z,
        color,
        massOptimization
      ) {
        mesh = mesh.clone();
        mesh.material = mesh.material.clone();
        mesh.material.color.set(color); // Set the color of the horse

        mesh.speed = speed;

        if (massOptimization) {
          const index = Math.floor(Math.random() * ANIMATION_GROUPS),
            animGroup = animGroups[index];

          animGroup.add(mesh);

          if (!mixer.existingAction(clip, animGroup)) {
            const randomness = 0.6 * Math.random() - 0.3;
            const phase = (index + randomness) / ANIMATION_GROUPS;

            mixer
              .clipAction(clip, animGroup)
              .setDuration(duration)
              .startAt(-duration * phase)
              .play();
          }
        } else {
          mixer
            .clipAction(clip, mesh)
            .setDuration(duration)
            .startAt(-duration * Math.random())
            .play();
        }

        mesh.position.set(x, y, z);
        mesh.rotation.y = -Math.PI / 2; // Change direction to east
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        morphs.push(mesh);
      }

      const gltfLoader = new GLTFLoader(loadingManager);
      gltfLoader.load(
        "https://threejs.org/examples/models/gltf/Horse.glb",
        function (gltf) {
          const mesh = gltf.scene.children[0];
          const clip = gltf.animations[0];

          const colors = [
            0x8b4513, // SaddleBrown
            0xa0522d, // Sienna
            0xd2b48c, // Tan
            0x000000, // Black
            0x808080, // Gray
            0xffffff, // White
          ]; // Array of natural horse colors

          for (let i = -300; i < 301; i += 10) {
            const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
            addMorph(
              mesh,
              clip,
              550,
              1,
              100 - Math.random() * 2000,
              FLOOR,
              i,
              color,
              true
            );
          }
        }
      );
    }

    function animate() {
      render();
    }

    function render() {
      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      for (let i = 0; i < morphs.length; i++) {
        morph = morphs[i];
        morph.position.x -= morph.speed * delta; // Change direction to east

        if (morph.position.x < -2000) {
          morph.position.x = 3000 + Math.random() * 1000;
        }
      }

      camera.lookAt(scene.position); // Look at the scene from the side

      renderer.clear();
      renderer.render(scene, camera);
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      ref={mountRef}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
          }}
        >
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default CanvasComponent;
