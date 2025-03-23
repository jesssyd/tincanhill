import Banner from "../ui/banner";

export default function Events() {
  return (
    <main>
      <Banner
        title="Events"
        body="Keep up to date with events hosted by the TCHCC or events related to the preservation of the Hill."
        className="bg-primary text-primary-content"
      />

      <section className="grid grid-cols-12 gap-6 mb-12 h-[30vh]">
        <div className="col-span-full sm:col-start-1 sm:col-end-12 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6">
          <h2 className="text-center">Coming Soon...</h2>
        </div>
      </section>


    </main>
  );
}
