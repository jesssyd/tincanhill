import Timeline from "./ui/timeline";
import Banner from "../ui/banner";
import Form from "../ui/form";

import { getTimeline } from "@/lib/api/getTimeline";

export default async function HistoryPage() {
  const entries = await getTimeline();
  return (
    <main className="mx-auto">
      <Banner
        title="History"
        body="Learn about the history of Tin Can Hill."
        className="bg-primary text-primary-content"
      />
      <Timeline entries={entries}/>
      <Form />
    </main>
  );
}