import Link from 'next/link';
import Image from 'next/image';
const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <Link href={'/'} className="btn btn-ghost text-xl">
        <Image className='' src={'/typo_logo.svg'} alt='' width={100} height={20} priority/>
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
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Enquire Now</a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.href} className="">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}