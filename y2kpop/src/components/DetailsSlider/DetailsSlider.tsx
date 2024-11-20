import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import howsweet from "../../assets/products/howsweetCover.jpg";
import "./detailsslider.css";

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

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="latestArrow latestPrevArrow" onClick={onClick}>
      ❮
    </div>
  );
};


const DetailsSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const { productId } = useParams();
  const [selectedVersion, setSelectedVersion] = useState("");
  const [quantity, setQuantity] = useState(1); // State to track quantity

  const increaseQuantity = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };


  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const versionOptions = [
    "NEW JEANS VER",
    "MINJI VER",
    "HANNI VER",
    "DANIELLE VER",
    "HAERIN VER",
    "HYEIN VER",
  ];

  return (
<section className="detailsContainer">
  <div className="sliderSection">
    <header className="sliderHeader">
      <h1 className="productId">{productId}</h1>
      <div className="arrowContainer">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </header>
    <div className="sliderContainer">
      <Slider ref={sliderRef} {...settings}>
        <div className="image-container">
          <img src={howsweet} className="product-image" alt="How Sweet" />
        </div>
        <div className="image-container">
          <img src={howsweet} className="product-image" alt="How Sweet" />
        </div>
        <div className="image-container">
          <img src={howsweet} className="product-image" alt="How Sweet" />
        </div>
      </Slider>
    </div>
  </div>

  <div className="descriptionContainer">
    <div className="productTitle">
      <h1>{productId}</h1>
      <h3>NEW JEANS</h3>
    </div>
    <div className="productPrice">
      <h1>209KR</h1>
    </div>
    <div className="versionButtons">
      {versionOptions.map((version) => (
        <button
          key={version}
          className={`versionButton ${selectedVersion === version ? "active" : ""}`}
          onClick={() => setSelectedVersion(version)}
        >
          {version}
        </button>
      ))}
    </div>
    <div className="productFinalize">
      <div className="quantity">
        <button className="quantityButton" onClick={decreaseQuantity}>
          -
        </button>
        <span className="quantityValue">{quantity}</span>
        <button className="quantityButton" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <div className="addToCart">ADD TO CART</div>
    </div>
  </div>
</section>

  );
};

export default DetailsSlider;
