import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Nav from "./nav";

export default function Hero({ imagePaths }) {
  return (
    <header className="bg-opacity-25 bg-black bg-fixed bg-no-repeat  bg-cover relative">
      <div className=" bg-black text-white py-3 px-5">
        We're raising money for the next phase of the pump track. If you can,
        please pitch in to support us.{' '}
        <a className="font-bold hover:underline" href="https://gf.me/u/y4546m" target="_blank">
          More details here.
        </a>
      </div>
      <Carousel
        showThumbs={() => true}
        showArrows={() => true}
        showIndicators={() => true}
        infiniteLoop={() => true}
        autoPlay={() => true}
        dynamicHeight={() => false}
        useKeyboardArrows={() => true}
      >
        {imagePaths &&
          imagePaths.map((img) => (
            <div key={img}>
              <img src={img} />
            </div>
          ))}
      </Carousel>
      <Nav />
    </header>
  );
}
