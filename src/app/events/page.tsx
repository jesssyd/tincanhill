import Banner from "../ui/banner";

export default function Events() {
  return (
    <main>
      <Banner
        title="Events"
        body="Keep up to date with events hosted by the TCHCC or events related to the preservation of the Hill."
        className="bg-primary text-primary-content"
      />

      <section className="mb-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[800px]">
            <h2 className="text-left">
              Upcoming Events
            </h2>

            <div className="relative w-full pt-[75%]">
              {" "}
              {/* 4:3 aspect ratio */}
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FEdmonton&showPrint=0&showNav=0&mode=AGENDA&showTz=0&title=TCHCC%20Events&src=dGluY2FuaGlsbHllbGxvd2tuaWZlQGdtYWlsLmNvbQ&color=%23039BE5"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
                title="TCHCC Events"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
