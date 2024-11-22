import React, { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import howsweet from "../../assets/products/howsweetCover.jpg";
import "./detailsslider.css";
import star from "../../assets/icons/star.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const sliderRef = useRef<Slider>(null);
  const [selectedVersion, setSelectedVersion] =
    useState<string>("NEW JEANS VER");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        <div className="sliderContainer">
          <div className="imageSlider">
            <Slider ref={sliderRef} {...settings}>
              <div className="imageContainer">
                <img src={howsweet} className="productImage" alt="How Sweet" />
              </div>
              <div className="imageContainer">
                <img src={howsweet} className="productImage" alt="How Sweet" />
              </div>
              <div className="imageContainer">
                <img src={howsweet} className="productImage" alt="How Sweet" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="descriptionContainer">
        <div className="productTitle">
          <div className="productArtist">
            <h1 className="large">How Sweet</h1>
            <h1 className="large">NEW JEANS</h1>
          </div>
          <div className="productReview">
            <h1>REVIEW: 5</h1>
            <img src={star} className="y2kicon" alt="" />
            <img src={star} className="y2kicon" alt="" />
            <img src={star} className="y2kicon" alt="" />
            <img src={star} className="y2kicon" alt="" />
            <img src={star} className="y2kicon" alt="" />
          </div>
          <div className="productPrice">
            <h1 className="large">209KR</h1>
          </div>
        </div>

        <div className="versionButtons">
          <h1>Choose Version</h1>
          {versionOptions.map((version) => (
            <button
              key={version}
              className={`versionButton ${
                selectedVersion === version ? "active" : ""
              }`}
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
          <div className="addToCart" onClick={() => navigate("/overview")}>
            ADD TO CART
          </div>
        </div>
        <div className="productShipping">
          <h1>ESTIMATED SHIPPING: 4 DAYS</h1>
          <h1>FREE SHIPPING ON ALL ORDERS OVER 499KR IN SWEDEN</h1>
        </div>
        <div className="productContent">
          <div>
            <h1>Album Content:</h1>
            <p>OUTBOX : 6 Versions / W312 X H312 X T25 (mm)</p>
            <p>INTERVIEW BOOK : 6 Versions / W180 X H250 (mm) / 44 Pages</p>
            <p>PHOTOBOOK : 6 Versions / W303 X H296 (mm) / 76 Pages</p>
            <p>MINI POSTER : 6 Versions / W220 X H296 (mm) </p>
            <p>CD-R : 6 Versions / W120 X H120 (mm)</p>
            <p>
              STICKER PACK : 6 Versions (5ea, Common 1species (1set 3ea) & Each
              Versions 1ea (1set 2ea)) / W100 X H135 (mm)
            </p>
            <p>PHOTOCARDS : Each Version 1set (5ea) / W55 X H85 (mm)</p>
            <p>POSTCARD : Each Version 1ea (1ea) / W100 X H150 (mm)</p>
            <p>BOOKMARK : Each Version 1species (1ea) / MAX W63.5 X H73 (mm)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSlider;
