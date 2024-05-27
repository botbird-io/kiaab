'use client'
export default function DownloadBrochure(props:{classes:string}) {
    function handleClick() {
        const modal = document?.getElementById('brochure_pop') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }
    return (<>
        <li onClick={handleClick} className={`${props.classes}`}>
            {
               props.classes ? `Download Brochure` : <a>Download Brochure</a>
            }
        </li>
    </>
    );
}
