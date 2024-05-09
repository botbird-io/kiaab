import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";
import Image from "next/image";
import img from '@/public/Banner-100-percent- scholarship.jpg';
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
                url: "https://kiaanlearning.com/Flexible-Courses-BG.webp",
                alt: "scholarship-banner",
            },
        ],
        url: "https://kiaanlearning.com/scholarship",
    },
};

export default function Scholarship() {
    return (<>
        <Image width={1200} height={630} priority src={img} alt="scholarship-banner" className="w-full aspect-[4]"/>
        <div className="p-5 lg:p-10 ">
            <h1 className="font-bold text-3xl">Get 100% Scholarship</h1>
            <div>
                
            </div>
        </div>
    </>
    );
}