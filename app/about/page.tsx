import ParticleBG from "@/components/Particle"
import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";

export const metadata: Metadata = {
    title: "About Us",
    alternates: {
        canonical: "https://kiaanlearning.com/about",
    },
    openGraph: {
        ...openGraph,
        siteName: "About Us | Kiaan Career Point",
        url: "https://kiaanlearning.com/about",
    },
};
export default function About() {
    return (
        <div>
            <ParticleBG/>
            <h1>About</h1>
        </div>
    );
}
