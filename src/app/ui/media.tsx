import Button from "./button";
import Image from "next/image";

interface MediaProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

export default function Media({ src, alt, title, text }: MediaProps) {
  return (
    <section>
      <div>
        <div className="flex gap-8 lg:gap-12 items-start lg:items-center flex-col lg:flex-row">
          <Image
            src={src}
            alt={alt}
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
