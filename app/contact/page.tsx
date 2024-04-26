import { Metadata } from "next";
import { openGraph } from "@/lib/metaData";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
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
            <h1 className="text-[0px] ">Contact Us</h1>
            <div className="flex flex-col lg:flex-row justify-around items-stretch my-10 ">
                <ContactForm />
                <div className="flex flex-col justify-around rounded-md px-3 min-h-[500px]">
                    <Image src='./typo_logo.svg' width={100} height={100} className="w-1/2 block mx-auto" alt="typo logo"/>
                    <div className="flex items-start">
                        <PhoneIcon className="w-6"/>
                        <p className="ml-3 "><a href="tel:+918830479380">+91 88304 79380</a> | <a href="tel:+919049079674">+91 90490 79674</a></p>
                    </div>
                    <div className="flex items-start">
                        <EnvelopeIcon className="w-6"/>
                        <p className="ml-3 "><a href="mailto:info@kiaanlearning.com">info@kiaanlearning.com</a></p>
                    </div>
                    <div className="flex items-start">
                        <MapPinIcon className="w-6"/>
                        <p className="ml-3 max-w-72 md:max-w-80 lg:max-w-72">Plot No 2, Omkar Nagar Besa Road, Near Kala Maroti Temple, Jaywant Nagar, Nagpur - 27</p>
                    </div>
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
}
