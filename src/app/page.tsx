import Hero from "./ui/hero";
import Media from "./ui/media";
import CardLayout from "./ui/cardLayout";
import Carousel from "./ui/carousel";
import Form from "./ui/form";

export default function Home() {
  return (
    <main>
      <Hero />
      <Media />
      <CardLayout />
      <Carousel></Carousel>
      <Form/>
    </main>
  );
}
