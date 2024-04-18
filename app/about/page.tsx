import ParticleBG from "@/components/ParticleBG"
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
        </div>
    );
}
