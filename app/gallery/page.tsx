import ComingSoon from "@/components/ComingSoon";
import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Explore the gallery of Kiaan Career Point and get a glimpse of our facilities, events, and achievements.",
    alternates: {
        canonical: "https://kiaanlearning.com/gallery",
    },
    openGraph: {
        ...openGraph,
        url: "https://kiaanlearning.com/gallery",
    },
};

export default function Gallery() {
    return (
        <div className="p-5 lg:p-10">
            <ComingSoon/>
        </div>
    );
}