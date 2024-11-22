import "./displayconfirmation.css";

export default function DisplayConfirmation() {
  return (
    <>
      <section className="confirmationPageContainer">
        <div className="confirmationHeader">
          <h1>Thank You for Your Order!</h1>
          <p>
            Your order has been successfully placed. We'll send you a
            confirmation email shortly.
          </p>
        </div>

        <div className="orderSummaryContainer">
          <div className="orderDetailsCard">
            <h2>Order Details</h2>
            <div className="orderDetailsRow">
              <span>Order Number</span>
              <span>#123456789</span>
            </div>
            <div className="orderDetailsRow">
              <span>Order Date</span>
              <span>November 22, 2024</span>
            </div>
            <div className="orderDetailsRow">
              <span>Status</span>
              <span>Processing</span>
            </div>
          </div>

          <div className="shippingDetailsCard">
            <h2>Shipping Information</h2>
            <div className="shippingDetailsRow">
              <span>Name</span>
              <span>John Doe</span>
            </div>
            <div className="shippingDetailsRow">
              <span>Address</span>
              <span>123 Main St, New York, NY, 10001</span>
            </div>
            <div className="shippingDetailsRow">
              <span>Shipping Method</span>
              <span>Standard Shipping</span>
            </div>
          </div>
          <div className="orderSummaryCard">
            <h2>Order Summary</h2>
            <div className="summaryRow">
              <span>Price of Products</span>
              <span>478KR</span>
            </div>
            <div className="summaryRow">
              <span>Shipping</span>
              <span>50KR</span>
            </div>
            <div className="totalRow">
              <span>Total</span>
              <span>528KR</span>
            </div>
            <button className="continueShoppingBtn">Continue Shopping</button>
          </div>
        </div>
      </section>
    </>
  );
}
