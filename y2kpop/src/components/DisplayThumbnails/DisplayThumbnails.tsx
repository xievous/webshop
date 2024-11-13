import Slider from "react-slick";
import "./displaythumbnails.css";

export default function DisplayThumbnails() {
  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 1,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section className="carouselContainer">
      <Slider {...settings}>
        <div>
          <h1>NewJeans</h1>
        </div>
        <div>
          <h1>Aespa</h1>
        </div>
        <div>
          <h1>Lesserafim</h1>
        </div>
        <div>
          <h1>KISS OF LIFE</h1>
        </div>
      </Slider>
    </section>
  );
}
