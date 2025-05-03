import Timeline from "./ui/timeline";
import Banner from "../ui/banner";
import Form from "../ui/form";

import { getTimeline } from "@/lib/api/getTimeline";
import { getBanner } from "@/lib/api/getBanner";
export const revalidate = 86400;


export default async function HistoryPage() {
  const entries = await getTimeline();
  const banners = await getBanner();
  const historyBanner = banners.find((banner) => banner.page === "history") || {
    title: "History",
    subheading:
      "Learn about the history of Tin Can Hill.",
  };

  return (
    <main className="mx-auto">
      <Banner
        title={historyBanner.title}
        body={historyBanner.subheading}
        className="bg-primary text-primary-content"
      />
      <Timeline entries={entries}/>
      <Form />
    </main>
  );
}