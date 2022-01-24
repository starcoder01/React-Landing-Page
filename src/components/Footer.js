import React from "react";
import "./Footer.css";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer-text">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsLinkedin />
        <BsGithub />
      </div>
      <div className="footer">
        <div className="updates">
          <div>
            <p>About</p>
            <p>Press</p>
            <p>Privacy</p>
            <p>Policy</p>
            <p>Contact</p>
          </div>

          <div>
            <p>Terms</p>
            <p>Accessibility</p>
            <p>Transparency</p>
            <p>Locations</p>
            <p>Goals</p>
          </div>
        </div>

        <div>
          <h3>For any queries, dm us at @starcoder01.gmail.com</h3>
        </div>
        <div className="contact">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <br />
            <input type="text" placeholder="First Name" />
            <br />
            <input type="text" placeholder="Last Name" />
            <br />
            <input type="phone" placeholder="Contact Number" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="bye">Made with love and dedication by @starcoder01</div>
    </>
  );
}

export default Footer;
