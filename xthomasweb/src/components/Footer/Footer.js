import React from "react";
import './Footer.css'

function Footer(){
    return(
        <>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-row">
                        <div className="footer-column">
                            <h2>Socials</h2>
                            <p>LinkedIn</p>
                            <p>Instagram</p>
                            <p>artstation</p>
                        </div>
                        <div className="footer-column">
                            <h2>Contact Me</h2>
                            <p>Email: xien.thomas@gmail.com</p>
                            <p>Phone: (832)725-0748</p>
                        </div>
                    </div>
                    <div className="footer-year-built">

                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;