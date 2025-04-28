import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three'; // THREE is now used in the code below

const ThreeScene = ({ onLoaded }) => { // ThreeScene is now properly used
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  
  // Three.js objects - THREE is used here
  const scene = useRef(new THREE.Scene());
  const camera = useRef(null);
  const renderer = useRef(null);
  const cube = useRef(null);
  const animationId = useRef(null);

  const checkWebGL = useCallback(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  }, []);

  const handleResize = useCallback(() => {
    if (camera.current && renderer.current) {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  const animate = useCallback(() => {
    animationId.current = requestAnimationFrame(animate);
    if (cube.current) {
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
    }
    if (scene.current && camera.current && renderer.current) {
      renderer.current.render(scene.current, camera.current);
    }
  }, []);

  useEffect(() => {
    if (!checkWebGL()) {
      setWebglSupported(false);
      onLoaded();
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    const currentScene = scene.current;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00ff00,
      metalness: 0.5,
      roughness: 0.5
    });

    try {
      camera.current = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
      );
      camera.current.position.z = 5;

      const newRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: true
      });

      if (!newRenderer.getContext()) {
        throw new Error('WebGL context creation failed');
      }

      renderer.current = newRenderer;
      newRenderer.setSize(window.innerWidth, window.innerHeight);
      newRenderer.setClearColor(0x000000, 0);
      currentMount.appendChild(newRenderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      currentScene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 1);
      currentScene.add(directionalLight);

      cube.current = new THREE.Mesh(geometry, material);
      currentScene.add(cube.current);

      animate();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationId.current) cancelAnimationFrame(animationId.current);
        if (currentMount && renderer.current?.domElement) {
          currentMount.removeChild(renderer.current.domElement);
        }
        if (renderer.current) renderer.current.dispose();
        geometry.dispose();
        material.dispose();
        currentScene.remove(ambientLight);
        currentScene.remove(directionalLight);
        currentScene.remove(cube.current);
      };

    } catch (error) {
      console.error('WebGL Error:', error);
      setWebglSupported(false);
      onLoaded();
      geometry.dispose();
      material.dispose();
    }
  }, [onLoaded, animate, handleResize, checkWebGL]);

  if (!webglSupported) {
    return (
      <div style={{
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#222',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2>WebGL Not Available</h2>
        <p>This experience requires WebGL support which your browser doesn't have.</p>
        <div style={{ marginTop: '20px' }}>
          <a 
            href="https://get.webgl.org/" 
            target="_blank" 
            rel="noopener noreferrer" // Fixed security warning
            style={{
              color: '#4fc3f7',
              textDecoration: 'none',
              border: '1px solid #4fc3f7',
              padding: '10px 20px',
              borderRadius: '4px'
            }}
          >
            Learn How to Enable WebGL
          </a>
        </div>
      </div>
    );
  }

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeScene; 