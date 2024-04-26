import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";

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
            <h1 className="text-4xl">About Us</h1>
            <p className="mt-5 lg:w-4/5">
                We at KIAAN Career Point, where we believe in Fire Up Your Potential. Our
                institution is founded on the pillars of Knowledge Integration, Academic
                Advancement, and Nurturing—a philosophy that resonates through our dedicated
                team of directors:  Mrs Swati Suyog Meshram and Mr Sugat Wankhede.
            </p>
            <p className="mt-5 lg:w-4/5">    
                At KIAAN, we are committed to providing an educational experience that
                transcends traditional learning. Our approach to Knowledge Integration ensures
                that students receive a holistic understanding of their subjects, connecting various
                concepts and disciplines to form a robust knowledge base. We recognize the
                uniqueness of each learner, which is why Individualized Instruction is at the core of
                our teaching methodology. Tailored to the individual strengths, weaknesses, and
                learning styles, our instruction guarantees that every student is equipped with the
                necessary support to excel.
            </p>

            {/* Director's section*/}

            <div className="flex flex-col md:flex-row mt-16 justify-center items-center md:justify-normal">
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
                <div className="artboard artboard-demo phone h-24 mt-5">
                    {/* <img src="/images/swati.jpg" alt="Mrs Swati Suyog Meshram" /> */}
                    <p>Dummy image box</p>
                </div>
            </div>

            {/* Mission Section */}

            <div className="flex flex-col md:flex-row mt-16 justify-center items-center md:justify-normal">
                <div>
                    <h2 className="text-2xl">Our Mission</h2>
                    <p className="mt-5 lg:w-4/5">
                        Our mission is to provide a transformative educational experience that
                        empowers students to achieve their full potential. We aim to foster a
                        community of lifelong learners who are equipped with the skills, knowledge,
                        and values to succeed in a rapidly changing world.
                    </p>
                </div>
                <div className="artboard artboard-demo phone h-24 mt-5">
                    {/* <img src="/images/mission.jpg" alt="Our Mission" /> */}
                    <p>Dummy image box</p>
                </div>
            </div>
        </div>
    );
}
