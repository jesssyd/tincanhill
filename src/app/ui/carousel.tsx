"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GalleryImage } from "../../lib/api/getGalleryImages";

interface CarouselProps {
  images: GalleryImage[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  height?: number;
}

function NextArrow({ className,onClick }: ArrowProps) {
  return (
    <div
      className={className}
      onClick={onClick}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-caret-right-fill scale-200 fill:bg-neutral"
        viewBox="0 0 16 16"
      >
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
    </div>
  );
}

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-caret-left-fill scale-200 fill:bg-neutral"
        viewBox="0 0 16 16"
      >
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg>
    </div>
  );
}

export default function Carousel({ images }: CarouselProps) {

  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="grid grid-cols-12 gap-6">
      <div className="slider-container col-span-full sm:col-start-2 sm:col-end-12 lg:col-start-3 lg:col-span-8">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item relative w-full h-auto"
            >
              <Image
                src={image.imageURL}
                alt={image.altText}
                width={1000}
                height={1000}
                className="w-full object-contain h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

