'use client'
import React, { MutableRefObject } from "react"
// import "./styles.css"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
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
        src: './gallery/suyog sir 1.jpg',
    },
    {
        alt : 'Educational Picnic',
        src: './gallery/Educational Picnic.jpg',
    },
    {
        alt : 'suyog',
        src: './gallery/suyog sir 2.jpg',
    },
    {
        alt : 'suyog',
        src:   './gallery/suyog sir 3.jpg',
    },
    {
        alt : 'suyog',
        src: './gallery/suyog sir 4.jpg',
    },
    {
        alt : 'suyog',
        src: './gallery/Suyog sir 5.png',
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
    <div className="mt-5 p-10">
      <div ref={sliderRef} className="keen-slider lg:h-[500px] shadow-lg">
        {
            list.map((item,index) => (
                <div key={index} className={`keen-slider__slide number-slide${index+1}`}>
                    <img src={item.src} alt={item.alt}  className="w-full lg:h-[500px] rounded-t object-cover"/>
                </div>
            ))
        }
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {
            list.map((item,index) => (
                <div key={index} className={`keen-slider__slide number-slide${index+1}`}>
                    <img src={item.src} alt={item.alt} className="w-full h-full rounded-t object-cover"/>
                </div>
            ))
        }
      </div>
    </div>
  )
}
