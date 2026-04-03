import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const BookMesh = ({
  position,
  rotation,
  color,
  speed = 1,
  floatIntensity = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  speed?: number;
  floatIntensity?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      rotation[1] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.15;
    groupRef.current.rotation.x =
      rotation[0] + Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.08;
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={floatIntensity}>
      <group ref={groupRef} position={position} rotation={rotation}>
        {/* Book body */}
        <RoundedBox args={[1, 1.4, 0.15]} radius={0.03} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </RoundedBox>
        {/* Spine */}
        <mesh position={[-0.52, 0, 0]}>
          <boxGeometry args={[0.06, 1.4, 0.18]} />
          <meshStandardMaterial
            color={color}
            roughness={0.5}
            metalness={0.2}
          />
        </mesh>
        {/* Pages */}
        <mesh position={[0.02, 0, 0]}>
          <boxGeometry args={[0.9, 1.32, 0.12]} />
          <meshStandardMaterial color="#e8e4df" roughness={0.8} metalness={0} />
        </mesh>
        {/* Cover accent line */}
        <mesh position={[0, -0.4, 0.078]}>
          <boxGeometry args={[0.6, 0.02, 0.001]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.2}
            metalness={0.5}
            opacity={0.4}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
};

const Particles = ({ count = 40 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#4dd8a5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const GlowOrb = ({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(
      scale + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    );
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.15}
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </mesh>
  );
};

const FloatingBooks3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-3, 2, 4]} intensity={0.3} color="#4dd8a5" />
        <pointLight position={[0, 3, 3]} intensity={0.5} color="#7c6dd8" />

        {/* Floating books */}
        <BookMesh
          position={[3.5, 1.2, -1]}
          rotation={[0.3, -0.5, 0.1]}
          color="#1a6b5a"
          speed={1.2}
          floatIntensity={1.5}
        />
        <BookMesh
          position={[4.2, -1, 0.5]}
          rotation={[-0.2, 0.8, -0.15]}
          color="#2a4a7f"
          speed={0.8}
          floatIntensity={1}
        />
        <BookMesh
          position={[2.5, 0, 1]}
          rotation={[0.1, -0.3, 0.2]}
          color="#6b3fa0"
          speed={1}
          floatIntensity={1.2}
        />
        <BookMesh
          position={[-3, 1.5, -0.5]}
          rotation={[0.4, 0.6, -0.1]}
          color="#0d8a6f"
          speed={0.9}
          floatIntensity={0.8}
        />
        <BookMesh
          position={[-2.5, -1.2, 0]}
          rotation={[-0.15, -0.4, 0.25]}
          color="#3d5a80"
          speed={1.1}
          floatIntensity={1.3}
        />

        {/* Glow orbs */}
        <GlowOrb position={[3, 0, -2]} color="#4dd8a5" scale={1.5} />
        <GlowOrb position={[-3, 1, -1]} color="#7c6dd8" scale={1.2} />
        <GlowOrb position={[0, -2, -1]} color="#4da5d8" scale={1} />

        {/* Particles */}
        <Particles count={60} />
      </Canvas>
    </div>
  );
};

export default FloatingBooks3D;
