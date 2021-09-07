import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe for daily fresh wallpapers
        </p>
        <p className="footer-subscription-text">Unsubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outine">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>General</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Terms and Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Corporate</Link>
            <Link to="/">Public</Link>
            <Link to="/">Policies</Link>
            <Link to="/">Pricing</Link>
          </div>
          <div className="footer-link-items">
            <h2>Links</h2>
            <Link to="/">Resources</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Development</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              papes
            </Link>
          </div>
          <small className="website-rights">papes c. 2021</small>
          <div className="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
