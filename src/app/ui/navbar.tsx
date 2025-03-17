import Button from "./button";
import Link from "next/link";
import { navLinks } from "../lib/navigation";

export default function Navbar() {
  return (
    <div className="fixed z-50 drawer bg-base-100 shadow-sm">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full ">
          <div className="flex-none lg:flex-auto navbar-start">
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
            <Link href="/" className="logo px-4">
              Tin Can Hill
            </Link>
          </div>


          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex navbar-end">
            <Button href="/" text="Support" />
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
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link href="/" className="logo hover:bg-base-200">
              Tin Can Hill
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          <Button href="/" text="Support" className="w-fit btn-secondary"/>
        </ul>
         
      </div>
    </div>
    // <header className="fixed w-full z-50">
    //   <div className="navbar bg-base-100 shadow-sm">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div
    //           aria-label="Menu"
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost lg:hidden"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             className="inline-block h-5 w-5 stroke-current"
    //           >
    //             {" "}
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             ></path>{" "}
    //           </svg>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //         >
    //           {navLinks.map((link) => (
    //             <li key={link.name}>
    //               <Link href={link.path}>{link.name}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost text-xl" href="/">Tin Can Hill</a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         {navLinks.map((link) => (
    //           <li key={link.name}>
    //             <Link href={link.path}>{link.name}</Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //       <Button href="bigtiddy.com" text="Support" />
    //     </div>
    //   </div>
    // </header>
  );
}

{
  /* <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul> */
}

/*
main drop down
<li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
*/
