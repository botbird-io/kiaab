'use client'
import React, { MutableRefObject } from "react"
// import "./styles.css"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from '@/public/gallery/suyog-sir-1.jpg'
import img2 from '@/public/gallery/Educational-Picnic.jpg'
import img3 from '@/public/gallery/suyog-sir-2.jpg'
import img4 from '@/public/gallery/suyog-sir-3.jpg'
import img5 from '@/public/gallery/suyog-sir-4.jpg'
import img6 from '@/public/gallery/suyog-sir-5.png'
import img7 from '@/public/gallery/Parents_Meeting_1.jpg'
import img8 from '@/public/gallery/Cultural_Activity_1.jpg'
import img9 from '@/public/gallery/Cultural_Activity_2.jpg'
import img10 from '@/public/gallery/Freshers-Party_2.jpg'
import img11 from '@/public/gallery/Freshers-Party_2023.jpg'
import Image from 'next/image'
function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

const list = [
    {
        alt : 'suyog',
        src: img1,
    },
    {
        alt : 'Educational Picnic',
        src: img2,
    },
    {
        alt : 'suyog',
        src: img3,
    },
    {
        alt : 'suyog',
        src:   img4,
    },
    {
        alt : 'suyog',
        src: img5,
    },
    {
        alt : 'suyog',
        src: img6,
    },
    {
        alt : 'Parents Meeting',
        src: img7,
    },
    {
        alt : 'Cultural Activity',
        src: img8,
    },
    {
        alt : 'Cultural Activity',
        src: img9,
    },
    {
        alt : 'Freshers Party',
        src: img10,
    },
    {
        alt : 'Freshers Party',
        src: img11,
    },
]

export default function GallerySlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="mt-5 md:p-10">
      <div ref={sliderRef} className="keen-slider h-[300px] lg:h-[500px] shadow-lg">
        {
            list.map((item,index) => (
                <div key={index} className={`keen-slider__slide number-slide${index+1}`}>
                    <Image src={item.src} alt={item.alt} fill   className="w-full h-full rounded-t object-cover"/>
                </div>
            ))
        }
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail hidden md:block">
        {
            list.map((item,index) => (
                <div key={index} className={`keen-slider__slide number-slide${index+1} hidden md:block`}>
                    <Image quality={100} src={item.src} alt={item.alt} width={500} height={500} className="w-full h-full rounded-t object-cover"/>
                </div>
            ))
        }
      </div>
    </div>
  )
}
