import Button from "@/components/Button";
import CanvasLoader from "@/components/CanvasLoader";
import Cube from "@/components/Cube";
import HackerRoom from "@/components/HackerRoom";
import HeroCam from "@/components/HeroCam";
import ReactLogo from "@/components/ReactLogo";
import Rings from "@/components/Rings";
import Target from "@/components/Target";
import { calculateSizes } from "@/constants";
import { PerspectiveCamera } from "@react-three/drei";
import {Canvas} from "@react-three/fiber"
// import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = ()=>{
    // const x = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10,
    //     }
    // } )

    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return(
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center fontgeneralsans ">Hi, I am Peter <span className=" ">👋</span></p>
                <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">Building Products and Services</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/* <Leva/> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCam isMobile={isMobile}>
                            <HackerRoom 
                                // scale={0.07} 
                                // position={[0, 0, 0]} 
                                // rotation={[0, -Math.PI / 2, 0]}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCam>
                        
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10,10,10]}  intensity={1.5}/>
                    </Suspense>
                </Canvas>
            </div>

            {/* Button */}
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
                <a href="#contact" className="w-fit">
                    <Button name="Lets's Work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}

export default Hero;