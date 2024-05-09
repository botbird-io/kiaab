'use client'
import {useState,useEffect, FormEvent, ChangeEvent} from 'react'
import { useToast } from './Toast';
export default function ContactForm() {
    const [formData, setFormData] = useState({
        "entry.2096431628": "",
        "entry.1710581136": "",
        "entry.1840231382": "",
        "entry.1330762188": "No",
        "entry.1111823797": "" 
    });
    const {showToast} = useToast();
    const handleInputData = (input:string) => (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        if (input === "entry.1330762188") {
            if (target instanceof HTMLInputElement) {
                setFormData((prevState) => ({
                    ...prevState,
                    [input]: target.checked ? "Yes" : "No",
                }));
            }
            return;
        }
        setFormData((prevState) => ({
            ...prevState,
            [input]: target.value,
        }));
    };
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJdV0bzgR82Fj5G2GaGHwYmkZAz_ywlj88BhmBbGabFLSjlA/formResponse?entry.2096431628=${formData["entry.2096431628"]}&entry.1710581136=${formData["entry.1710581136"]}&entry.1840231382=${formData["entry.1840231382"]}&entry.1330762188=${formData["entry.1330762188"]}&entry.1111823797=${formData["entry.1111823797"]}`
        try{
            const res = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              mode: "no-cors",
            });
            if (res.ok) {
                showToast("Form Submitted Successfully","success")
            } else {
                showToast("Form Submission Failed","error")
            }
        }catch(e){
            showToast("Form Submission Failed","error")
        }
      }
    

    return <>
        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full min-h-[500px] mb-10">
            <h2 className="text-xl">Get in touch</h2>
            <label className="input text-slate-500 input-bordered flex items-center gap-2">
                Name
                <input onChange={handleInputData("entry.2096431628")} type="text" name="entry.2096431628" className="grow" required />
            </label>
            <label className="input input-bordered text-slate-500 flex items-center gap-2">
                Email
                <input onChange={handleInputData("entry.1710581136")} type="text" name="entry.1710581136" className="grow" required  />
            </label>
            <label className="input input-bordered text-slate-500 flex items-center gap-2">
                Contact No.
                <input onChange={handleInputData("entry.1840231382")} type="number" name="entry.1840231382" className="grow" required />
            </label>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Is this your WhatsApp Number?</span> 
                    <input onChange={handleInputData("entry.1330762188")} name="entry.1330762188" type="checkbox" className="checkbox" />
                </label>
            </div>
            <label className="form-control">
                <div className="label">
                    <span className="label-text text-slate-500">Message</span>
                </div>
                <textarea onChange={handleInputData("entry.1111823797")} name="entry.1111823797" className="textarea textarea-bordered h-24" placeholder="Enquire about anything"></textarea>
            </label>
            <input type="submit" className="btn btn-primary"/>
        </form>
    </>
}