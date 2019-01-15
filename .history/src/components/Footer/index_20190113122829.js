import React from "react";
import "./style.css";
import './assets/images/logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <span>pengsi 2019</span>
            <img src={require("./assets/images/logo.svg")} alt="logo" />
        </footer>
    );
}

export default Footer;