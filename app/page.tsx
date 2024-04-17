import Image from "next/image";
import Link from "next/link";
import jee from '../public/jee.webp'
import books from '../public/books.webp'
import cet from '../public/cet.webp'
import stethoscope from '../public/stethoscope.webp'
import  ParticleBG  from "@/components/Particle";
// export const runtime = 'edge' || 'nodejs'
`
1. Elevate your aspirations in Science with our dynamic edutainment program, igniting creativity and competitive edge for State & CBSE XIth & XIIth students.
2. Embark on a transformative journey towards medical excellence with our NEET/AIIMS Two Year Program, meticulously tailored for class 11 students.
3. Engineer your success with our IIT-JEE (Mains & Advanced) Two Years Program, blending practical coaching and simulated mock tests for optimal preparation.
4. Gear up for engineering and pharmacy triumph with our MHT-CET Two Year Program, featuring expert faculty and comprehensive study materials tailored to excellence.
5. Dive into a world of opportunities with our holistic approach to education, fostering a stress-free learning environment and celebrating achievements in every sphere.`
const courses = [
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
    image: jee
  },
  {
    title : 'MHT-CET',
    description: 'Gear up for engineering and pharmacy triumph with our MHT-CET Program, featuring expert faculty and comprehensive study materials.',
    image: cet
  }
]
export default function Home() {
  return (<>
    <div className="artboard artboard-demo phone-6 !w-full !h-[350px]">
      <h1 className="text-3xl">Welcome to Kiaan Career Point</h1>
      <p>Banner to be inserted</p>
    </div>

    {/* <ParticleBG /> */}
    {/* About Us section */}

    <div className="p-10 lg:px-14">
      <h2 className="text-2xl font-bold">About Us</h2>
      <div className="mt-4 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-evenly ">
          <p className="text-justify">
            KIAAN Career Point is an innovative educational institution that believes in unlocking the true potential of its students. Their approach is built on the pillars of Knowledge Integration, Academic Advancement, and Nurturing, which is embodied by a team of passionate directors. They provide an educational experience that goes beyond conventional learning by integrating knowledge and tailoring their instruction to each student&apos;s unique strengths, weaknesses, and learning styles. KIAAN Career Point is committed to helping students develop a comprehensive understanding of their subjects and connect different concepts and disciplines to form a robust knowledge base.
          </p>
          <Link href={'/about'} className="link text-secondary">Learn More..</Link>
        </div>
        {/* <div className="artboard artboard-demo phone-6 !w-[500px] !h-[300px]"> */}
        <Image src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg" alt="About Us" width={500} height={300} className="m-auto mt-4 lg:mt-0 lg:ml-4" />
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
            <div className="card md:w-72 lg:w-64 bg-base-100 shadow-xl">
              <div className="h-60 md:h-44">
                <Image src={course.image} alt={course.title} placeholder="blur" width={300} height={100} className="w-full h-full rounded-t"/>
              </div>
              <div className="card-body h-60">
                <h3 className="card-title">{course.title}</h3>
                <p className="text-sm">{course.description}</p>
                <div className="card-actions justify-center -mb-4">
                  <Link href={'/courses'} className="link text-secondary text-sm"> Learn More <span className="hidden"> {`about ${course.title} Program`} </span> </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

    <div className="divider mt-10"/>

    {/* Facilities Section */}

    <div className="px-10 py-5 lg:px-14">
      <h2 className="text-2xl font-bold">Facilities</h2>
      <div className="mt-4 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <Image src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg" alt="About Us" width={500} height={300} className="m-auto mt-4 lg:mt-0 lg:ml-4" />
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
