import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
            <h1>Sunnyside</h1>
            <ul id='footerLinks'>
                <li>about</li>
                <li>testimonials</li>
                <li>gallery</li>
            </ul>
            <ul id='socialmedias'>
                <li>
                    <img src="/images/icon-facebook.svg" />
                </li>
                <li><img src="/images/icon-instagram.svg" /></li>
                <li><img src="/images/icon-pinterest.svg" /></li>
                <li><img src="/images/icon-twitter.svg" /></li>
            </ul>
            </div>
        </div>
    )
}

export default Footer;