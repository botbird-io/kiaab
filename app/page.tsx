import Image from "next/image";
import Link from "next/link";
import jee from '../public/jee.webp'
import books from '../public/books.webp'
import cet from '../public/cet.webp'
import stethoscope from '../public/stethoscope.webp'
import  ParticleBG  from "@/components/ParticleBG";
import { title } from "process";
export const runtime = 'edge' || 'nodejs'
export const courses = [
  {
    title : 'XI & XII Science (CBSE & State)',
    description: 'Elevate your aspirations in Science with our dynamic edutainment program, igniting creativity and competitive edge.',
    image: books
  },
  {
    title : 'NEET/AIIMS',
    description: 'Embark on a transformative journey towards medical excellence with our NEET/AIIMS Program.',
    image: stethoscope
  },
  {
    title : 'IIT-JEE (Mains & Advanced)',
    description: 'Engineer your success with our IIT-JEE (Mains & Advanced) Program, blending practical coaching and simulated mock tests.',
    image: jee,
    path : '/courses/jee'
  },
  {
    title : 'MHT-CET',
    description: 'Gear up for engineering and pharmacy triumph with our MHT-CET Program, featuring expert faculty and comprehensive study materials.',
    image: cet
  }
]

export const metadata ={
  title: 'Home | Kiaan Career Point',
}
export default function Home() {

    return (<>
    {/* Welcome section */}

    <div className="w-full aspect-custom absolute flex items-center justify-around">
      <Image src={'/img/Bg5.webp'} fill alt="banner" className="transition-opacity aspect-custom duration-300 ease-in animate-opcity-0-100 object-cover -z-10" priority/>
      <h1 className="text-white text-3xl font-bold md:text:4xl lg:text-5xl px-5 md:pl-10">Welcome to Kiaan Career Point</h1>
      <Image src={'/HomePage.webp'} priority height={100} width={300} className="hidden md:block sm:w-1/4 lg:w-auto xl:w-1/4 self-end" alt="home"/>
    </div>
    <ParticleBG />
    {/* About Us section */}

    <div className="p-10 lg:px-14">
      <h2 className="text-2xl font-bold">About Kiaan</h2>
      <div className="mt-4 grid gap-5 grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-evenly ">
          <p className="text-justify">
            KIAAN Career Point is an innovative educational institution that believes in unlocking the true potential of our students. Our approach is built on the pillars of Knowledge Integration, Academic Advancement, and Nurturing, which is embodied by a team of passionate directors. We provide an educational experience that goes beyond conventional learning by integrating knowledge and tailoring their instruction to each student&apos;s unique strengths, weaknesses, and learning styles. KIAAN Career Point is committed to helping students develop a comprehensive understanding of their subjects and connect different concepts and disciplines to form a robust knowledge base.
          </p>
          <Link href={'/about'} className="link text-secondary">Go to About Section</Link>
        </div>
        {/* <div className="flex justify-center items-center "> */}
          <Image src="/building.webp" alt="About Us" width={500} height={300} className="m-auto mt-4 lg:mt-0 lg:ml-4 object-cover w-full h-full" />
        {/* </div> */}
      </div>
    </div>

    {/* <div className="divider"/> */}
    
    {/* Courses Section */}

    <div className="bg-[url('/Flexible-Courses-BG.webp')] bg-no-repeat bg-center bg-cover mt-10 h-80 flex flex-col justify-start items-center">
      <div className="h-16"/>
      <h2 className="text-2xl font-bold text-center text-white shadow-sm">Flexible Courses</h2>
      <p className="lg:px-32 px-5 text-center text-slate-50 shadow-sm">Our goal is to help students enjoy learning and prepare them for achieving greater heights. Our teaching methodology is designed to focus on conceptual learning and cater to individual needs.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0 px-5 -mt-16 md:-mt-28">
      {
        courses.map((course,index) => (
          <div key={index} className="justify-self-center ">
            <div className="card w-80 md:w-72 lg:w-64 bg-base-100 shadow-xl">
              <div className="h-60 md:h-44">
                <Image src={course.image} alt={course.title} placeholder="blur" width={300} height={100} className="w-full h-full rounded-t object-cover"/>
              </div>
              <div className="card-body h-60">
                <h3 className="card-title">{course.title}</h3>
                <p className="text-sm">{course.description}</p>
                <div className="card-actions justify-center -mb-4">
                  <Link href={course.path || '/courses'} className="link text-secondary text-sm">Learn More<span className="text-[0px]"> {`about ${course.title} Program`}</span> </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

    <div className="divider mt-16"/>

    {/* Facilities Section */}

    <div className="px-10 py-5 lg:px-14">
      <h2 className="text-2xl font-bold">Facilities</h2>
      <div className="mt-4 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <Image src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg" alt="About Us" width={500} height={300} className="m-auto mt-4 lg:mt-0 lg:ml-4 object-cover" />
        <div className="flex flex-col justify-evenly ">
          <p className="text-justify">
            Discover our state-of-the-art facilities designed to nurture academic excellence and foster an enriching learning environment.
          </p>
          <ul style={{listStyleType:'disc'}}>
            <li>Library</li>
            <li>Computer Lab</li>
            <li>Science Lab</li>
            <li>Smart Classrooms</li>
            <li>Hostel Facilities</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Call to Action section */}

    <div className="px-10 lg:px-14 py-16 pb-20">
      <p className="text-center text-lg">
        Unlock your potential and embark on a journey towards academic excellence. <span className="text-primary">Enroll today </span> and let&apos;s shape your future together!
      </p>
    </div>
  </>
  );
}
