import clsx from "clsx"

interface BannerProps {
  title: string
  body: string
  className: string
}

export default function Banner({ title, body, className }: BannerProps) {
  return (
    <div className={clsx("px-0 mb-12 min-w-screen sm:h-[40vh] h-[50vh] bg-accent text-accent-content", className)}> 
      <div className="hero pt-16 relative h-full ">
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content">
          <div className="max-w-md max-h-[287px] text-center">
            <h1>{title}</h1>
            <p className="">
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
