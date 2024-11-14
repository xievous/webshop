import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "./displaylatest.css";
import howsweet from "../../assets/products/howsweetCover.jpg";
import whiplash from "../../assets/products/whiplashCover.jpg";
import crazy from "../../assets/products/crazyCover.jpg";
import loseyourself from "../../assets/products/loseyourselfCover.jfif";
import shopIcon from "../../assets/icons/shop.png";
interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="latestArrow latestNextArrow" onClick={onClick}>
      ❯
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="latestArrow latestPrevArrow" onClick={onClick}>
      ❮
    </div>
  );
};

const DisplayLatest: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="latestContainer">
      <header className="carouselHeader">
        <h1>NEW ARRIVALS</h1>
        <div className="arrowContainer">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </header>
      <Slider ref={sliderRef} {...settings}>
        <div className="latestSlide">
          <img src={howsweet} alt="NewJeans" className="carouselImage" />

          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
          <div className="latestInfo">
            <h1 className="artist">NEWJEANS</h1>
            <h1 className="album">HOW SWEET</h1>
          </div>
          <div className="latestInfo">
            <h1>209KR</h1>
          </div>
        </div>
        <div className="latestSlide">
          <img src={whiplash} alt="Aespa" className="carouselImage" />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>

          <div className="latestInfo">
            <h1 className="artist">AESPA</h1>
            <h1 className="album">WHIPLASH</h1>
          </div>
          <div className="latestInfo">
            <h1>259KR</h1>
          </div>
        </div>
        <div className="latestSlide">
          <img src={crazy} alt="Lesserafim" className="carouselImage" />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
          <div className="latestInfo">
            <h1 className="artist">LE SSERAFIM</h1>
            <h1 className="album">CRAZY</h1>
          </div>
          <div className="latestInfo">
            <h1>219KR</h1>
          </div>
        </div>
        <div className="latestSlide">
          <img src={loseyourself} alt="KissOfLife" className="carouselImage" />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
          <div className="latestInfo">
            <h1 className="artist">KISS OF LIFE</h1>
            <h1 className="album">LOSE YOURSELF</h1>
          </div>
          <div className="latestInfo">
            <h1 className="artist ">299KR</h1>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default DisplayLatest;
