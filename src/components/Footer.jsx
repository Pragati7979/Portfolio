import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = (props) => {
    
    return <div className="footer-link">
        {props.phrase}
        <Link to={props.toAdress} className="footer-link-element">
            {props.link}
        </Link>
    </div>
}

export default Footer