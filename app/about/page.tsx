import ParticleBG from "@/components/ParticleBG"
import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";

export const metadata: Metadata = {
    title: "About Us",
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
        <div>
            <h1>About</h1>
        </div>
    );
}
