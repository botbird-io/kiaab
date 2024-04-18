import ComingSoon from "@/components/ComingSoon";
import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";

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
            {/* <h1 className="text-4xl">Courses</h1> */}
            <ComingSoon/>
        </div>
    );
}