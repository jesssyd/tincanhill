import History from "./history";
import Banner from "../ui/banner";
import Image from "next/image";
import Form from "../ui/form";

export default function About() {
  return (
    <main className="mx-auto">
      <Banner
        title="About Us"
        body="Learn about who we are, what our mission is and the history of Tin
              Can Hill."
        className="bg-primary text-primary-content"
      />
      <section className="md:grid md:grid-cols-12 gap-6 mb-12 flex flex-col-reverse">
        {/* className="flex flex-col-reverse sm:flex-row gap-6" */}
        <div className="col-start-2 col-end-8 flex flex-col-reverse md:flex-row gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="md:text-nowrap">The Tin Can Hill Committee</h2>
              <h3>Who We Are</h3>
              <p>
                We are a team of people based out of the NWT who love Tin Can
                Hill for all it has to offer. We are dedicated to preserving Tin
                Can Hill as undeveloped greenspace for people to enjoy for
                generations to come.
              </p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to secure permanent protection of Tin Can Hill.
                We believe that by preserving this land as recreational green
                space, we can create a legacy for future generations of
                Yellowknifers and visitors.
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-12 flex items-center">
          <Image
            src={
              "/assets/tchabout.webp"
            }
            alt={"Tin Can Hill Image"}
            width={1000}
            height={1000}
            className="h-auto max-w-2/3 sm:max-w-1/3 md:max-w-full rounded-md object-cover"
          />
        </div>
      </section>
      <section className="bg-base-200 grid grid-cols-12 gap-6 py-20 px-8">
        <div className="col-span-full sm:col-start-2 sm:col-end-12">
          <h2 className="text-4xl font-bold">Why Tin Can Hill?</h2>
          <div className="flex justify-between flex-row flex-wrap md:gap-8 gap-3">
            <div className="card h-60 sm:h-auto min-w-48 bg-base-100 image-full flex-1 flex-wrap basis-0 shadow-sm">
              <figure>
                <Image
                  src="/assets/about/about1.webp"
                  height={1000}
                  width={1000}
                  alt="trails"
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="flex items-center gap-2">Beautiful Trails</h3>
                <p>
                  Tin Can Hill has beauiful trails for Yellowknifers and
                  visitors to explore.
                </p>
              </div>
            </div>
            <div className="h-60 sm:h-auto min-w-48 card bg-base-100 image-full flex-1 basis-0 flex-wrap shadow-sm">
              <figure>
                <Image
                  src="/assets/about/about2.jpg"
                  height={1000}
                  width={1000}
                  alt="trails"
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="flex items-center gap-2">Vibrant History</h3>
                <p>
                  Tin Can Hill has a long and vibrant history and it will
                  continue to be enjoyed for generations to come.
                </p>
              </div>
            </div>
            <div className="card h-60 sm:h-auto min-w-48 bg-base-100 image-full flex-1 basis-0 flex-wrap shadow-sm">
              <figure>
                <Image
                  src="/assets/about/about3.webp"
                  height={1000}
                  width={1000}
                  alt="trails"
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="flex items-center gap-2">Public Green Space</h3>
                <p>
                  Tin Can Hill is a beloved green space enjoyed by individuals
                  and families across Yellowknife, NWT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <History />
      <Form />
    </main>
  );
}

{
  /* <div>
              <h3>Why Tin Can Hill?</h3>
              <p>
                Recreational users of Tin Can Hill are at risk of losing
                enjoyment of this valuable piece of land. Construction is
                proposed to place buildings and parking lots in place of what is
                currently a recreational green space. Residents of Yellowknife
                must stop the City of Yellowknife from rezoning the Tin Can Hill
                Recreation Area for development. Tin Can Hill must be protected
                from <span className="italic">any</span> development,
                business, residential or otherwise. 
              </p>
            </div> */
}
