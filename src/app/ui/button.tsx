import clsx from "clsx";

export interface ButtonProps {
  href: string;
  text: string;
  className?: string;
  target?: string;
}

export default function Button({ href, text, className, target }: ButtonProps) {
  return (
    <a
      className= {clsx("btn", className)}
      href={href}
      target={target}
    >
      {text}
    </a>
  );
}

// responsive button btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-x