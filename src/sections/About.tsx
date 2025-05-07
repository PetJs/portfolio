import Button from "@/components/Button";
import { useState } from "react";
import Globe from "react-globe.gl";



const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('peterfagoroye76@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000)
    }
    return(
        <section className="sm:px-10 px-5 my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
                <div className="col-span-1 xl:row-span-3">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">I'm Fagoroye Peter</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">With 4 years of experience, I have honed my skills in Frontend development with a focus on animated 3D websites using React as a Framework. I have also dabble in Backend development with languages like C++ and Python.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">I specialize in Javascript/TypeScript with a focus on React ecosystems.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 6.5244, lng: 3.3792,
                                    text: "I'm here!",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">I work remotely across multiple timezones</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">I base in Lagos, Nigeria. I am available for both remote and onsite work </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3 ">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[226px] h-fit object-contain" />
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans text-center">Contact Me</p>
                            <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-white">peterfagoroye76@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;