import Hero from "./ui/hero";
import Media from "./ui/media";
import Carousel from "./ui/carousel";
import Form from "./ui/form";

import { getGalleryImages } from "../lib/api/getGalleryImages";
export const revalidate = 86400;

export default async function Home() {
  const images = await getGalleryImages();

  return (
    <main>
      <Hero />
      <Media />
      {/* <CardLayout /> */}
      <Carousel images={images}></Carousel>
      <Form/>
    </main>
  );
}
