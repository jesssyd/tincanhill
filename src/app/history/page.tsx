import Timeline from "../ui/timeline";
import Banner from "../ui/banner";
import Form from "../ui/form";

export default function HistoryPage() {
  return (
    <main className="mx-auto">
      <Banner
        title="History"
        body="Learn about the history of Tin Can Hill."
        className="bg-primary text-primary-content"
      />
      <Timeline/>
      <Form />
    </main>
  );
}