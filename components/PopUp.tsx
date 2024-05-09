'use client'

import { useEffect } from "react"
import Image from 'next/image'
import { useGlobalContext } from "@/lib/ContextApi";
export default function PopUp() {
    const {state,setState} = useGlobalContext();
    useEffect(() => {
        let id:NodeJS.Timeout;
        if(state.showModal){
         id = setTimeout(() => {
            const modal = document.getElementById('my_modal') as HTMLDialogElement;
            modal.showModal();
            setState({showModal:false});
        }
        , 3000);
        }
        return () => {
            clearTimeout(id);
        }
    },[setState,state.showModal])
    return(
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle  absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col items-center">
                        <Image 
                            alt="Banner"
                            src="/pop_up.jpg"
                            width={300}
                            height={300}
                            className="aspect-[0.7072] drop-shadow-md"
                        />
                        <a aria-label="Chat on WhatsApp" href="https://wa.me/919049079674?text=Hi!%20I want%20to%20learn%20more%20about%20your%20classes.%20Can%20you%20tell%20me%20what%20subjects%20you%20teach%20and%20when%20the%20classes%20are?%20Thanks!" target='_blank' className="btn btn-primary mt-4">Contact Now</a>
                    </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                {/* if there is a button in form, it will close the modal */}
                <button></button>
            </form>
        </dialog>
    )
}