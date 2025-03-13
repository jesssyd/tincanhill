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
      <div className="flex flex-row-reverse items-start gap-8 md:gap-12">
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
      </div>
    </section>
  );
}
