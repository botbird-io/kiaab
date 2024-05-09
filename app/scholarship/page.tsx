import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";
import Image from "next/image";
import img from '@/public/Banner-100-percent-scholarship.jpg';
import ScholarshipForm from "@/components/ScholarshipForm";
export const metadata: Metadata = {
    title: "Scholarship",
    description: "Get 100% scholarship on your tuition fees at Kiaan Career Point. Enroll now and start your journey to success.",
    alternates: {
        canonical: "https://kiaanlearning.com/scholarship",
    },
    openGraph: {
        ...openGraph,
        images:[
            {
                url: "https://kiaanlearning.com/Banner-100-percent-%20scholarship.jpg",
                alt: "scholarship-banner",
            },
        ],
        url: "https://kiaanlearning.com/scholarship",
    },
};

export default function Scholarship() {
    return (<>
        <Image width={1200} height={630} priority src={img} alt="scholarship-banner" className="w-full md:aspect-[4] object-cover aspect-[1.5]"/>
        <div className="p-5 lg:p-10">
            <h1 className="font-bold text-3xl">Get 100% Scholarship</h1>
            <div className="flex flex-col lg:flex-row justify-around items-stretch my-10 ">
                <div className="lg:w-1/2">
                    <h2 className="font-bold text-2xl">Why Kiaan Career Point?</h2>
                    <p className="my-5">Kiaan Career Point is the best coaching institute in the region. We have a team of experienced faculty members who are dedicated to providing the best education to our students. We offer a wide range of courses for students preparing for various competitive exams. Our students have consistently performed well in various competitive exams and have secured top ranks.</p>
                    <h2 className="font-bold text-2xl">Why Scholarship?</h2>
                    <p className="my-5">We believe that every student should have access to quality education. That is why we are offering 100% scholarship on tuition fees to deserving students. This scholarship will help students who are financially disadvantaged to get the education they deserve. We want to give every student the opportunity to succeed and achieve their dreams.</p>
                    <h2 className="font-bold text-2xl">How to Apply?</h2>
                    <ol className="my-5 list-decimal list-inside">
                        <li>Fill the form with correct details and schedule an appointment.</li>
                        <li>Take the scholarship test at home during your booked slot, supervised by our executive.</li>
                        <li>Visit our office or Kiaan Career Point Campus.</li>
                        <li>Redeem your Scholarship Voucher.</li>
                    </ol>
                </div>
                <div className="flex flex-col mt-7 lg:mt-0 justify-around rounded-md px-3 min-h-[500px]">
                    <ScholarshipForm/>
                </div>
            </div>
        </div>
    </>
    );
}