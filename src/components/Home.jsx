import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import './Home.css'
import homeAnime from './../assets/home_anime.gif'
import Modal from "./Modal"
const Home = () => {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 2400)
        
    },[])

    const showModalHandler = ()=> {
        setShowModal(false)
    }

    return <div className="home-container">
        {showModal && <Modal showModalHandler={showModalHandler}/>}
        {/* <Modal/> */}
        <div className="header-text">
            <h1>Welcome to my portfolio!</h1>
            <h2>This is Pragati Srivastava, a full stack developer</h2>
        </div>
        <div className="head-btns">
            <Link to="/about" className="btn btn-white">
                <p className="btn-text">Know more about me</p>
            </Link>
            <Link to="/contact" className="btn btn-transparent">
                <p className="btn-text">Connect with me</p>
            </Link>

        </div>
        <div className="splash-image">
            <img src={homeAnime} alt="animation" className="home-anime"/>
        </div>
    </div>
}

export default Home