import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./checkout.css";

export default function Checkout() {
  return (
    <>
      <section className="checkout">
        <CheckoutForm />
        <CheckoutItems />
      </section>
      <Footer />
    </>
  );
}
