import Banner from "../ui/banner";
import Button from "../ui/button";
import Form from "../ui/form";

import { getSupportCards } from "@/lib/api/getSupportCards";
import { getBanner } from "@/lib/api/getBanner";
export const revalidate = 86400;

export default async function Support() {
  const cards = await getSupportCards();
  const banners = await getBanner();
  const supportBanner = banners.find((banner) => banner.page === "support") || {
    title: "Support Us",
    subheading:
      "We appreciate any contribution to the cause, no matter how big or small.",
  };

  return (
    <main>
      <Banner
        title={supportBanner.title}
        body={supportBanner.subheading}
        className="bg-primary text-primary-content"
      />

      <section className="grid grid-cols-12 gap-6 mb-12">
        <div className="flex flex-col items-stretch gap-6 col-span-full sm:col-start-1 sm:col-span-full lg:col-start-3 lg:col-span-8  2xl:col-start-4 2xl:col-span-6">
          <h2 className="pb-0">How You Can Help</h2>
          {cards.map((card, index) => (
            <div className="flex flex-col sm:flex-row sm:h-60" key={index}>
              <h3 className="sm:min-w-1/3 sm:p-5 py-1 px-3 h-full bg-base-300  sm:h-auto rounded-sm rounded-b-none sm:rounded-r-none sm:rounded-bl-sm">
                {card.heading}
              </h3>
              <div className="flex flex-col justify-between rounded-sm rounded-t-none sm:rounded-l-none sm:rounded-tr-sm p-3 sm:p-5 h-fit sm:h-full bg-base-200">
                <p className="lg:max-w-5/6">{card.description}</p>
                <Button
                  href={card.buttonLink}
                  text={card.cta}
                  className="btn-info w-fit self-end"
                ></Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Form id="support-form"></Form>
    </main>
  );
}
