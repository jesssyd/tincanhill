import Button from "./button";

export default function Hero() {
  return (
    <section className="px-0 py-0 min-w-screen">
      <div className="hero flex justify-center lg:justify-start min-h-screen bg-[url(https://static.wixstatic.com/media/b70c51_eee1426fbfff40b3bb5314540ca9379c~mv2.jpg/v1/fill/w_1960,h_1526,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b70c51_eee1426fbfff40b3bb5314540ca9379c~mv2.jpg)] bg-cover relative">
        <div className="absolute inset-0 bg-[oklch(98%_0.003_247.858)]/30"></div>
        <div className="hero-content lg:grid grid-cols-12 lg:gap-6 lg:px-8 relative z-10 items-center md:items-start text-neutral-content text-center lg:text-left">
          {/* <div className="hero flex justify-center lg:justify-start min-h-screen bg-[url(https://static.wixstatic.com/media/b70c51_eee1426fbfff40b3bb5314540ca9379c~mv2.jpg/v1/fill/w_1960,h_1526,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b70c51_eee1426fbfff40b3bb5314540ca9379c~mv2.jpg)]">
        <div className="hero-content items-center md:items-start text-neutral-content text-center lg:text-left"> */}
          <div className="sm:col-start-2 col-end-auto min-w-2xs sm:w-md lg:max-w-lg lg:flex flex-col items-start text-base-content">
            <h1 className="text-5xl">
              Preserving a Natural Jewel in the Heart of Yellowknife
            </h1>
            <p className="mb-5">
              Join us in securing permanent protection of Tin Can Hill.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button href="/about" text="Learn More" className="btn-primary" />
              <Button href="/support" text="Get Involved" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

