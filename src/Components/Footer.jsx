import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaWhatsapp, FaStore } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
        <footer className="footer-bg text-white">
<h1 className="margin-2">
    Cakap
</h1>
<div className="footer-container">
    <div className="contact">
        <div className="follow margin-2">
        <p className="">Follow Us</p>
        <div className="icons">
        <FaFacebook className="icon" />
      <FaInstagram className="icon" />
      <FaYoutube className="icon" />
      <FaTwitter className="icon" />
      <FaLinkedin className="icon" />
        </div>
        </div>
        <div className="margin-2">
            <p className="">Contact Us</p>
            <div className="contact-us">
            <FaWhatsapp className="icon" />
      <FaStore className="icon" />
            </div>
        </div>
        <div className="margin-2">
            <p className="">Hotline</p>
            <ul>
                <li>6382141342</li>
            </ul>
        </div>
        <div className="margin-2">
            <p className="">Service Hour</p>
            <ul>
                <li>+GST 5.30 0888</li>
            </ul>
        </div>
    </div>
    <div className="">
        <div className="margin-2">
            <p>learn Languages</p>
            <ul>
            <li className="margin-top-1">Tamil</li>
                <li className="margin-top-1" >English</li>
                <li className="margin-top-1">Japanese</li>
                <li className="margin-top-1">Hindi</li>
                <li className="margin-top-1"margin-top-1>Malyalam</li>
            </ul>
        </div>

        <div className="margin-2">
            <p>Products</p>
            <ul>
                <li className="margin-top-1">Private Class for Kids</li>
                <li className="margin-top-1">Private Class for Adults</li>
                <li className="margin-top-1">Group Class</li>
                <li className="margin-top-1">Learning by chat</li>
            </ul>
        </div>
    </div>
    <div className="margin-2">
        <p>Subscription</p>
        <ul>
            <li className="margin-top-1">English Private Pakage</li>
            <li className="margin-top-1" >Japanese Private Pakage</li>
            <li className="margin-top-1">Indonesian Private Pakage</li>
            <li className="margin-top-1">English Club Private Pakage</li>
            <li className="margin-top-1">Japanese Chat Pakage</li>
            <li className="margin-top-1">
                English Chat Pakage
            </li>
            <li className="margin-top-1">Corborate Class Pakage</li>
            
        </ul>
    </div>
</div>
        </footer>
    </div>
  )
}

export default Footer