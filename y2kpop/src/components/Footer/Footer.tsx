import "./footer.css";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerNav">
          <h3>CUSTOMER SUPPORT</h3>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Refund policy</a>
            </li>
          </ul>
        </div>
        <div className="footerContact">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Music Ave, Melody City</p>
        </div>
        <div className="footerSocial">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
