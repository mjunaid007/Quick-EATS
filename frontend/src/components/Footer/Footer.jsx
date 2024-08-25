import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> Quick EATS is your ultimate online food ordering destination,
            offering a seamless and speedy way to satisfy your cravings. Browse
            through an extensive selection of your favorite local restaurants
            and cuisines, from comforting classics to exotic delights. With just
            a few clicks, enjoy hassle-free ordering, secure payment options,
            and fast delivery straight to your door. Quick EATS ensures a
            delicious meal is always within reach, whether you're dining at
            home, at the office, or on the go.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Quick EATS COMPANY</h2>
            <h2>JUNAID COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@quickeats.com</li>
                <li>contact@junaid.com</li>

            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © QuickEats.com - All Right Reserved. BY M JUNAID NASIR.</p>
    </div>
  )
}

export default Footer
