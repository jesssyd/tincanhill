import Button from "../../ui/button";
import { TimelineContent } from "@/lib/api/getTimeline";

interface Props {
  entries: TimelineContent[];
}

export default function Timeline({ entries }: Props) {

  return (
    <section
      id="history"
      className="md:grid md:grid-cols-12 gap-6 max-w-3xl rounded-2xl"
    >
      <div className="col-start-2 col-end-12">
        <div className="pb-5 max-w-lg">
          <h2 className="">Tin Can Hill Throughout History...</h2>
          <p>
            Tin Can Hill and Yellowknife have a very long and vibrant history.
            Click on the link below to read the full history.
          </p>
          <Button
            href="https://drive.google.com/file/d/1EL5rUZ6xAXShNla2t58HjrkZCDcMhf9Q/view?usp=drivesdk"
            text="Read Here"
            className="btn-neutral"
            target="_blank"
          />
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-5">
          {
            entries.map((item, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === entries.length - 1;

              return (
                <li key={index}>
                  {index != 0 && <hr />}
        
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-circle-fill text-info"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>

                <div className={isEven ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"}>
                  <time className="font-mono text-info-content">{item.year}</time>
                  <div className="text-lg font-black pb-1 pt-2">{item.title}</div>
                  {item.description}
                </div>

                {!isLast && <hr />}
              </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
}
