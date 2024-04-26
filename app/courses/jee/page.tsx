import { Metadata } from "next";
import { openGraph } from "../../../lib/metaData";

export const metadata : Metadata = {
    title : 'IIT-JEE (Mains & Advanced)',
    description: 'Engineer your success with our IIT-JEE (Mains & Advanced) Program, blending practical coaching and simulated mock tests.',
    alternates: {
        canonical: 'https://kiaanlearning.com/courses/jee'
    },
    openGraph: {
        ...openGraph,
        url: 'https://kiaanlearning.com/courses/jee',
    }
};
export default function JeePage() {
    return (
        <div className="p-5 lg:p-10">
            <h1 className="text-4xl">IIT-JEE (Mains & Advanced)</h1>
            <p className="mt-5 lg:w-4/5">Welcome to KIAAN Career Point&apos;s IIT-JEE (Mains & Advanced) Two Years Program, where we pave the path to engineering success with precision and dedication. Designed specifically for class 11 students, our comprehensive program encompasses all essential aspects necessary to excel in the highly competitive IIT-JEE examinations.</p>

            {/* Program Highlight section */}
            <h2 className="text-2xl mt-6">Program Highlights</h2>
            <p className="mt-5 lg:w-4/5">
                Our IIT-JEE (Mains & Advanced) Two Years Program stands out with personalized coaching from renowned faculty, cutting-edge facilities, and a comprehensive question bank for unparalleled exam preparedness. Through simulated mock tests and innovative teaching methods, we ensure each student receives the individual attention and support they need to excel in their engineering aspirations.
            </p>
            <div className="mt-5 px-5">
                    {/* Academic Support */}
                <h3 className="text-xl mt-6">Academic Support</h3>
                <ul className="mt-3">
                    <li>Simulated Mock Tests: Regular practice tests for each chapter to assess student progress and exam readiness.</li>
                    <li>Practical Coaching: Hands-on learning experiences tailored to individual student needs for a deeper understanding of concepts.</li>
                    <li>Comprehensive Question Bank: Extensive practice material available to students to enhance exam readiness and confidence.</li>
                </ul>
                    
                    {/* Infrastructure */}
                <h3 className="text-xl mt-6 text-end">Infrastructure</h3>
                <ul className="mt-3 text-end">
                    <li>Exceptional Facilities: State-of-the-art infrastructure equipped with modern technology for an optimal learning environment.</li>
                </ul>
                    
                    {/* Student Engagement */}
                <h3 className="text-xl mt-6">Student Engagement</h3>
                <ul className="mt-3">
                    <li>Personalized Attention: Renowned faculty members offer individualized support and guidance to every student, catering to their unique needs.</li>
                    <li>Parental Involvement: Regular interactions with parents to track student progress and ensure collaborative support.</li>
                    <li>Motivational Programs: Ongoing motivational sessions conducted by experienced professionals to keep students inspired and focused.</li>
                    <li>Stress-Free Learning: Balanced approach to learning with celebrations and sports activities to promote a healthy learning environment.</li>
                </ul>
            </div>            
        </div>
    );
}
