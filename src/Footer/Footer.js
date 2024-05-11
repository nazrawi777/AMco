import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    
      <div className="kl">
      <img src="cp.png" alt="Your Image" class="image29"/>
      
     <div className="container09">
      
     <div className="contact">
  <h2>Contact Us</h2>
  <div className="contact-form">
    <div className="input-row">
      <div className="input-box">
        <input type="text" id="name" name="name" placeholder="Name" />
      </div>
    </div>
    <div className="input-row">
      <div className="input-box">
        <input type="text" id="email" name="email" placeholder="Email" />
      </div>
      <div className="input-box">
        <input type="text" id="phone" name="phone" placeholder="Phone" />
      </div>
    </div>
    <div className="input-row">
      <div className="input-box">
        <textarea id="message" name="message" placeholder="Message"></textarea>
      </div>
    </div>
    <div className="input-row2">
      <input type="submit" value="Submit" />
    </div>
  </div>
</div>

      <div className="contact1">
        <div className="contact-info">
          <div className='cont'>
          <p>Email </p>
          <p>Phone </p>
          <p>Location </p>
          </div>
          <div className="nu">
          <p>smcakcmak@gmail.com</p>
          <p>+251-9-00-00-00</p>
          <p> kscamcsmcnxcx</p>
          </div>
          
        </div>
      </div>

      <div className="contact2">
        <h2>Socials</h2>
        <div className="social-media">
        <FaInstagram className="icon" />
            <FaFacebook className="icon" />
        </div>
      </div>
      
    </div>
    <div className='si219'></div>
            <button className='lat'> Contact Us</button>
          <h6>Copyrights 2024 © NAMIK Development</h6>
          </div>
  );
};

export default Footer;
