'use client'
import React, { useCallback } from 'react'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {Container,Opacity} from "@tsparticles/engine";

const opacity = new Opacity();
export default function ParticleBG() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine)=>{
            await loadSlim(engine)
        }).then(()=>{
            setInit(true)
        })
    },[])
    const particleLoaded = useCallback((container: Container|undefined):Promise<void> => {
        console.log(container);
        return Promise.resolve();
    },[])
    const config = useMemo(()=>{
        return { 
            // fullScreen: {
            //     enable: true,
            //     zIndex: 0
            // },
            "background": {
                "color": {
                  "value": "#17182f"
                },
                "image": "",
                "position": "",
                "repeat": "",
                "size": "",
                "opacity": 1
            },
            particles: {
                number: {
                    value: 5
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                },
                // opacity: {
                //     value: 0.48927153781200905,
                //     random: false,
                //     animation: {
                //         enable: true,
                //         speed: 0.2,
                //         min: 0,
                //         sync: false
                //     }
                // },
                twinkle: {
                    particles: {
                        enable: true,
                        frequency: 0.5,
                        opacity: 1
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    animation: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    },
                    onclick: {
                        enable: false,
                        mode: "push"
                    },
                    resize: true
                },
                resize:{
                    delay:0.5,
                    enable:true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 83.91608391608392,
                        size: 1,
                        duration: 3,
                        opacity: 1,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        };
    },[]);
    return (
        <div className="bg-[#17182f] min-h-[300px] w-full absolute">
            {
                init ? <Particles id="tsparticles" particlesLoaded={particleLoaded} options={config}/> : <></>
            }
            {/* <Particles id="tsparticles" particlesLoaded={particleLoaded} options={config}/> */}
        </div>
    )
}