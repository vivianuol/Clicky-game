import React from "react";
import "./style.css";
import '/images/logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <span>pengsi 2019</span>
            <img src={require("/images/logo.svg")} />
        </footer>
    );
}

export default Footer;