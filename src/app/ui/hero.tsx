import Button from "./button";

export default function Hero() {
  return (
    <section className="px-0 py-0">
      <div className="hero flex justify-center md:justify-start min-h-screen bg-[url(https://static.wixstatic.com/media/b70c51_eee1426fbfff40b3bb5314540ca9379c~mv2.jpg/v1/fill/w_1960,h_1526,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b70c51_eee1426fbfff40b3bb5314540ca9379c~mv2.jpg)]">
        {/* <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div> */}
        <div className="hero-content items-center md:items-start text-neutral-content text-center md:text-left">
          <div className="max-w-md md:max-w-lg md:pl-10 md:flex flex-col items-start">
            <h1 className="text-5xl">
              Preserving a Natural Jewel in the Heart of Yellowknife
            </h1>
            <p className="mb-5">
              Join us in securing permanent protection of Tin Can Hill.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button href="/" text="Learn More" className="btn-accent" />
              <Button href="/" text="Get Involved" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="mt-8 flex justify-center sm:justify-start gap-4 text-center">
<Button href="#" text="Get Started" transparent={false} />
<Button href="#" text="Learn More" transparent={true} />
</div> */
}
