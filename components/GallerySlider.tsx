'use client'
import React, { MutableRefObject } from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
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

export default function GallerySlider({images}:{images: string[]}) {
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
      <div ref={sliderRef} className="keen-slider h-[300px] lg:h-[500px] shadow-lg bg-gradient-to-bl from-[#fdfcfb] to-[#e2d1c3]">
        {
            images.map((item,index) => (
                <div key={item} className={`keen-slider__slide number-slide${index+1}`}>
                    <Image quality={100} src={`/gallery/${item}`} alt={item.split('.')[0]} fill className="w-full h-full rounded-t object-contain"/>
                </div>
            ))
        }
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail hidden md:block">
        {
            images.map((item,index) => (
                <div key={item} className={`keen-slider__slide number-slide${index+1} hidden md:block`}>
                    <Image quality={100} src={`/gallery/${item}`} alt={item.split('.')[0]} width={500} height={500} className="w-full h-full rounded-t object-cover"/>
                </div>
            ))
        }
      </div>
    </div>
  )
}
