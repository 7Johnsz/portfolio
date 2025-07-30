import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function PixelOwl({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [vignetteOpacity, setVignetteOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHovering) return;
      
      e.preventDefault();
      
      const delta = e.deltaY * -0.001;
      setZoomLevel(prev => {
        const newZoom = Math.max(0.8, Math.min(2.5, prev + delta));
        const opacity = Math.max(0, (newZoom - 1) * 0.3);
        setVignetteOpacity(Math.min(opacity, 0.4));
        
        return newZoom;
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      className={`${className} voxel-dog-container`} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative',
        margin: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
        cursor: isHovering ? 'grab' : 'default'
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Canvas 
        camera={{ 
          position: [15, 8, 15],
          fov: 60 
        }}
        style={{ 
          width: '400px',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
        gl={{alpha: true, antialias: true}}
        shadows
      >
        <ambientLight intensity={0.6} color={0xffffff} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.7}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.2} color={0x6666ff} />
        <pointLight position={[0, -10, 0]} intensity={0.15} color={0xff6666} />
        
        <VoxelDogScene zoomLevel={zoomLevel} />
        
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
        
        <OrbitControls 
          target={[0, 0, 0]}
          autoRotate={true}
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
      
      {/* Vignette effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle, transparent 50%, rgba(0,0,0,${vignetteOpacity}) 85%)`,
          pointerEvents: 'none',
          borderRadius: 'inherit'
        }}
      />
    </div>
  );
}

function VoxelDogScene({ zoomLevel }: { zoomLevel: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const [loading, setLoading] = useState(true);
  const { camera } = useThree();

  useFrame((state) => {
    if (groupRef.current && !loading) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
      
      if (camera) {
        const baseDistance = 15;
        const targetDistance = baseDistance / zoomLevel;
        camera.position.setLength(targetDistance);
        camera.lookAt(0, 0, 0);
      }
    }
  });
  
  return (
    <group ref={groupRef}>
      <VoxelDogModel onLoad={() => setLoading(false)} />
    </group>
  );
}

function VoxelDogModel({ onLoad }: { onLoad: () => void }) {
  const { scene } = useGLTF('/models/voxel_dog.glb');
  const [modelLoaded, setModelLoaded] = useState(false);
  
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.needsUpdate = true;
          }
        }
      });
      
      setModelLoaded(true);
      onLoad();
    }
  }, [scene, onLoad]);
  
  if (!modelLoaded) {
    return null;
  }
  
  return (
    <primitive 
      object={scene.clone()} 
      position={[0, -3, 0]} 
      scale={[1.2, 1.2, 1.2]}
      rotation={[0, 0, 0]}
      castShadow
      receiveShadow
    />
  );
}
