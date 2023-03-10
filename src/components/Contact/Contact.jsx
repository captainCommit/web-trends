/* 
Vasu Chopra
Mohmed Sajid
*/
import React from "react";
import "./css/Contact.css";

function Contact() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer container">
          <div className="footer-info">
            <a href="/#" className="logo">
              PizzaMakers
            </a>
            <h1></h1>
            <p>
            We simplify the food cooking process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience.
            </p>
          </div>

          <div className="footer-info">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <h5>Our Location</h5>
              <span>06 Thuderbird drive, Cambridge</span>
            </div>
            <div className="contact-info">
              <h5>Phone</h5>
              <a href="tel:555-555-5555">555-555-5555</a>
            </div>
            <div className="contact-info">
              <h5>Email</h5>
              <a href="mailto:mshaikh0336@conestogac.on.ca">info@pizzamakers.com</a>
            </div>
            
          </div>

          <div className="footer-info">
            <h4>Quick Links</h4>
            <div className="quick-links contact-info">
              <h5><a href="/">Home</a></h5>
              <h5><a href="/menu">Menu</a></h5>
              <h5><a href="/about-us">About Us</a></h5>
              <h5><a href="/contact-us">Contact Us</a></h5>
            </div>
          </div>
          
          
        </div>
        <div className="copyright">
          <div className="container">
            <span>&copy; FG3 - 8 Web Trends Group Project Fall - 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
