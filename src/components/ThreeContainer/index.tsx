import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import sceneModel from './just_a_girl/scene.gltf';

function ThreeContainer() {
  const defaultStyle = {
    height: "60vh",
    width: "60vw",
    backgroundColor: "transparent",
  };
  const isContainerRunning = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isContainerRunning.current && containerRef.current) {
      isContainerRunning.current = true;
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const loader = new GLTFLoader();
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75, // 视野角度
        containerWidth / containerHeight, //宽高比
        0.1, // 近裁剪面
        1000 // 远裁剪面
      );
      // 生成渲染器
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(containerWidth * 0.9995, containerHeight * 0.9995);
      containerRef.current.appendChild(renderer.domElement);
      loadModel(loader, scene);
      animate(isContainerRunning, camera, renderer, scene);

      function animate(runningFlag, camera, renderer, scene) {
        if (runningFlag.current) {
          requestAnimationFrame(() =>
            animate(runningFlag, camera, renderer, scene)
          );

          const radius = 140;
          const angle = Date.now() * 0.0005;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          camera.position.set(x, 70, z);
          camera.lookAt(0, 50, 0);

          renderer.render(scene, camera);
        }
      }

      function loadModel(loader, scene) {
        loader.load(
          sceneModel,
          function (gltf) {
            console.log('控制台查看加载gltf文件返回的对象结构',gltf);
            
            scene.add(gltf.scene);
          },
          // called while loading is progressing
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          // called when loading has errors
          function (error) {
            console.log("An error happened");
          }
        );
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id="container"
      style={{ ...defaultStyle  }}
    ></div>
  );
}

export default ThreeContainer;

