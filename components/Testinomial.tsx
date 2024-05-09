'use client'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import {StarIcon as StarFillIcon} from '@heroicons/react/24/solid'
import {StarIcon as StarOutlineIcon} from '@heroicons/react/24/outline'

const testinomial = [{
        name: 'Sanket Sapate',
        quote: `Kiaan Career Point truly transformed my approach to JEE preparation. The personalized attention and expert guidance helped me boost my confidence and achieve my dream score. Thank you, Kiaan Career Point!`,
        rating: 5,
        date : '2021-10-10'
    },{
        name: 'Chetan Nagre',
        quote: `"Enrolling my child at Kiaan Career Point for JEE and NEET prep was a game-changer. The dedicated faculty and structured curriculum have boosted my child's confidence and academic progress. Highly recommend Kiaan for parents seeking top-notch coaching!"`,
        rating: 4,
        date : '2021-10-10'
    },{
        name: 'Sarthak Kale',
        quote: `Choosing Kiaan Career Point for my 11th and 12th preparation was the best decision I made. The teachers here are not just educators but mentors who go above and beyond to ensure every student excels. Grateful for their support!`,
        rating: 4,
        date : '2021-10-10'
    },{
        name: 'Indranil Rahangdale',
        quote: `Kiaan Career Point's test series and mock exams were instrumental in my JEE success. The rigorous practice sessions and detailed feedback helped me identify my weaknesses and work on them effectively. Thank you, Kiaan Career Point, for guiding me towards success!`,
        rating: 5,
        date : '2021-10-10'
    },{
        name: 'Nayan Kale',
        quote: `Attending Kiaan Career Point was a game-changer for my NEET preparation. The faculty's in-depth knowledge, constant motivation, and regular doubt-clearing sessions were invaluable in helping me secure a top rank. Proud to be a part of the Kiaan family!`,
        rating: 4,
        date : '2021-10-10'
    }
]
export default function Testinomial() {   
    const [sliderRef,instanceRef] = useKeenSlider<HTMLDivElement>({
        breakpoints:{
            '(min-width: 1024px)': {
                slides: {
                origin: 'auto',
                perView: 1.5,
                spacing: 32,
                },
            }
        },
        loop: true,
        slides:{
            origin : 'center',
            perView: 1.25,
            spacing: 16,
        },
    })
 return <section className="">
  <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Don't just trust us...
        </h2>

        <p className="mt-4 text-gray-700">
          See what our students and parents have to say about their experience with our classes.
        </p>

        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
          <button
            aria-label="Previous slide"
            onClick={(e:any) =>
                e.stopPropagation() || 
                instanceRef.current?.prev()
            }
            id="keen-slider-previous-desktop" 
            className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={(e:any) =>
                e.stopPropagation() || 
                instanceRef.current?.next()
            }
            id="keen-slider-next-desktop"
            className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="-mx-6 lg:col-span-2 lg:mx-0">
        <div id="keen-slider" className="keen-slider" ref={sliderRef}>
          {
            testinomial.map((item, index) => {
                return <div key={index} className={`keen-slider__slide number-slide${index+1}`} >
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                {
                  Array(item.rating).fill(1).map((_,index)=>{
                      return <StarFillIcon key={index} className="h-5 w-5" />
                  })       
                  }
                {
                  Array(5-item.rating).fill(1).map((_,index)=>{
                      return <StarOutlineIcon key={index} className="h-5 w-5" />
                  })
                }

                </div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">{item.name}</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    {item.quote}
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {item.date}
              </footer>
            </blockquote>
          </div>})   
            }
        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-center gap-4 lg:hidden">
      <button
        aria-label="Previous slide"
        id="keen-slider-previous"
        onClick={(e:any) =>
            e.stopPropagation() || 
            instanceRef.current?.prev()
        }
        className="rounded-full border border-orange-600 p-4 text-orange-600 transition hover:bg-orange-600 hover:text-white"
      >
        <svg
          className="size-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        id="keen-slider-next"
        onClick={(e:any) =>
            e.stopPropagation() || 
            instanceRef.current?.next()
        }
        className="rounded-full border border-orange-600 p-4 text-orange-600 transition hover:bg-orange-600 hover:text-white"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  </div>
</section>
}