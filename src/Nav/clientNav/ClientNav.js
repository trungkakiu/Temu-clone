import { useState, useEffect } from "react";
import "../../Routes/Public Components/scss/publicHomePage.scss";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAward, faPersonWalkingArrowLoopLeft,
     faBell, faThumbsUp, faStar, faCartShopping, faMagnifyingGlass, faUser,
     faPhoneVolume
    } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../img/E house store logo.jpg';
import banner from '../../img/image.png';
import React from 'react';
import banner2 from '../../img/Screenshot 2025-03-05 222716.png'
import showProducts from "./modal/slideshowproducts";
import Footer from "./modal/footer";
import LoginModal from "./modal/login";


const ClientNav = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hideHeader, setHideHeader] = useState(false);
    const [loginModalup, setloginModal] = useState(false);


    const openModal = (code) =>{
        if(code =="login"){
            setloginModal(true)
        }
    }
    const closeModal = (code) => {
        if (code === "login") {
            setloginModal(false);
        }
    };
    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHideHeader(window.scrollY > lastScrollY);
            } else {
                setHideHeader(false);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    
    return (
        <div className="Container">
           
            <div className={`Header ${hideHeader ? "hide-upHeader" : ""}`}>
            <LoginModal show={loginModalup} close={()=>closeModal("login")}/>
                <div className="upHeader row">
                    <div className="col-4 topic_1">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faTruck} size="2x" color="#ADFFA2" className="me-3" />
                            <div>
                                <p className="p_1 mb-0">Free shipping on all orders</p>
                                <p className="p_2">Limited-time offer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 topic_2">
                        <div className="icon_p2 d-flex align-items-center">
                            <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} size="2x" color="#ADFFA2" className="me-3" />
                            <div>
                                <p className="mb-0 p_3">Free returns</p>
                                <p className="p_4">Up to 90 days*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 topic_3">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faAward} size="2x" color="#ADFFA2" className="me-3" />
                            <div>
                                <p className="mb-0 p_5">12-month warranty</p>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="up2Header row">
                    <div className="col-5 tphd_01 d-flex align-items-center">
                        <a href="/">
                        <img className="lgo me-3" src={logo} alt="Logo" />
                        </a>
                       
                        <div className="content-hd d-flex flex-column flex-md-row align-items-center">
                            <div className="hd d-flex align-items-center me-3">
                                <FontAwesomeIcon icon={faThumbsUp} size="2x" color="white" className="icon-hd-1 me-2" />
                                <p className="ct-hd-1 mb-0">Best sellers</p>
                            </div>

                            <div className="hd d-flex align-items-center me-3">
                                <FontAwesomeIcon icon={faStar} size="2x" color="white" className="icon-hd-2 me-2" />
                                <p className="ct-hd-2 mb-0">5-Star Rated</p>
                            </div>

                            <div className="hd d-flex align-items-center">
                                <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" className="icon-hd-3 me-2" />
                                <p className="ct-hd-3 mb-0">Mega sale</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 tphd_02">
                        <input name="searching-text" className="searching-bar" placeholder="find something"/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="#ADFFA2" className="searching-icon me-3" />
                    </div>
                    <div className="col-4 tphd_03 row">
                        <div className="login-part part-hover d-flex align-items-center ">
                            <FontAwesomeIcon icon={faUser} size="2x" color="white" className="icon-lg-3 me-2" />
                            <div onClick={()=> openModal("login")} className="d-flex flex-column "> 
                                <p  className="login-regis mb-0">Sign in / register</p>
                                <p className="order mb-0">Orders & Account</p>
                            </div>
                        </div>
                        <div className="support-part part-hover d-flex align-items-center ">   
                            <FontAwesomeIcon icon={faPhoneVolume} size="2x" color="white" className="me-2 support-icon" />
                            <p className="mb-0 text-white support-text">Support</p> 
                        </div>
                        <div className="cart-part part-hover d-flex">
                        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" className="cart-icon me-2" />
                        </div>
                    </div>
                   
                </div>
            </div>           
            <div className="content">
                
               
                <footer>
                    <Footer/>
                </footer>
            </div>
            
        </div>
    );
};

export default ClientNav;
