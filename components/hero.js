import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Nav from "./nav";

export default function Hero({ imagePaths }) {
  return (
    <header className="bg-opacity-25 bg-black bg-fixed bg-no-repeat  bg-cover relative">
      <Carousel
        showThumbs={() => true}
        showArrows={() => true}
        showIndicators={() => true}
        infiniteLoop={() => true}
        autoPlay={() => true}
        dynamicHeight={() => false}
        useKeyboardArrows={() => true}
      >
        {imagePaths && imagePaths.map((img) => (
          <div key={img}>
            <img src={img} />
          </div>
        ))}
      </Carousel>
      <Nav />
    </header>
  );
}
