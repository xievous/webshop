import React from "react";
import Slider, { Settings } from "react-slick"; // Import Slider and Settings type from react-slick
import "./displaythumbnails.css";
import newJeansImage from "../../assets/images/newjeans_dashboard.jpeg";
import aespaImage from "../../assets/images/aespa_dashboard.jpg";
import leserrafimImage from "../../assets/images/lesserafim_dashboard.jpeg";
import kissoflifeImage from "../../assets/images/kissoflife_dashboard.jpg";

// Define types for Arrow Props
interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="customArrow nextArrow" onClick={onClick}>
      ❯
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="customArrow prevArrow" onClick={onClick}>
      ❮
    </div>
  );
};

// Main DisplayThumbnails Component
const DisplayThumbnails: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
  };

  return (
    <section className="carouselContainer">
      <h1>DISCOVER</h1>
      <Slider {...settings}>
        <div className="carouselSlide">
          <h1>NewJeans</h1>
          <img src={newJeansImage} alt="NewJeans" className="carouselImage" />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
        </div>
        <div className="carouselSlide">
          <h1 id="aespaLogo">Aespa</h1>
          <img src={aespaImage} alt="Aespa" className="carouselImage" />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
        </div>
        <div className="carouselSlide">
          <h1>LE SSERAFIM</h1>
          <img
            src={leserrafimImage}
            alt="Lesserafim"
            className="carouselImage"
          />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
        </div>
        <div className="carouselSlide">
          <h1>KISS OF LIFE</h1>
          <img
            src={kissoflifeImage}
            alt="KissOfLife"
            className="carouselImage"
          />
          <div className="buttonContainer">
            <button className="viewDetails">View Details</button>
            <button className="shopNow">Shop Now</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default DisplayThumbnails;
