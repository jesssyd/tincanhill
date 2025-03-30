import Button from "./button";
import Image from "next/image";

export default function Media() {
  return (
    <section className="md:grid md:grid-cols-12 gap-6 flex-col items-center">
      {/* lg:gap-12lg:flex-rowlg:items-center flex gap-8 items-start flex-col */}

      <div className="col-start-2 col-end-5 pb-3 md:pb-0">
        <Image
          src="/assets/tchlogo.png"
          alt="Tin Can Hill"
          width={1000}
          height={1000}
          className="h-auto max-w-2/3 sm:max-w-1/3 md:max-w-full rounded-md object-cover"
        />{" "}
      </div>
      {/* max-w-[200px] sm:max-w-1/3 */}
      <div className="col-start-6 col-end-12 self-center  sm:max-w-2/3 md:max-w-none">
        <h2 className="text-4xl font-bold">The Tin Can Hill Conservation Committee</h2>
        <p className="text-lg text-gray-600">
          Founded in 2023, the Tin Can Hill Conservation Committee (TCHCC) is a group of dedicated
          members from across the NWT who are seeking permanent protection for
          Tin Can Hill.
        </p>
        <Button href="/about" text="Continue Reading" className="btn-neutral" />
      </div>
    </section>
  );
}
