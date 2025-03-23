import Image from "next/image";

export default function Carousel() {
  return (
    <section className="grid grid-cols-12 gap-6 ">
      <div className="carousel col-span-full sm:col-start-2 sm:col-end-12">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/assets/gallery1.jpg"
            alt="Title"
            width={1000}
            height={1000}
            className="w-full object-contain"
            style={{ height: 'auto' }}
          ></Image>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-fit">
          <Image
            src="/assets/gallery2.jpg"
            alt="Title"
            width={1000}
            height={1000}
            className="w-full object-contain"
          ></Image>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-fit">
          <Image
            src="/assets/gallery3.jpg"
            alt="Title"
            width={1000}
            height={1000}
            className="w-full object-contain"
          ></Image>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
