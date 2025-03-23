import History from "./history";
import Banner from "../ui/banner";
import Image from "next/image";

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
        <div className="col-start-2 col-end-8 flex flex-col-reverse md:flex-row gap-6 self-center">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="">The Tin Can Hill Committee</h2>
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
        <div className="col-start-9 col-end-12">
          <Image
            src={
              "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/460186376_2558399927677449_9146310337073085807_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=H0CtPMH4GxYQ7kNvgHnFtEp&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AolL5bjDsYzPzygfbd1Z9_L&oh=00_AYHz7kxa32eylDx19lTt6RH957I3d7fLn4f9owJOg3F1kQ&oe=67D5565D"
            }
            alt={"Tin Can Hill Image"}
            width={1000}
            height={1000}
            className="h-auto max-w-2/3 sm:max-w-1/3 md:max-w-full rounded-md object-cover"
          />
        </div>
      </section>
      <History />
    </main>
  );
}

{/* <div>
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
            </div> */}