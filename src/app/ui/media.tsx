import Button from "./button";
import Image from "next/image";

export default function Media() {
  return (
    <section>
      <div>
        <div className="flex gap-8 lg:gap-12 items-start lg:items-center flex-col lg:flex-row">
          <Image
            src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/460186376_2558399927677449_9146310337073085807_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=H0CtPMH4GxYQ7kNvgHnFtEp&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AolL5bjDsYzPzygfbd1Z9_L&oh=00_AYHz7kxa32eylDx19lTt6RH957I3d7fLn4f9owJOg3F1kQ&oe=67D5565D"
            alt="Tin Can Hill"
            width={1000}
            height={1000}
            className="max-w-[200px] sm:max-w-1/3 h-auto rounded-md object-cover"
          />
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold">The Tin Can Hill Committee</h2>
            <p className="text-lg text-gray-600">
              Founded in 2023, the Tin Can Hill Committee is a group of
              dedicated members from across the NWT who are seeking permanent
              protection for Tin Can Hill.
            </p>
            <Button
              href="/about"
              text="Continue Reading"
              className="btn-neutral"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row-reverse items-start gap-8 md:gap-12">
        <div className="w-full md:w-[40%] lg:w-[35%]">
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg text-gray-600">{text}</p>
          <Button href="/about" text="Continue Reading" />
        </div>
      </div> */}
    </section>
  );
}
