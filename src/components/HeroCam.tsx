import { useFrame } from "@react-three/fiber";
import { ReactNode, useRef } from "react";
import { easing } from 'maath';
import * as THREE from "three";

interface Props{
    children: ReactNode;
    isMobile: boolean;
}

const HeroCam: React.FC<Props> = ({children, isMobile}) => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state, delta)=>{
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);

        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta)
        }
    })


    return (
        <group ref={groupRef} scale={isMobile ? 1.0 : 1.3}>{children}</group>
    )
}

export default HeroCam;