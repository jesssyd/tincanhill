import clsx from "clsx";
import Button from "./button";
import { ButtonProps } from "./button";

interface CardProps {
  title: string;
//   text: string;
  buttonProps: ButtonProps;
}
export default function Card({ title,  buttonProps }: CardProps) {
  return (
    <div className="card flex-1 basis-0 bg-base-100 card-md shadow-sm flex-wrap static">
      <div className="card-body justify-between items-start static">
        <h2 className="card-title pb-3">{title}</h2>
        {/* <p>{text}</p> */}
        <div className="card-actions">
          <Button
            href={buttonProps.href}
            text={buttonProps.text}
            className={clsx(buttonProps.className, "w-full text-nowrap max-w-full btn-sm lg:btn-md xl:btn-l")}
            target={buttonProps.target}
          />
        </div>
      </div>
    </div>
  );
}
