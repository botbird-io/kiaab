import { Metadata } from "next";
import Image from "next/image";
import { openGraph } from "../../lib/metaData";
import { courses } from "../page";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Courses",
    description: "Explore the wide range of courses offered by Kiaan Career Point and take your academic journey to new heights.",
    alternates: {
        canonical: "https://kiaanlearning.com/courses",
    },
    openGraph: {
        ...openGraph,
        url: "https://kiaanlearning.com/courses",
    },
};
export default function Courses() {
    return (
        <div className="p-5 lg:p-10">
            <h1 className="text-4xl">Courses</h1>
            {/* <ComingSoon/> */}
            
            <p className="mt-5 lg:w-4/5">
                At Kiaan Career Point, we offer a wide range of courses that cater to the diverse needs of our students. Our courses are designed to provide a comprehensive understanding of the subject matter, ensuring that students are well-equipped to excel in their academic pursuits. Whether you are looking to strengthen your foundation in a particular subject or prepare for competitive exams, we have a course that is tailored to your needs.
            </p>

            <p className="mt-5 lg:w-4/5">
                Explore our courses below to find the one that best suits your academic goals:
            </p>
            {/* Courses cards */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0 px-5 mt-10">
                {courses.map((course,index) => (
                    <div key={index} className="justify-self-center ">
                        <div className="card w-80 md:w-72 lg:w-64 bg-base-100 shadow-xl">
                        <div className="h-60 md:h-44">
                            <Image src={course.image} alt={course.title} placeholder="blur" width={300} height={100} className="w-full h-full rounded-t object-cover"/>
                        </div>
                        <div className="card-body h-60">
                            <h3 className="card-title">{course.title}</h3>
                            <p className="text-sm">{course.description}</p>
                            <div className="card-actions justify-center -mb-4">
                            <Link href={course.path || '/courses'} className="link text-secondary text-sm"> Learn More<span className="text-[0px]"> {`about ${course.title} Program`} </span> </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}