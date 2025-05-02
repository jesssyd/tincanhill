import Button from "./button";
import Link from "next/link";
import { navLinks } from "../../lib/navigation";

export default function Navbar() {
  return (
    <div className="fixed z-50 drawer bg-base-100 shadow-sm">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-8 lex flex-col">
        {/* Navbar */}
        <div className="navbar px-0 w-full ">
          <div className="flex-auto navbar-start">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            {/* px-4 */}
            <Link href="/" className="logo text-nowrap">
              Tin Can Hill
            </Link>
          </div>


          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal py-0 px-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="invisible lg:visible navbar-end">
            <Button href="/support" text="Support" className="btn-secondary"/>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-70 p-4">
          <li>
            <Link href="/" className="logo hover:bg-base-200 ">
              Tin Can Hill
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          <Button href="/support" text="Support" className="mt-4 w-fit btn-secondary"/>
        </ul>
         
      </div>
    </div>
  );
}