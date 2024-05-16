import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";
import Image from "next/image";
import swati from '@/public/Swati-Meshram-Director-KIAAN.webp';
import building from '@/public/KIAAN_Building_1.webp';
import emblem from '@/public/emblem_logo.svg';
export const metadata: Metadata = {
    title: "About Us",
    description: "KIAAN Career Point is founded on the pillars of Knowledge Integration, Academic Advancement, and Nurturing—a philosophy that resonates through our dedicated team of directors.",
    alternates: {
        canonical: "https://kiaanlearning.com/about",
    },
    openGraph: {
        ...openGraph,
        url: "https://kiaanlearning.com/about",
    },
};
export default function About() {
    return (
        <div className="p-5 lg:p-10">
            <h1 className="text-2xl md:text-center mt-12">About Us</h1>
            <div className="flex flex-col md:flex-row-reverse  justify-center items-center md:justify-normal">
                <div className="md:flex md:flex-col md:items-center">
                    <p className="mt-5 md:text-justify lg:w-4/5">
                        We at KIAAN Career Point, where we believe in Fire Up Your Potential. Our
                        institution is founded on the pillars of Knowledge Integration, Academic
                        Advancement, and Nurturing—a philosophy that resonates through our dedicated
                        team of directors:  Mrs Swati Suyog Meshram and Mr Sugat Wankhede.
                    </p>
                    <p className="mt-5 md:text-justify lg:w-4/5">    
                        At KIAAN, we are committed to providing an educational experience that
                        transcends traditional learning. Our approach to Knowledge Integration ensures
                        that students receive a holistic understanding of their subjects, connecting various
                        concepts and disciplines to form a robust knowledge base. We recognize the
                        uniqueness of each learner, which is why Individualized Instruction is at the core of
                        our teaching methodology. Tailored to the individual strengths, weaknesses, and
                        learning styles, our instruction guarantees that every student is equipped with the
                        necessary support to excel.
                    </p>
                </div>
                <div className="mt-5 md:mt-0 p-10 lg:p-0 lg:ml-7 lg:-mr-7">
                    <Image src={emblem} width={900} height={900} alt="Kiaan emblem logo" className="rounded-sm"/>
                </div>
            </div>

            {/* Director's section*/}

            <div className="flex flex-col md:flex-row mt-16 justify-center items-center md:justify-start">
                <div>
                    <h2 className="text-2xl">Director&apos;s Note</h2>
                    <p className="mt-5 lg:w-4/5">
                        <strong>Mrs Swati Suyog Meshram</strong> is a passionate educator with over 15 years of experience in the field of
                        education. She holds a Master&apos;s degree in Mathematics and a Bachelor&apos;s degree in
                        Education. Her expertise lies in creating innovative teaching methodologies that
                        cater to the individual needs of students. Her commitment to academic excellence
                        and student welfare is the driving force behind KIAAN Career Point.
                    </p>
                </div>
                <div className="mt-5 md:mt-0 p-3 md:p-0" >
                    {/* <img src="/images/swati.jpg" alt="Mrs Swati Suyog Meshram" /> */}
                    <Image src={swati} width={900} height={900} alt="Director Swati Suyog Meshram" className="rounded-sm"/>
                </div>
            </div>

            {/* Mission Section */}

            <div className="flex flex-col md:flex-row-reverse mt-16 justify-center items-center md:justify-normal">
                <div className="md:flex md:flex-col md:items-end">
                        <h2 className="text-2xl md:text-end">Our Mission</h2>
                        <p className="mt-5 md:text-end lg:w-4/5">
                            Our mission is to provide a transformative educational experience that
                            empowers students to achieve their full potential. We aim to foster a
                            community of lifelong learners who are equipped with the skills, knowledge,
                            and values to succeed in a rapidly changing world.
                        </p>
                        <h2 className="text-2xl mt-5 md:text-end">Our Vision</h2>
                        <p className="mt-5 md:text-end lg:w-4/5">
                            We envision KIAAN Career Point
                            as a beacon of academic success, where
                            students are empowered to pursue their
                            dreams with confidence and make a positive
                            impact on the world.
                        </p>

                </div>
                <div className=" mt-5 md:mt-0 p-3 md:p-0">
                    <Image src={building} width={900} height={900} alt="KIAAN Building" className="rounded-sm"/>
                </div>
            </div>
        </div>
    );
}
