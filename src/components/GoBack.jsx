import React from "react";
import homeIconWhite from "./../assets/home_white.png"
import homeIconBlack from "./../assets/home_black.png"
import {useNavigate,useLocation} from "react-router-dom";

import './GoBack.css'

const GoBack = () => {
    let history = useNavigate();
    const handleClick=()=>{
        history("/");
    }
    let loc = useLocation();
    return (
        <button onClick={handleClick}  className={`go-home-btn ${
            loc.pathname==='/'?'white-bkg':'gradient-bkg'
        }
        `}>
            <img
                className="home-icon"
                src={loc.pathname === '/' ? homeIconBlack : homeIconWhite}
                    alt = 'home-icon'

        />
        </button>
    )
}

export default GoBack