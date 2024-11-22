import React, { useState } from "react";
import "./checkoutform.css";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const [shippingMethod, setShippingMethod] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="checkoutFormContainer">
      <h2>Checkout</h2>
      <form className="checkoutForm">
        <div className="formField contact">
          <h1>CONTACT</h1>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="delivery">
          <h1>DELIVERY</h1>
          <div className="formField name">
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              required
            />
            <input type="text" id="lastName" placeholder="Last name" required />
          </div>
          <div className="formField address">
            <input type="text" id="address" placeholder="Address" required />
          </div>
          <div className="formField postal">
            <input
              type="text"
              id="postalCode"
              placeholder="Postal code"
              required
            />
            <input type="text" id="city" placeholder="City" required />
          </div>
          <div className="formField phone">
            <input type="tel" id="phone" placeholder="Phone" required />
          </div>
        </div>

        {/* Shipping Method */}
        <div>
          <h1>SHIPPING METHOD</h1>
          <div className="radioGroup">
            <div className="shippingRadio">
              <p className="shippingCompany">POSTNORD</p>
              <p>ESTIMATED ≈ 3-5 WEEKDAYS</p>
              <input
                type="radio"
                value="postnord"
                checked={shippingMethod === "postnord"}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
            </div>
            <div className="shippingRadio">
              <p className="shippingCompany">DHL</p>
              <p>ESTIMATED ≈ 3-5 WEEKDAYS</p>
              <input
                type="radio"
                value="dhl"
                checked={shippingMethod === "dhl"}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
            </div>
            <div className="shippingRadio">
              <p className="shippingCompany">BRINGA</p>
              <p>ESTIMATED ≈ 3-5 WEEKDAYS</p>
              <input
                type="radio"
                value="bringa"
                checked={shippingMethod === "bringa"}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h1>PAYMENT METHOD</h1>
          <div className="shippingRadio">
            <p>Credit Card (Visa, Mastercard)</p>
            <input
              type="radio"
              value="creditcard"
              checked={paymentMethod === "creditcard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="shippingRadio">
            <p>AMEX</p>
            <input
              type="radio"
              value="amex"
              checked={paymentMethod === "amex"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="shippingRadio">
            <p>KLARNA</p>
            <input
              type="radio"
              value="klarna"
              checked={paymentMethod === "klarna"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="shippingRadio">
            <p>SWISH</p>
            <input
              type="radio"
              value="swish"
              checked={paymentMethod === "swish"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </div>

        {/* Conditional Payment Forms */}
        {paymentMethod === "creditcard" && (
          <div className="formField">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              required
            />
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              placeholder="Name on card"
              required
            />
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="CVC" required />
          </div>
        )}

        {paymentMethod === "amex" && (
          <div className="formField">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              required
            />
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              placeholder="Name on card"
              required
            />
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="CVC" required />
          </div>
        )}

        {paymentMethod === "klarna" && (
          <div className="formField">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              required
            />
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              placeholder="Name on card"
              required
            />
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="CVC" required />
          </div>
        )}

        {paymentMethod === "swish" && (
          <div className="formField">
            <label htmlFor="swishPhone">NUMBER</label>
            <input type="tel" id="swishPhone" placeholder="Phone" required />
          </div>
        )}

        {/* Submit Button */}
        <div className="formActions">
          <button type="submit" onClick={() => navigate("/confirmation")}>
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
