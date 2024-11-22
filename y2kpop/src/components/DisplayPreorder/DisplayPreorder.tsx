import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useNavigate } from "react-router-dom";
import "./displaypreorder.css";
import howsweet from "../../assets/products/howsweetCover.jpg";
import whiplash from "../../assets/products/whiplashCover.jpg";
import crazy from "../../assets/products/crazyCover.jpg";
import loseyourself from "../../assets/products/loseyourselfCover.jfif";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="latestArrow latestNextArrow"
      onClick={(e) => {
        e.stopPropagation(); // Prevent navigation
        if (onClick) onClick();
      }}
    >
      ❯
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="latestArrow latestPrevArrow"
      onClick={(e) => {
        e.stopPropagation(); // Prevent navigation
        if (onClick) onClick();
      }}
    >
      ❮
    </div>
  );
};

const DisplayPreorder: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const navigate = useNavigate();

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleSlideClick = (productId: string) => {
    navigate(`/details/${productId}`); // Navigate to the details page
  };

  return (
    <section
      className="preContainer"
      onClick={() => handleSlideClick("howsweet")}
    >
      <header className="carouselHeader">
        <h1>PRE-ORDER</h1>
        <div className="arrowContainer">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </header>
      <Slider ref={sliderRef} {...settings}>
        <div className="preSlider" onClick={() => handleSlideClick("howsweet")}>
          <div className="image-container">
            <img src={howsweet} className="product-image" />
            <button className="add-to-cart">PRE-ORDER</button>
          </div>
          <div className="product-info">
            <h1>HOW SWEET</h1>
            <h1>NEW JEANS</h1>
          </div>
          <div className="product-info">
            <h3>209KR</h3>
          </div>
        </div>

        <div className="preSlider" onClick={() => handleSlideClick("howsweet")}>
          <div className="image-container">
            <img src={whiplash} className="product-image" />
            <button className="add-to-cart">PRE-ORDER</button>
          </div>
          <div className="product-info">
            <h1>WHIPLASH</h1>
            <h1>AESPA</h1>
          </div>
          <div className="product-info">
            <h3>259KR</h3>
          </div>
        </div>

        <div className="preSlider" onClick={() => handleSlideClick("howsweet")}>
          <div className="image-container">
            <img src={crazy} className="product-image" />
            <button className="add-to-cart">PRE-ORDER</button>
          </div>
          <div className="product-info">
            <h1>CRAZY</h1>
            <h1>LE SSERAFIM</h1>
          </div>
          <div className="product-info">
            <h3>229KR</h3>
          </div>
        </div>
        <div className="preSlider">
          <div className="image-container">
            <img src={loseyourself} className="product-image" />
            <button className="add-to-cart">PRE-ORDER</button>
          </div>
          <div className="product-info">
            <h1>LOSE YOURSELF</h1>
            <h1>KISS OF LIFE</h1>
          </div>
          <div className="product-info">
            <h3>299KR</h3>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default DisplayPreorder;
