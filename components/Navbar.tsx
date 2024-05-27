import Link from 'next/link';
import Image from 'next/image';
import ListItem from './ListNavItems';
import DownloadBrochure from './DownloadBrochure';
import DownloadBrochureForm from './DownloadBrochureForm';
const pages = [
  { name: 'Home', href: '/' },
  { name:"Courses", href:"/courses"},
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
// { name: 'Download Brochure', href: 'https://drive.google.com/uc?export=download&id=1yrtFwhJVW7CybUN8wahKIWNQWyp6wdP9', target: '_blank' },

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <Link href={'/'} className="btn btn-ghost text-xl">
        <Image src={'/typo_logo.svg'} alt='Kiaan Typo Logo' width={101.25} height={27} className='h-auto w-28' priority/>
      </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {pages.map((page) => (
            <li key={page.name}>
              <Link href={page.href} className="btn btn-ghost">
                {page.name}
              </Link>
            </li>
          ))}
          <DownloadBrochure classes="btn btn-ghost"/>
        </ul>
      </div>
      <div className="navbar-end">
        <a href='tel:+918830479380' className="btn btn-primary">Enquire Now</a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} aria-label='menu' role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52">
            {pages.map((page) => (
              <ListItem key={page.name} page={page} />
            ))}
            <DownloadBrochure classes=''/>
          </ul>
        </div>
      </div>
      <DownloadBrochureForm/>
    </div>
  );
}