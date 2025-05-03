import { Float, useGLTF } from '@react-three/drei'
import * as THREE from "three";

const ReactLogo = (props: any) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1} >
      <group position={[8, 8,0]} dispose={null} scale={0.5} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes['React-Logo_Material002_0'] as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;
