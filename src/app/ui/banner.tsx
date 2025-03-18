interface BannerProps {
  title: string
  body: string
}

export default function Banner({title, body}: BannerProps) {
  return (
    <div className="px-0 mb-10 min-w-screen min-h-fit h-[40vh] bg-accent"> 
      <div className="hero pt-16 relative h-full ">
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content">
          <div className="max-w-md text-center text-accent-content">
            <h1>{title}</h1>
            <p>
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
