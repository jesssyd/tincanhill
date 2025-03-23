import Button from "./button";
import Image from "next/image";

export default function Media() {
  return (
    <section className="md:grid md:grid-cols-12 gap-6 flex-col items-center">
      {/* lg:gap-12lg:flex-rowlg:items-center flex gap-8 items-start flex-col */}

      <div className="col-start-2 col-end-5 pb-3 md:pb-0">
        <Image
          src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/460186376_2558399927677449_9146310337073085807_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=H0CtPMH4GxYQ7kNvgHnFtEp&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AolL5bjDsYzPzygfbd1Z9_L&oh=00_AYHz7kxa32eylDx19lTt6RH957I3d7fLn4f9owJOg3F1kQ&oe=67D5565D"
          alt="Tin Can Hill"
          width={1000}
          height={1000}
          className="h-auto max-w-2/3 sm:max-w-1/3 md:max-w-full rounded-md object-cover"
        />{" "}
      </div>
      {/* max-w-[200px] sm:max-w-1/3 */}
      <div className="col-start-6 col-end-12 self-center  sm:max-w-2/3 md:max-w-none">
        <h2 className="text-4xl font-bold">The Tin Can Hill Committee</h2>
        <p className="text-lg text-gray-600">
          Founded in 2023, the Tin Can Hill Committee (TCHCC) is a group of dedicated
          members from across the NWT who are seeking permanent protection for
          Tin Can Hill.
        </p>
        <Button href="/about" text="Continue Reading" className="btn-neutral" />
      </div>
    </section>
  );
}
