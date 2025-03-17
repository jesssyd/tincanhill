import Hero from "./ui/hero";
import Media from "./ui/media";
import CardLayout from "./ui/cardLayout";
import Form from "./ui/form";

export default function Home() {
  return (
    <main>
      <Hero />
      <Media src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/460186376_2558399927677449_9146310337073085807_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=H0CtPMH4GxYQ7kNvgHnFtEp&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AolL5bjDsYzPzygfbd1Z9_L&oh=00_AYHz7kxa32eylDx19lTt6RH957I3d7fLn4f9owJOg3F1kQ&oe=67D5565D" 
        alt="Tin Can Hill"
        title="About"
        text="Lorem ipsum dolor sit amet consectetur. In vitae lacus sagittis vitae eget felis vestibulum.. Sagittis mi eleifend viverra pellentesque orci diam duis magna viverra.. Rhoncus tellus lorem viverra euismod non velit.. Dictum id tincidunt tortor egestas. Dignissim tellus pulvinar libero ornare porta a posuere.. Lectus sed ligula quam sed velit.. Tristique suscipit urna ut augue. Adipiscing enim dignissim ac in morbi nunc ligula volutpat.."
      />
      <CardLayout />
      <Form/>
    </main>
  );
}
