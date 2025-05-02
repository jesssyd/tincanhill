import Link from "next/link";
import { footerLinks } from "../../lib/navigation";

export default function Foot() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        {footerLinks.map((link) => (
          <Link key={link.name} className="link link-hover" href={link.path}>
            {link.name}
          </Link>
        ))}
        {/* <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a> */}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            rel="noopener"
            aria-label="Tin Can Hill Facebook Group"
            href="https://www.facebook.com/groups/tincanhill"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            aria-label="Tin Can Hill Email"
            href="mailto:tincanhillyellowknife@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>© Tin Can Hill Yellowknife {new Date().getFullYear()}</p>
      </aside>
    </footer>
  );
}
