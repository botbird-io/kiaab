'use client'
import { FormEvent, useState, ChangeEvent, useRef } from "react";
import { useToast } from "./Toast";

const obj = {
    name :"entry.249829693",
    contact : "entry.228806034",
    whatsapp : "entry.1786712029",
    address : "entry.1742583051",
}
export default function DownloadBrochureForm() {
    const ref = useRef<HTMLIFrameElement>(null);
    const [formData, setFormData] = useState({
        [obj.name]: "",
        [obj.contact]: "",
        [obj.whatsapp]: "No",
        [obj.address]: ""
    });
    const {showToast} = useToast();
    const handleInputData = (input:string) => (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        if (input === obj.whatsapp) {
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
        if(!formData[obj.name] || !formData[obj.contact] || !formData[obj.address]){
            showToast("Please fill all the details","error")
            return;
        }
        const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSevn85D8mDsOJbjr4fCSSvFSW4r4M3F19f8KGRav6V5go1Vwg/formResponse?${obj.name}=${formData[obj.name]}&${obj.contact}=${formData[obj.contact]}&${obj.whatsapp}=${formData[obj.whatsapp]}&${obj.address}=${formData[obj.address]}`
        try{
            const res = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              mode: "no-cors",
            });
            const modal = document?.getElementById('brochure_pop') as HTMLDialogElement;
            if (modal) {
                modal.close();
            }
            if(ref.current){
                ref.current.src = `https://drive.google.com/uc?export=download&id=1yrtFwhJVW7CybUN8wahKIWNQWyp6wdP9`
            }
            showToast("Form Submitted Successfully","success")
        }catch(e){
            showToast("Form Submission Failed","error")
        }
      }
      return (<dialog id="brochure_pop" className="modal modal-bottom lg:modal-middle">
        <iframe ref={ref} className="hidden"/>
      <div className="modal-box">
          <h2 className="text-lg font-bold">Fill these details to Download Brochure</h2>
          <form method="dialog">
              <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
          </form>
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full min-h-[440px] mb-10 mt-5">
              <label className="input text-slate-500 input-bordered flex items-center gap-2">
                  Name
                  <input onChange={handleInputData(obj.name)} type="text" name={obj.name} className="grow" required />
              </label>
              <label className="input input-bordered text-slate-500 flex items-center gap-2">
                  Contact No.
                  <input onChange={handleInputData(obj.contact)} type="number" name={obj.contact} className="grow" required />
              </label>
              <div className="form-control">
                  <label className="label cursor-pointer">
                      <span className="label-text">Is this your WhatsApp Number?</span> 
                      <input onChange={handleInputData(obj.whatsapp)} name={obj.whatsapp} type="checkbox" className="checkbox" />
                  </label>
              </div>
              <label className="form-control">
                  <div className="label">
                      <span className="label-text text-slate-500">Address</span>
                  </div>
                  <textarea onChange={handleInputData(obj.address)} name={obj.address} className="textarea textarea-bordered h-24" placeholder=""></textarea>
              </label>
              <input type="submit" className="btn btn-primary"/>
          </form>
      </div>
  </dialog>)
    }