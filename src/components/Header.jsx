import React from "react";
import './Header.css'

const Header = (props) => {
    
    return <div className="header-container">
        <h1>{props.heading}</h1>
        <p>{props.details}</p>
        
    </div>
}

export default Header