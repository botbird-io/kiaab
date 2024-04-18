import ComingSoon from "@/components/ComingSoon";
import { Metadata } from "next";
import { openGraph } from "../../lib/metaData";

export const metadata: Metadata = { 
    title: "Contact",
    description: "Get in touch with KIAAN Career Point for any queries, feedback, or support. We are here to help you with all your educational needs.",
    alternates: {
        canonical: "https://kiaanlearning.com/contact",
    },
    openGraph: {
        ...openGraph,
        url: "https://kiaanlearning.com/contact",
    },
};
export default function Contact() {
    return (
        <div className="p-5 lg:p-10">
            <ComingSoon/>
        </div>
    );
}
