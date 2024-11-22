import { useState } from "react";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import howsweet from "../../assets/products/howsweetCover.jpg";
import whiplash from "../../assets/products/whiplashCover.jpg";
import crazy from "../../assets/products/crazyCover.jpg";
import loseyourself from "../../assets/products/loseyourselfCover.jfif";
import "./displayoverview.css";

export default function DisplayOverview() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
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

  const sliderRef = useRef<Slider>(null);
  const navigate = useNavigate();

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="overviewColumn">
        <h1>OVERVIEW</h1>
      </div>
      <div className="overviewContainer">
        <div className="overviewProducts">
          <div className="productColumn">
            <div className="rowImage">
              <img
                src={howsweet}
                className="columnImage"
                alt="How Sweet New Jeans"
              />
            </div>
            <div className="rowTotal">
              <div className="productDescription">
                <div className="rowTop">
                  <p>PRODUCT</p>
                </div>
                <div className="rowFill">
                  <h1>HOW SWEET NEW JEANS</h1>
                  <h3>HAERIN VER.</h3>
                </div>
              </div>
              <div className="productPricing">
                <div className="rowTop">
                  <p>PRICE</p>
                </div>
                <div className="rowPrice">
                  <p>219KR</p>
                </div>
              </div>
              <div className="productQuantity">
                <div className="rowTop">
                  <p>QUANTITY</p>
                </div>
                <div className="rowQuantity">
                  <div className="amountButton">
                    <button onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                  </div>
                </div>
                <a href="#">REMOVE</a>
              </div>
            </div>
          </div>

          <div className="productColumn">
            <div className="rowImage">
              <img
                src={howsweet}
                className="columnImage"
                alt="How Sweet New Jeans"
              />
            </div>
            <div className="rowTotal">
              <div className="productDescription">
                <div className="rowTop">
                  <p>PRODUCT</p>
                </div>
                <div className="rowFill">
                  <h1>HOW SWEET NEW JEANS</h1>
                  <h3>HAERIN VER.</h3>
                </div>
              </div>
              <div className="productPricing">
                <div className="rowTop">
                  <p>PRICE</p>
                </div>
                <div className="rowPrice">
                  <p>219KR</p>
                </div>
              </div>
              <div className="productQuantity">
                <div className="rowTop">
                  <p>QUANTITY</p>
                </div>
                <div className="rowQuantity">
                  <div className="amountButton">
                    <button onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                  </div>
                </div>
                <a href="#">REMOVE</a>
              </div>
            </div>
          </div>

          <div className="productColumn">
            <div className="rowImage">
              <img
                src={howsweet}
                className="columnImage"
                alt="How Sweet New Jeans"
              />
            </div>
            <div className="rowTotal">
              <div className="productDescription">
                <div className="rowTop">
                  <p>PRODUCT</p>
                </div>
                <div className="rowFill">
                  <h1>HOW SWEET NEW JEANS</h1>
                  <h3>HAERIN VER.</h3>
                </div>
              </div>
              <div className="productPricing">
                <div className="rowTop">
                  <p>PRICE</p>
                </div>
                <div className="rowPrice">
                  <p>219KR</p>
                </div>
              </div>
              <div className="productQuantity">
                <div className="rowTop">
                  <p>QUANTITY</p>
                </div>
                <div className="rowQuantity">
                  <div className="amountButton">
                    <button onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                  </div>
                </div>
                <a href="#">REMOVE</a>
              </div>
            </div>
          </div>

          <div className="productColumn">
            <div className="rowImage">
              <img
                src={howsweet}
                className="columnImage"
                alt="How Sweet New Jeans"
              />
            </div>
            <div className="rowTotal">
              <div className="productDescription">
                <div className="rowTop">
                  <p>PRODUCT</p>
                </div>
                <div className="rowFill">
                  <h1>HOW SWEET NEW JEANS</h1>
                  <h3>HAERIN VER.</h3>
                </div>
              </div>
              <div className="productPricing">
                <div className="rowTop">
                  <p>PRICE</p>
                </div>
                <div className="rowPrice">
                  <p>219KR</p>
                </div>
              </div>
              <div className="productQuantity">
                <div className="rowTop">
                  <p>QUANTITY</p>
                </div>
                <div className="rowQuantity">
                  <div className="amountButton">
                    <button onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                  </div>
                </div>
                <a href="#">REMOVE</a>
              </div>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="totalPrice">
            <h1>TOTAL</h1>
            <h1>438KR</h1>
          </div>
          <div className="totalCheckout">
            <button onClick={() => navigate("/checkout")}>CHECKOUT</button>
          </div>
          <div className="totalPrice">
            <h1>PAYMENT METHODS</h1>
            <div className="totalIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 16"
                height="16"
                width="26"
              >
                <g clip-path="url(#clip0_7668_162106)">
                  <path
                    fill="#FF5F00"
                    d="M16.4054 1.62485H9.64844V13.5751H16.4054V1.62485Z"
                  ></path>
                  <path
                    fill="#EB001B"
                    d="M10.0782 7.59996C10.0771 6.44906 10.3421 5.31302 10.8531 4.27782C11.3641 3.24262 12.1077 2.3354 13.0276 1.62485C11.8884 0.743597 10.5203 0.195559 9.07958 0.0433751C7.63887 -0.108809 6.18372 0.140996 4.88045 0.764249C3.57718 1.3875 2.47837 2.35905 1.70962 3.56785C0.94087 4.77665 0.533203 6.17392 0.533203 7.59996C0.533203 9.026 0.94087 10.4233 1.70962 11.6321C2.47837 12.8409 3.57718 13.8124 4.88045 14.4357C6.18372 15.0589 7.63887 15.3087 9.07958 15.1565C10.5203 15.0044 11.8884 14.4563 13.0276 13.5751C12.1077 12.8645 11.3641 11.9573 10.8531 10.9221C10.3421 9.88689 10.0771 8.75085 10.0782 7.59996Z"
                  ></path>
                  <path
                    fill="#F79E1B"
                    d="M25.5214 7.59996C25.5214 9.02598 25.1138 10.4232 24.3451 11.632C23.5764 12.8408 22.4776 13.8124 21.1744 14.4356C19.8711 15.0589 18.416 15.3087 16.9753 15.1565C15.5346 15.0044 14.1665 14.4563 13.0273 13.5751C13.9465 12.8638 14.6895 11.9564 15.2004 10.9214C15.7113 9.88636 15.9768 8.75067 15.9768 7.59996C15.9768 6.44925 15.7113 5.31355 15.2004 4.27852C14.6895 3.24348 13.9465 2.33612 13.0273 1.62485C14.1665 0.743594 15.5346 0.195555 16.9753 0.0433731C18.416 -0.108809 19.8711 0.141007 21.1744 0.764267C22.4776 1.38753 23.5764 2.35908 24.3451 3.56787C25.1138 4.77667 25.5214 6.17394 25.5214 7.59996Z"
                  ></path>
                  <path
                    fill="#F79E1B"
                    d="M24.7859 12.3094V12.0647H24.8861V12.0149H24.6309V12.0647H24.7311V12.3094H24.7859ZM25.2815 12.3094V12.0144H25.2033L25.1133 12.2173L25.0232 12.0144H24.9449V12.3094H25.0002V12.0868L25.0846 12.2787H25.1419L25.2263 12.0864V12.3094H25.2815Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_7668_162106">
                    <rect
                      transform="translate(0.390625 -3.05176e-05)"
                      fill="white"
                      height="15.2"
                      width="25.2583"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 34 11"
                height="11"
                width="34"
              >
                <path
                  fill="#1434CB"
                  d="M12.7307 0.406002L8.35911 10.8363H5.50699L3.35572 2.51244C3.22506 1.99968 3.11161 1.81196 2.71441 1.596C2.06594 1.24409 0.994909 0.914091 0.0527344 0.709152L0.116735 0.406002H4.70793C5.29314 0.406002 5.81918 0.795583 5.95203 1.46956L7.0882 7.50512L9.89626 0.406002H12.7307ZM23.9061 7.43084C23.9176 4.67805 20.0995 4.52633 20.1258 3.29664C20.134 2.92239 20.4904 2.52453 21.2703 2.42284C21.6569 2.37219 22.7221 2.33355 23.9303 2.88963L24.4042 0.677893C23.755 0.442315 22.9197 0.215485 21.8803 0.215485C19.2134 0.215485 17.3365 1.63329 17.3207 3.66332C17.3035 5.16491 18.6604 6.00279 19.6826 6.50172C20.7342 7.01275 21.087 7.34102 21.0831 7.79814C21.0755 8.49787 20.2443 8.80674 19.4674 8.81883C18.1113 8.83966 17.3243 8.45182 16.6969 8.16016L16.2079 10.4452C16.8384 10.7344 18.002 10.9868 19.2085 10.9994C22.0432 10.9994 23.8974 9.59925 23.9061 7.43084ZM30.9486 10.8363H33.444L31.2657 0.406002H28.9624C28.4445 0.406002 28.0077 0.707482 27.8142 1.17125L23.7653 10.8363H26.5985L27.1611 9.27829H30.6228L30.9486 10.8363ZM27.938 7.14053L29.3581 3.22432L30.1755 7.14053H27.938ZM16.5859 0.406002L14.3548 10.8363H11.6567L13.8887 0.406002H16.5859Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 23 15"
                height="15"
                width="23"
              >
                <g clip-path="url(#clip0_7668_162116)">
                  <path
                    fill="#0071CE"
                    d="M19.7404 11.8473L20.6983 12.9157H22.5035V13.5052C22.5035 14.021 22.0983 14.4263 21.5825 14.4263H1.83511C1.31933 14.4263 0.914062 14.021 0.914062 13.5052V1.53153C0.914062 1.01574 1.31933 0.610474 1.83511 0.610474H21.5825C22.0983 0.610474 22.5035 1.01574 22.5035 1.53153V2.37889H20.2562L19.7404 3.81574L19.2246 2.37889H16.2772V4.29468L15.4298 2.37889H13.072L10.6404 7.94205H12.593V12.9157H16.793H18.7456L19.7404 11.8473ZM22.5035 12.3263H20.9562L19.7035 10.9263L18.4141 12.3263H16.9035L18.9667 10.1894L16.9035 8.01574H18.4509L19.7035 9.41573L20.993 8.01574H22.5035L20.4772 10.1526L22.5035 12.3263ZM16.9035 8.01574H13.2562V12.3263H16.9035L16.9035 11.3315H14.4351V10.6684H16.8667V9.67363H14.4351V9.01047H16.9035L16.9035 8.01574ZM22.4667 7.38939H21.3614V4.36833L20.2193 7.38939H19.1877L18.0825 4.36833V7.38939H16.9404L16.9404 7.38941H15.6141L15.2456 6.54204H13.2562L12.8878 7.38941H11.5983L13.5141 3.07888H15.0246L16.9035 7.30648V3.07886H18.7456L19.7404 5.76833L20.6983 3.07886L22.4667 3.04202V7.38939ZM13.6614 5.5473L14.2509 4.1473L14.8404 5.5473H13.6614ZM22.5035 11.221L21.4351 10.042L22.5035 8.8631V11.221Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_7668_162116">
                    <rect
                      transform="translate(0.65625 0.499969)"
                      fill="white"
                      height="14"
                      width="22.1053"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 34 15"
                height="15"
                width="34"
              >
                <g clip-path="url(#clip0_7668_162125)">
                  <path
                    fill="#FFB3C7"
                    d="M29.8016 0.899994H4.45117C2.30352 0.899994 0.5625 2.64101 0.5625 4.78867V10.4113C0.5625 12.559 2.30352 14.3 4.45117 14.3H29.8016C31.9493 14.3 33.6903 12.559 33.6903 10.4113V4.78867C33.6903 2.64101 31.9493 0.899994 29.8016 0.899994Z"
                  ></path>
                  <path
                    fill="black"
                    d="M4.57812 4.78867H5.84311V10.4129H4.57812V4.78867ZM9.06598 4.78868H7.80325C7.8052 5.29507 7.68805 5.79482 7.46124 6.24759C7.23444 6.70035 6.90435 7.09344 6.49761 7.39511L5.99738 7.76978L7.93579 10.4131H9.52944L7.74594 7.98087C8.16655 7.56283 8.49986 7.06533 8.72648 6.51732C8.95309 5.9693 9.0685 5.3817 9.06598 4.78868ZM9.90587 4.78974H11.1243V10.4113H9.90587V4.78974ZM26.0499 6.4184C26.4225 6.43925 26.7824 6.5613 27.0907 6.77143V6.52271H28.255V10.4113H27.0907V10.1628C26.7824 10.373 26.4225 10.495 26.0499 10.5159C25.6774 10.5367 25.3061 10.4556 24.9762 10.2811C24.6464 10.1067 24.3703 9.84567 24.1777 9.52603C23.9851 9.20639 23.8834 8.84029 23.8834 8.46713C23.8834 8.09396 23.9851 7.72787 24.1777 7.40823C24.3703 7.08859 24.6464 6.82752 24.9762 6.65311C25.3061 6.4787 25.6774 6.39755 26.0499 6.4184ZM25.4903 9.27344C25.648 9.38972 25.8362 9.45724 26.0318 9.46764C26.3044 9.47467 26.5685 9.37327 26.7664 9.18569C26.9642 8.99811 27.0795 8.73969 27.0869 8.46718C27.0869 8.27129 27.0295 8.0797 26.9218 7.9161C26.814 7.75251 26.6607 7.62409 26.4807 7.54672C26.3008 7.46936 26.1021 7.44645 25.9092 7.48083C25.7164 7.51521 25.5378 7.60537 25.3957 7.74016C25.2535 7.87494 25.154 8.04844 25.1094 8.23919C25.0649 8.42994 25.0772 8.62957 25.1449 8.81339C25.2126 8.99721 25.3327 9.15716 25.4903 9.27344ZM21.8158 6.41806C21.5869 6.40453 21.3581 6.44686 21.1492 6.54141C20.9403 6.63596 20.7575 6.77989 20.6166 6.96079V6.52288H19.4571V10.4113H20.6305V8.3678C20.6215 8.25041 20.6379 8.13245 20.6785 8.02195C20.7191 7.91145 20.7831 7.811 20.866 7.72742C20.9489 7.64384 21.0489 7.5791 21.1591 7.5376C21.2692 7.49609 21.3871 7.4788 21.5045 7.48689C22.0162 7.48689 22.3104 7.7926 22.3104 8.35975V10.4113H23.4734V7.93846C23.4733 7.03347 22.7538 6.41806 21.8158 6.41806ZM13.7671 6.4184C14.1396 6.43925 14.4995 6.5613 14.8079 6.77143V6.52271H15.9721V10.4113H14.8079V10.1628C14.4995 10.373 14.1396 10.495 13.7671 10.5159C13.3945 10.5367 13.0233 10.4556 12.6934 10.2811C12.3635 10.1067 12.0874 9.84567 11.8948 9.52603C11.7022 9.20639 11.6005 8.84029 11.6005 8.46713C11.6005 8.09396 11.7022 7.72787 11.8948 7.40823C12.0874 7.08859 12.3635 6.82752 12.6934 6.65311C13.0233 6.4787 13.3945 6.39755 13.7671 6.4184ZM13.2074 9.2735C13.365 9.38976 13.5533 9.45726 13.7489 9.46764C14.0214 9.47466 14.2856 9.37324 14.4834 9.18566C14.6812 8.99809 14.7964 8.73968 14.8039 8.46718C14.8039 8.27128 14.7465 8.07969 14.6387 7.91609C14.531 7.75249 14.3776 7.62407 14.1976 7.54671C14.0177 7.46935 13.819 7.44645 13.6261 7.48083C13.4333 7.51522 13.2547 7.6054 13.1126 7.74019C12.9704 7.87499 12.8709 8.0485 12.8264 8.23926C12.7818 8.43002 12.7942 8.62966 12.8619 8.81348C12.9296 8.9973 13.0497 9.15723 13.2074 9.2735ZM17.7732 7.02921V6.52272H16.5812V10.4114H17.7758V8.59596C17.7758 7.98339 18.4397 7.65414 18.9005 7.65414L18.9076 7.65438L18.9099 7.6545L18.9143 7.65463V6.52295C18.6984 6.51716 18.484 6.5596 18.2866 6.64718C18.0892 6.73476 17.9138 6.86527 17.7732 7.02921ZM29.0851 9.15526C29.2053 9.07496 29.3466 9.03209 29.4911 9.03209C29.5871 9.03207 29.6821 9.05097 29.7708 9.08769C29.8594 9.1244 29.94 9.17823 30.0079 9.24609C30.0757 9.31395 30.1296 9.39452 30.1663 9.48318C30.203 9.57185 30.2219 9.66688 30.2219 9.76285C30.2219 9.90738 30.179 10.0487 30.0987 10.1688C30.0184 10.289 29.9043 10.3827 29.7708 10.438C29.6373 10.4933 29.4903 10.5078 29.3486 10.4796C29.2068 10.4514 29.0766 10.3818 28.9744 10.2796C28.8722 10.1774 28.8026 10.0472 28.7744 9.90544C28.7462 9.76369 28.7607 9.61675 28.816 9.48322C28.8713 9.34969 28.9649 9.23556 29.0851 9.15526Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_7668_162125">
                    <rect
                      transform="translate(0.5625 0.899994)"
                      fill="white"
                      height="13.4"
                      width="33.1278"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 46 15"
                height="15"
                width="46"
              >
                <g clip-path="url(#clip0_7668_162137)">
                  <path
                    fill="#4A4A49"
                    d="M43.1405 4.53453C43.1405 4.37539 43.1697 4.22619 43.2283 4.08694C43.2868 3.94769 43.3663 3.82624 43.4667 3.72259C43.567 3.61894 43.6847 3.53727 43.8195 3.4776C43.9544 3.41792 44.0992 3.38808 44.2539 3.38808C44.4108 3.38808 44.5577 3.41792 44.6946 3.4776C44.8316 3.53727 44.9508 3.61894 45.0522 3.72259C45.1536 3.82624 45.2336 3.94769 45.2921 4.08694C45.3507 4.22619 45.38 4.37539 45.38 4.53453C45.38 4.69368 45.3507 4.84287 45.2921 4.98212C45.2336 5.12137 45.1536 5.24282 45.0522 5.34647C44.9508 5.45012 44.8316 5.53179 44.6946 5.59147C44.5577 5.65115 44.4108 5.68098 44.2539 5.68098C44.0992 5.68098 43.9544 5.65115 43.8195 5.59147C43.6847 5.53179 43.567 5.45012 43.4667 5.34647C43.3663 5.24282 43.2868 5.12137 43.2283 4.98212C43.1697 4.84287 43.1405 4.69367 43.1405 4.53453ZM43.3694 4.53453C43.3694 4.66645 43.3919 4.78895 43.4369 4.90202C43.4818 5.0151 43.544 5.11352 43.6235 5.19728C43.7029 5.28104 43.7965 5.34699 43.9042 5.39516C44.0119 5.44332 44.1285 5.4674 44.2539 5.4674C44.3815 5.4674 44.4996 5.44332 44.6084 5.39516C44.7171 5.34699 44.8117 5.28104 44.8922 5.19728C44.9727 5.11352 45.036 5.0151 45.082 4.90202C45.128 4.78895 45.151 4.66645 45.151 4.53453C45.151 4.40261 45.128 4.28011 45.082 4.16704C45.036 4.05396 44.9727 3.95555 44.8922 3.87179C44.8117 3.78803 44.7171 3.72207 44.6084 3.67391C44.4996 3.62574 44.3815 3.60166 44.2539 3.60166C44.1285 3.60166 44.0119 3.62574 43.9042 3.67391C43.7965 3.72207 43.7029 3.78803 43.6235 3.87179C43.544 3.95555 43.4818 4.05396 43.4369 4.16704C43.3919 4.28011 43.3694 4.40261 43.3694 4.53453ZM43.8713 4.0414C43.8713 3.9723 43.9058 3.93775 43.9748 3.93775H44.3292C44.4421 3.93775 44.532 3.9702 44.599 4.03512C44.6659 4.10003 44.6993 4.18798 44.6993 4.29896C44.6993 4.34503 44.6925 4.38586 44.6789 4.42146C44.6653 4.45705 44.6481 4.48794 44.6272 4.51411C44.6063 4.54029 44.5833 4.56175 44.5582 4.5785C44.5331 4.59526 44.508 4.60677 44.4829 4.61305V4.61934C44.485 4.62143 44.4881 4.62562 44.4923 4.6319C44.4965 4.63609 44.5007 4.64289 44.5049 4.65232C44.509 4.66174 44.5153 4.67273 44.5237 4.6853L44.6868 5.00254C44.7056 5.03813 44.7098 5.06693 44.6993 5.08891C44.6889 5.1109 44.6659 5.12189 44.6303 5.12189H44.5927C44.5341 5.12189 44.4934 5.09677 44.4704 5.04651L44.2884 4.66331H44.094V5.02138C44.094 5.08839 44.0616 5.12189 43.9967 5.12189H43.9685C43.9037 5.12189 43.8713 5.08839 43.8713 5.02138V4.0414ZM44.2822 4.49998C44.3428 4.49998 44.3899 4.48218 44.4233 4.44658C44.4568 4.41099 44.4735 4.36178 44.4735 4.29896C44.4735 4.23823 44.4568 4.19112 44.4233 4.15761C44.3899 4.12411 44.3438 4.10736 44.2853 4.10736H44.094V4.49998H44.2822ZM35.1394 5.25099C35.494 5.25099 35.7947 5.29624 36.0415 5.38675C36.2883 5.47727 36.4812 5.56082 36.6203 5.6374C36.7385 5.70007 36.808 5.78362 36.8289 5.88805C36.8497 5.99249 36.8323 6.10389 36.7767 6.22225L36.6724 6.41024C36.6099 6.53556 36.5299 6.60867 36.4326 6.62956C36.3352 6.65044 36.2205 6.63304 36.0884 6.57734C35.9702 6.52164 35.8277 6.4642 35.6608 6.40502C35.494 6.34584 35.2993 6.31625 35.0768 6.31625C34.8474 6.31625 34.6701 6.3615 34.5449 6.45201C34.4198 6.54253 34.3572 6.67133 34.3572 6.83843C34.3572 6.98464 34.4215 7.103 34.5501 7.19352C34.6788 7.28403 34.8421 7.3641 35.0403 7.43372C35.2385 7.50335 35.4505 7.57819 35.6765 7.65826C35.9024 7.73833 36.1145 7.84103 36.3126 7.96635C36.5108 8.09168 36.6742 8.25181 36.8028 8.44676C36.9314 8.64171 36.9957 8.88888 36.9957 9.18827C36.9957 9.42499 36.9488 9.64257 36.8549 9.841C36.7611 10.0394 36.6255 10.2118 36.4482 10.358C36.2709 10.5042 36.0571 10.6191 35.8068 10.7026C35.5565 10.7862 35.2784 10.8279 34.9725 10.8279C34.5414 10.8279 34.1782 10.7653 33.8827 10.6399C33.5872 10.5146 33.3595 10.3963 33.1996 10.2849C33.0814 10.2152 33.0153 10.1282 33.0014 10.0238C32.9875 9.91933 33.0188 9.80793 33.0953 9.68957L33.2204 9.50158C33.2969 9.39018 33.3821 9.32752 33.4759 9.31359C33.5698 9.29967 33.6828 9.32752 33.8149 9.39714C33.94 9.46677 34.1017 9.54509 34.2998 9.63213C34.498 9.71916 34.7326 9.76267 35.0038 9.76267C35.2332 9.76267 35.414 9.71394 35.5461 9.61646C35.6782 9.51899 35.7443 9.3867 35.7443 9.2196C35.7443 9.07339 35.6799 8.95677 35.5513 8.86973C35.4227 8.7827 35.2593 8.70264 35.0612 8.62953C34.863 8.55642 34.6509 8.4781 34.425 8.39455C34.199 8.311 33.987 8.20656 33.7888 8.08123C33.5907 7.95591 33.4273 7.79577 33.2987 7.60082C33.17 7.40587 33.1057 7.15523 33.1057 6.84888C33.1057 6.59126 33.1596 6.3615 33.2674 6.15959C33.3751 5.95768 33.5211 5.79058 33.7054 5.65829C33.8896 5.526 34.1052 5.42505 34.352 5.35542C34.5988 5.2858 34.8613 5.25099 35.1394 5.25099ZM19.6372 5.25099C19.9918 5.25099 20.2925 5.29624 20.5394 5.38675C20.7862 5.47727 20.9791 5.56082 21.1182 5.6374C21.2364 5.70007 21.3059 5.78362 21.3267 5.88805C21.3476 5.99249 21.3302 6.10389 21.2746 6.22225L21.1703 6.41024C21.1077 6.53556 21.0278 6.60867 20.9304 6.62956C20.8331 6.65044 20.7184 6.63304 20.5863 6.57734C20.4681 6.52164 20.3256 6.4642 20.1587 6.40502C19.9918 6.34584 19.7972 6.31625 19.5747 6.31625C19.3452 6.31625 19.1679 6.3615 19.0428 6.45201C18.9176 6.54253 18.8551 6.67133 18.8551 6.83843C18.8551 6.98464 18.9194 7.103 19.048 7.19352C19.1766 7.28403 19.34 7.3641 19.5382 7.43372C19.7363 7.50335 19.9484 7.57819 20.1743 7.65826C20.4003 7.73833 20.6124 7.84103 20.8105 7.96635C21.0087 8.09168 21.172 8.25181 21.3007 8.44676C21.4293 8.64171 21.4936 8.88888 21.4936 9.18827C21.4936 9.42499 21.4467 9.64257 21.3528 9.841C21.259 10.0394 21.1234 10.2118 20.9461 10.358C20.7688 10.5042 20.555 10.6191 20.3047 10.7026C20.0544 10.7862 19.7763 10.8279 19.4704 10.8279C19.0393 10.8279 18.676 10.7653 18.3806 10.6399C18.0851 10.5146 17.8574 10.3963 17.6975 10.2849C17.5793 10.2152 17.5132 10.1282 17.4993 10.0238C17.4854 9.91933 17.5167 9.80793 17.5932 9.68957L17.7183 9.50158C17.7948 9.39018 17.88 9.32752 17.9738 9.31359C18.0677 9.29967 18.1807 9.32752 18.3128 9.39714C18.4379 9.46677 18.5996 9.54509 18.7977 9.63213C18.9959 9.71916 19.2305 9.76267 19.5017 9.76267C19.7311 9.76267 19.9119 9.71394 20.044 9.61646C20.1761 9.51899 20.2421 9.3867 20.2421 9.2196C20.2421 9.07339 20.1778 8.95677 20.0492 8.86973C19.9206 8.7827 19.7572 8.70264 19.559 8.62953C19.3609 8.55642 19.1488 8.4781 18.9229 8.39455C18.6969 8.311 18.4848 8.20656 18.2867 8.08123C18.0885 7.95591 17.9252 7.79577 17.7965 7.60082C17.6679 7.40587 17.6036 7.15523 17.6036 6.84887C17.6036 6.59126 17.6575 6.3615 17.7652 6.15959C17.873 5.95768 18.019 5.79058 18.2033 5.65829C18.3875 5.526 18.603 5.42505 18.8499 5.35542C19.0967 5.2858 19.3591 5.25099 19.6372 5.25099ZM38.6534 3.28757C38.9454 3.28757 39.0914 3.43378 39.0914 3.7262V5.87761C39.0914 5.94723 39.0897 6.00815 39.0862 6.06037C39.0827 6.11259 39.0775 6.15959 39.0706 6.20136C39.0636 6.2501 39.0601 6.29188 39.0601 6.32669H39.081C39.1436 6.20136 39.2322 6.0743 39.3469 5.94549C39.4616 5.81669 39.5972 5.70007 39.7537 5.59563C39.9101 5.49119 40.0874 5.40764 40.2855 5.34498C40.4837 5.28232 40.6975 5.25098 40.9269 5.25098C41.5179 5.25098 41.975 5.41112 42.2983 5.7314C42.6216 6.05167 42.7833 6.56689 42.7833 7.27707V10.264C42.7833 10.5564 42.6373 10.7026 42.3453 10.7026H41.8968C41.6048 10.7026 41.4588 10.5564 41.4588 10.264V7.5486C41.4588 7.22137 41.4032 6.95853 41.2919 6.7601C41.1807 6.56167 40.9582 6.46246 40.6245 6.46246C40.395 6.46246 40.1847 6.50771 39.9935 6.59823C39.8023 6.68874 39.6407 6.81232 39.5086 6.96898C39.3765 7.12563 39.2739 7.31188 39.2009 7.52772C39.1279 7.74355 39.0914 7.97679 39.0914 8.22744V10.264C39.0914 10.5564 38.9454 10.7026 38.6534 10.7026H38.205C37.9129 10.7026 37.7669 10.5564 37.7669 10.264V3.7262C37.7669 3.43378 37.9129 3.28757 38.205 3.28757H38.6534ZM31.7242 5.37631C32.0093 5.37631 32.1518 5.52252 32.1518 5.81495V10.264C32.1518 10.5564 32.0093 10.7026 31.7242 10.7026H31.2654C30.9803 10.7026 30.8378 10.5564 30.8378 10.264V5.81495C30.8378 5.52252 30.9803 5.37631 31.2654 5.37631H31.7242ZM22.8753 5.37631C23.1395 5.37631 23.296 5.50511 23.3446 5.76273L24.1998 8.87495C24.2137 8.95154 24.2259 9.02117 24.2363 9.08383C24.2467 9.14649 24.2589 9.20567 24.2728 9.26137C24.2867 9.32403 24.2972 9.38322 24.3041 9.43892H24.325C24.3319 9.38322 24.3423 9.32403 24.3563 9.26137C24.3702 9.20567 24.3823 9.14649 24.3928 9.08383C24.4032 9.02117 24.4188 8.95154 24.4397 8.87495L25.3366 5.76273C25.3853 5.51208 25.5452 5.38675 25.8163 5.38675H26.2126C26.4699 5.38675 26.6298 5.51208 26.6924 5.76273L27.5788 8.87496C27.5997 8.95154 27.6153 9.02117 27.6257 9.08383C27.6362 9.14649 27.6483 9.20567 27.6622 9.26137C27.6762 9.32404 27.6866 9.38322 27.6935 9.43892H27.7144C27.7213 9.38322 27.7318 9.32404 27.7457 9.26137C27.7596 9.20567 27.7718 9.14649 27.7822 9.08383C27.7926 9.02117 27.8083 8.95154 27.8291 8.87496L28.6739 5.76273C28.7364 5.50512 28.8963 5.37631 29.1536 5.37631H29.6333C29.7932 5.37631 29.9045 5.42157 29.9671 5.51208C30.0296 5.60259 30.0401 5.72095 29.9983 5.86717L28.6321 10.3371C28.5626 10.5808 28.3992 10.7026 28.142 10.7026H27.4432C27.179 10.7026 27.0157 10.5773 26.9531 10.3266L26.15 7.66348C26.1292 7.59386 26.1118 7.52424 26.0979 7.45461C26.084 7.38498 26.0701 7.32232 26.0562 7.26662C26.0423 7.20396 26.0318 7.14478 26.0249 7.08908H26.004C25.9901 7.14478 25.9762 7.20396 25.9623 7.26662C25.9484 7.32232 25.9345 7.38498 25.9206 7.45461C25.9067 7.52423 25.8893 7.59386 25.8685 7.66348L25.0654 10.3266C25.0029 10.5773 24.8429 10.7026 24.5857 10.7026H23.8661C23.6158 10.7026 23.4559 10.5808 23.3864 10.3371L22.0097 5.86717C21.968 5.72095 21.9802 5.60259 22.0462 5.51208C22.1123 5.42157 22.2218 5.37631 22.3747 5.37631H22.8753Z"
                  ></path>
                  <path
                    fill="url(#paint0_linear_7668_162137)"
                    d="M4.01172 13.8153C6.7812 15.1398 10.1991 14.4843 12.264 12.024C14.7114 9.10783 14.3313 4.76044 11.4149 2.31381L9.47617 4.62388C11.7546 6.53531 12.0516 9.9317 10.1395 12.2099C8.61489 14.0265 6.10469 14.6331 4.01172 13.8153Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#paint1_linear_7668_162137)"
                    d="M4.01172 13.8153C6.7812 15.1398 10.1991 14.4843 12.264 12.024C12.5169 11.7227 12.7395 11.4061 12.9323 11.0779C13.2584 9.05153 12.5413 6.90974 10.8544 5.4946C10.4259 5.13505 9.96192 4.84538 9.47647 4.62418C11.7546 6.53564 12.0515 9.93183 10.1395 12.21C8.61489 14.0265 6.10469 14.6331 4.01172 13.8153Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#paint2_linear_7668_162137)"
                    d="M9.95536 1.37128C7.1859 0.0467476 3.76798 0.702241 1.7031 3.16257C-0.744348 6.07872 -0.364209 10.4261 2.55216 12.8727L4.49093 10.5627C2.21251 8.65124 1.91554 5.25485 3.8276 2.9766C5.35221 1.16002 7.86241 0.553484 9.95536 1.37128Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#paint3_linear_7668_162137)"
                    d="M9.95631 1.37131C7.18684 0.046778 3.76893 0.702271 1.70404 3.1626C1.45115 3.46393 1.22854 3.78055 1.03572 4.10874C0.709621 6.13508 1.42674 8.27686 3.11359 9.69201C3.54218 10.0515 4.00612 10.3412 4.49156 10.5624C2.21344 8.65096 1.91656 5.25478 3.82854 2.97663C5.35315 1.16005 7.86335 0.553514 9.95631 1.37131Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="5.12999"
                    x2="6.28442"
                    y1="10.964"
                    x1="9.21322"
                    id="paint0_linear_7668_162137"
                  >
                    <stop stop-color="#EF2131"></stop>
                    <stop stop-color="#FECF2C" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="14.8368"
                    x2="6.46134"
                    y1="5.94837"
                    x1="11.5961"
                    id="paint1_linear_7668_162137"
                  >
                    <stop stop-color="#FBC52C"></stop>
                    <stop stop-color="#F87130" offset="0.26392"></stop>
                    <stop stop-color="#EF52E2" offset="0.5608"></stop>
                    <stop stop-color="#661EEC" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="10.0783"
                    x2="7.61717"
                    y1="4.36947"
                    x1="4.81044"
                    id="paint2_linear_7668_162137"
                  >
                    <stop stop-color="#78F6D8"></stop>
                    <stop stop-color="#77D1F6" offset="0.26571"></stop>
                    <stop stop-color="#70A4F3" offset="0.55447"></stop>
                    <stop stop-color="#661EEC" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="0.3402"
                    x2="7.49887"
                    y1="9.19779"
                    x1="2.40491"
                    id="paint3_linear_7668_162137"
                  >
                    <stop stop-color="#536EED"></stop>
                    <stop stop-color="#54C3EC" offset="0.24666"></stop>
                    <stop stop-color="#64D769" offset="0.5642"></stop>
                    <stop stop-color="#FECF2C" offset="1"></stop>
                  </linearGradient>
                  <clipPath id="clip0_7668_162137">
                    <rect
                      transform="translate(0.0898438 0.700043)"
                      fill="white"
                      height="13.8"
                      width="45.3205"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <section className="latestContainer">
        <header className="carouselHeader">
          <h1>RECOMMENDED</h1>
          <div className="arrowContainer">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </header>

        <Slider ref={sliderRef} {...settings}>
          <div className="latestSlider">
            <div className="image-container">
              <img src={howsweet} className="product-image" alt="How Sweet" />
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-info">
              <h1>HOW SWEET</h1>
              <h1>NEW JEANS</h1>
            </div>
            <div className="product-info">
              <h3>209KR</h3>
            </div>
          </div>

          <div className="latestSlider">
            <div className="image-container">
              <img src={whiplash} className="product-image" alt="Whiplash" />
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-info">
              <h1>WHIPLASH</h1>
              <h1>AESPA</h1>
            </div>
            <div className="product-info">
              <h3>259KR</h3>
            </div>
          </div>

          <div className="latestSlider">
            <div className="image-container">
              <img src={crazy} className="product-image" alt="Crazy" />
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-info">
              <h1>CRAZY</h1>
              <h1>LE SSERAFIM</h1>
            </div>
            <div className="product-info">
              <h3>229KR</h3>
            </div>
          </div>

          <div className="latestSlider">
            <div className="image-container">
              <img
                src={loseyourself}
                className="product-image"
                alt="Lose Yourself"
              />
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-info">
              <h1>LOSE YOURSELF</h1>
              <h1>KISS OF LIFE</h1>
            </div>
            <div className="product-info">
              <h3>299KR</h3>
            </div>
          </div>

          <div className="latestSlider">
            <div className="image-container">
              <img
                src={loseyourself}
                className="product-image"
                alt="Lose Yourself"
              />
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-info">
              <h1>LOSE YOURSELF</h1>
              <h1>KISS OF LIFE</h1>
            </div>
            <div className="product-info">
              <h3>299KR</h3>
            </div>
          </div>

          <div className="latestSlider">
            <div className="image-container">
              <img
                src={loseyourself}
                className="product-image"
                alt="Lose Yourself"
              />
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-info">
              <h1>LOSE YOURSELF</h1>
              <h1>KISS OF LIFE</h1>
            </div>
            <div className="product-info">
              <h3>299KR</h3>
            </div>
          </div>

          <div className="latestSlider">
            <div className="image-container">
              <img
                src={loseyourself}
                className="product-image"
                alt="Lose Yourself"
              />
              <button className="add-to-cart">Add to Cart</button>
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
    </section>
  );
}