import Image from "next/image";

interface ProdProps {
  title: string;
  text: string;
  price: string;
  src: string;
}

export default function Product({ title, text, price, src }: ProdProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="max-w-[200px] sm:max-w-1/3 h-auto rounded-md object-cover"
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div> */
}
