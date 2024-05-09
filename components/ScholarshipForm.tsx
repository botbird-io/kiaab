'use client'
import {useState,useEffect, FormEvent, ChangeEvent} from 'react'
import { useToast } from './Toast';
type TformData = {
    "entry.2005620554": string,
    "entry.163769329": string,
    "entry.1045781291": string,
    "entry.1065046570": string,
    "entry.1166974658": string
}
export default function ScholarshipForm() {
    const [formData, setFormData] = useState<TformData>({
        "entry.2005620554": "",
        "entry.163769329": "",
        "entry.1045781291": "",
        "entry.1065046570": "",
        "entry.1166974658": "" 
    });
    const {showToast} = useToast();
    const handleInputData = (input:string) => (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        setFormData((prevState) => ({
            ...prevState,
            [input]: target.value,
        }));
    };
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        function createParams(){
            let str = ''
            let key : keyof TformData
            for( key in formData){
                str += `${key}=${formData[key]}&`
            }
            return str
        }
        const url = `https://docs.google.com/forms/u/0/d/1Tg6vwdRGMKS6Lfpv1lJwDfdgEY82dNpBQtE8fXBuTQ8/formResponse?${createParams()}`
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
            <h2 className="text-xl">Apply Now</h2>
            <label className="input text-slate-500 input-bordered flex items-center gap-2">
                Full Name
                <input onChange={handleInputData("entry.2005620554")} type="text" className="grow" required />
            </label>
            <label className="input input-bordered text-slate-500 flex items-center gap-2">
                Contact No.
                <input  onChange={handleInputData("entry.163769329")} type="number" className="grow" required />
            </label>
            <label className="input input-bordered text-slate-500 flex items-center gap-2">
                Email
                <input required onChange={handleInputData("entry.1045781291")} type="text" className="grow" />
            </label>
            <label className="input input-bordered text-slate-500 flex items-center gap-2">
                Whatsapp No.
                <input required onChange={handleInputData("entry.1166974658")} type="number" className="" />
            </label>
            
            <label className="form-control">
                <div className="label">
                    <span className="label-text text-slate-500">Residential Address</span>
                </div>
                <textarea required onChange={handleInputData("entry.1065046570")} className="textarea textarea-bordered h-24" placeholder="Enter detailed address"></textarea>
            </label>
            <input type="submit" className="btn btn-primary"/>
        </form>
    </>
}