import "./checkoutitems.css";
import howsweet from "../../assets/products/howsweetCover.jpg";
import { useState } from "react";

export default function CheckoutItems() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <section className="checkoutSummaryContainer">
        <div className="checkoutSummaryHeader">
          <h1>SUMMARY</h1>
        </div>

        <div className="checkoutSummaryCards">
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

        <div className="discountSection">
          <input
            type="text"
            placeholder="Enter discount code"
            className="discountInput"
          />
          <button className="applyDiscountBtn">Apply</button>
        </div>

        <div className="priceSummary">
          <div className="priceRow">
            <span>Price of Products</span>
            <span>478KR</span>
          </div>
          <div className="priceRow">
            <span>Shipping</span>
            <span>50KR</span>
          </div>
          <div className="totalRow">
            <h2>Total</h2>
            <h2>528KR</h2>
          </div>
        </div>
      </section>
    </>
  );
}
