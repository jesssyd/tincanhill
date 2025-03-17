import AboutUs from "./about";
import History from "./history";
import HeadImg from "../ui/headImg"

export default function About() {
  return (
    <main className="pt-10 mx-auto">
      <HeadImg/>
      <AboutUs />
      <div className="divider px-8"></div>
      <History />
    </main>
  );
}

// add class names for max with