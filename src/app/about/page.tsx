import AboutUs from "./about";
import History from "./history";
import Banner from "../ui/banner";

export default function About() {
  return (
    <main className="mx-auto">
      <Banner
        title="About Us"
        body="Learn about who we are, what our mission is and the history of Tin
              Can Hill."
      />
      <AboutUs />
      {/* <section>
        <h2>Why Tin Can Hill?</h2>
        <div className="flex gap-6">
          <Product />
          <Product />
          <Product />
        </div>
      </section> */}
      {/* <div className="divider px-8"></div> */}
      <History />
    </main>
  );
}

// add class names for max with
