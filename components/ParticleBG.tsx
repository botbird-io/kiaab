'use client'
import React, { useCallback } from 'react'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {Container,Opacity,ISourceOptions} from "@tsparticles/engine";

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
    const config :ISourceOptions = useMemo(()=>{
            return { 
                fullScreen: {
                    enable: false
                },
                backgroundMask: {
                    composite: "destination-out",
                    cover: {
                        color: {
                            value: "#fff"
                        },
                        opacity: 1
                    },
                    enable: false
                },
                background: {
                    // image: "url('/bg.webp')",
                    // position: '50% 50%',
                    // repeat: 'no-repeat',
                    // size: 'cover',
                    // opacity: 1
                },
                modes: {
                    trail: {
                        delay: 1,
                        pauseOnStop: false,
                        quantity: 1
                    },
                    attract: {
                        distance: 200,
                        duration: 0.4,
                        easing: 'ease-out-quad',
                        factor: 1,
                        maxSpeed: 50,
                        speed: 1
                    },
                    bounce: {
                        distance: 200
                    },
                    bubble: {
                        distance: 250,
                        duration: 2,
                        mix: false,
                        opacity: 0,
                        size: 0,
                        divs: {
                            distance: 200,
                            duration: 0.4,
                            mix: false,
                            selectors: {}
                        }
                    },
                    connect: {
                        distance: 80,
                        links: {
                            opacity: 0.5
                        },
                        radius: 60
                    },
                    grab: {
                        distance: 400,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 1
                        }
                    },
                    push: {
                        default: true,
                        groups: {},
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: 'ease-out-quad',
                        divs: {
                            distance: 200,
                            duration: 0.4,
                            factor: 100,
                            speed: 1,
                            maxSpeed: 50,
                            easing: 'ease-out-quad',
                            selectors: {}
                        }
                    },
                    slow: {
                        factor: 3,
                        radius: 200
                    },
                    light: {
                        area: {
                            gradient: {
                                start: {
                                    value: '#ffffff'
                                },
                                stop: {
                                    value: '#000000'
                                }
                            },
                            radius: 1000
                        },
                        shadow: {
                            color: {
                                value: '#000000'
                            },
                            length: 2000
                        }
                    }
                },
                particles: {
                    bounce: {
                        horizontal: {
                            value: 1
                        },
                        vertical: {
                            value: 1
                        }
                    },
                    collisions: {
                        absorb: {
                            speed: 2
                        },
                        bounce: {
                            horizontal: {
                                value: 1
                            },
                            vertical: {
                                value: 1
                            }
                        },
                        enable: false,
                        maxSpeed: 50,
                        mode: 'bounce',
                        overlap: {
                            enable: true,
                            retries: 0
                        }
                    },
                    color: {
                        value: '#ffffff',
                        animation: {
                            h: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            },
                            s: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            },
                            l: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            }
                        }
                    },
                    effect: {
                        close: true,
                        fill: true,
                    },
                    move: {
                        angle: {
                            offset: 0,
                            value: 90
                        },
                        attract: {
                            distance: 200,
                            enable: false,
                            rotate: {
                                x: 3000,
                                y: 3000
                            }
                        },
                        center: {
                            x: 50,
                            y: 50,
                            mode: 'percent',
                            radius: 0
                        },
                        decay: 0,
                        direction: 'none',
                        drift: 0,
                        enable: true,
                        gravity: {
                            acceleration: 9.81,
                            enable: false,
                            inverse: false,
                            maxSpeed: 50
                        },
                        path: {
                            clamp: true,
                            delay: {
                                value: 0
                            },
                            enable: false,
                            options: {}
                        },
                        outModes: {
                            default: 'out'
                        },
                        random: false,
                        size: false,
                        speed: 2,
                        spin: {
                            acceleration: 0,
                            enable: false
                        },
                        straight: false,
                        trail: {
                            enable: false,
                            length: 10,
                            fill: {}
                        },
                        vibrate: false,
                        warp: false
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 1920,
                            height: 1080
                        },
                        limit: {
                            mode: 'delete',
                            value: 0
                        },
                        value: 80
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 0.8
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 3,
                            decay: 0,
                            delay: 0,
                            sync: false,
                            mode: 'auto',
                            startValue: 'random',
                            destroy: 'none'
                        }
                    },
                    reduceDuplicates: false,
                    shadow: {
                        blur: 0,
                        color: {
                            value: '#000'
                        },
                        enable: false,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    },
                    shape: {
                        close: true,
                        fill: true,
                        type: 'circle'
                    },
                    size: {
                        value: {
                            min: 0.1,
                            max: 2.5
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 20,
                            decay: 0,
                            delay: 0,
                            sync: false,
                            mode: 'auto',
                            startValue: 'random',
                            destroy: 'none'
                        }
                    },
                    zIndex: {
                        value: 0,
                        opacityRate: 1,
                        sizeRate: 1,
                        velocityRate: 1
                    },
                    destroy: {
                        bounds: {},
                        mode: 'none',
                        split: {
                            count: 1,
                            factor: {
                                value: 3
                            },
                            rate: {
                                value: {
                                    min: 4,
                                    max: 9
                                }
                            },
                            sizeOffset: true
                        }
                    },
                    roll: {
                        darken: {
                            enable: false,
                            value: 0
                        },
                        enable: false,
                        enlighten: {
                            enable: false,
                            value: 0
                        },
                        mode: 'vertical',
                        speed: 25
                    },
                    tilt: {
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false
                        },
                        direction: 'clockwise',
                        enable: false
                    },
                    twinkle: {
                        lines: {
                            enable: true,
                            frequency: 0.005,
                            opacity: 1,
                            color: {
                                value: '#ff0000'
                            }
                        },
                        particles: {
                            enable: true,
                            frequency: 0.05,
                            opacity: 1,
                            color: {
                                value: '#ffff00'
                            }
                        }
                    },
                    wobble: {
                        distance: 5,
                        enable: false,
                        speed: {
                            angle: 50,
                            move: 10
                        }
                    },
                    life: {
                        count: 0,
                        delay: {
                            value: 0,
                            sync: false
                        },
                        duration: {
                            value: 0,
                            sync: false
                        }
                    },
                    rotate: {
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false
                        },
                        direction: 'clockwise',
                        path: false
                    },
                    orbit: {
                        animation: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: false
                        },
                        enable: false,
                        opacity: 1,
                        rotation: {
                            value: 45
                        },
                        width: 1
                    },
                    repulse: {
                        value: 0,
                        enabled: false,
                        distance: 1,
                        duration: 1,
                        factor: 1,
                        speed: 1
                    }
                },
                detectRetina: true,
                fpsLimit: 60,
            };
    },[]);
    return (
        <>
            <div className="w-full absolute aspect-custom ">
                {
                    init ? <Particles id="tsparticles" className='w-full aspect-[1] md:aspect-[2.448]' options={config} /> : <></>
                }
            </div>
            <div className="w-full aspect-custom" />
            
        </>
    )
}