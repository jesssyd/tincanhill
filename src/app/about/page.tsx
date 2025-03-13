import AboutUs from "./about";
import History from "./history";

export default function About() {
  return (
    <main className="px-6 pt-10 lg:px-12 max-w-3xl mx-auto">
      <AboutUs />
      <div className="divider px-8"></div>
      <History />
    </main>
  );
}
