import Image from "next/image";
import Link from "next/link";
export const runtime = 'edge' || 'nodejs'

const courses = [
  {
    title : 'XI & XII Science (CBSE & State)',
    description: 'Science XI & XII program: Igniting creativity, competitiveness, and divergent aptitude.',
    image: ''
  },
  {
    title : 'NEET/AIIMS',
    description: '',
    image: ''
  },
  {
    title : 'IIT-JEE (Mains & Advanced)',
    description: '',
    image: ''
  },
  {
    title : 'MHT-CET (Engineering & Pharmacy)',
    description: '',
    image: ''
  }
]
export default function Home() {
  return (<>
    <div className="artboard artboard-demo phone-6 !w-full !h-[350px]">
      Banner
    </div>

    {/* About Us section */}

    <div className="p-10 lg:px-14">
      <h2 className="text-2xl font-bold">About Us</h2>
      <div className="mt-4 grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-evenly ">
          <p className="text-justify">
            KIAAN Career Point is an innovative educational institution that believes in unlocking the true potential of its students. Their approach is built on the pillars of Knowledge Integration, Academic Advancement, and Nurturing, which is embodied by a team of passionate directors. They provide an educational experience that goes beyond conventional learning by integrating knowledge and tailoring their instruction to each student's unique strengths, weaknesses, and learning styles. KIAAN Career Point is committed to helping students develop a comprehensive understanding of their subjects and connect different concepts and disciplines to form a robust knowledge base.
          </p>
          <div className="link text-secondary">Learn More..</div>
        </div>
        {/* <div className="artboard artboard-demo phone-6 !w-[500px] !h-[300px]"> */}
        <Image src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg" alt="About Us" width={500} height={300} className="mt-4 lg:ml-4" />
        {/* </div> */}
      </div>
    </div>

    {/* <div className="divider"/> */}
    
    {/* Courses Section */}

    <div className="bg-[url('/Flexible-Courses-BG.jpg')] mt-10 h-80 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-center text-white shadow-sm">Flexible Courses</h2>
      <p className="px-32 text-center text-slate-50 shadow-sm">Our goal is to help students enjoy learning and prepare them for achieving greater heights. Our teaching methodology is designed to focus on conceptual learning and cater to individual needs.</p>
    </div>
    <div className="flex flex-wrap">
      {
        courses.map((course,index) => (
          <div key={index} className="px-10 lg:px-14 -mt-20">
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure><Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={course.title} width={300} height={0} style={{ width: '100%', height: 'auto' }}/></figure>
              <div className="card-body">
                <h3 className="card-title">{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-actions justify-end">
                  <Link href={'/courses'} className="link"> Learn More </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </>
  );
}
