'use client'
import Link from "next/link";
const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }
export default function ListItem({ page }:{page:{name:string,href:string,target?:string}}) {
    return (<li key={page.name} onClick={handleClick}>
      <Link href={page.href} target={page.target} className="">
        {page.name}
      </Link>
    </li>); 
  }