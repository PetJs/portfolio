import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Target = (props:any) => {
    const targetRef = useRef<THREE.Mesh>(null!)
    const {scene} = useGLTF("/models.javascript.glb");

    useGSAP(()=> {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })


    return(
        <mesh {... props} ref={targetRef} rotation={[0, Math.PI/5, 0]} scale={1.5}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Target;