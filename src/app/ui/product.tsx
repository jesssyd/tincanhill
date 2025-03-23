// 'use client';
import Image from "next/image";
import Button from "./button";
import clsx from "clsx";

interface ProdProps {
  title: string;
  text: string;
  price: string;
  src: string;
  className?: string;
}

export default function Product({
  title,
  text,
  price,
  src,
  className,
}: ProdProps) {
  return (
    <div
      className={clsx(
        "card max-w-full flex-1 basis-0 bg-base-100 w-96 shadow-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={() => document.getElementById(title).showModal()}
        className="cursor-zoom-in"
      >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="h-auto rounded-md object-cover"
        ></Image>
      </button>
      <dialog id={title} className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById(title).close()}>
            ✕
          </button>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="h-auto rounded-md object-cover"
          ></Image>
        </div>
      </dialog>

      <div className="card-body gap-0 bg-base-200">
        <h4 className="card-title">{title}</h4>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Button
            href=""
            text={price}
            className="btn btn-warning hover:bg-warning cursor-default"
          ></Button>
        </div>
      </div>
    </div>
  );
}
