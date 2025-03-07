import React from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAward, faPersonWalkingArrowLoopLeft,
     faBell, faThumbsUp, faStar, faCartShopping, faMagnifyingGlass, faUser,
     faPhoneVolume
    } from "@fortawesome/free-solid-svg-icons";
import '../scss/login.scss'

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const LoginModal = ({ show, close }) => {
    return (
        <Modal show={show} onHide={close} animation={false}>
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate={show ? "visible" : "hidden"}
                exit="exit"
            >
                <Modal.Body>
                    <div className="login-body">
                        <div className="header-modal">
                            <div className="title">
                                <p className="title_1">
                                Sign in / Register
                                </p>
                                <p className="title_2">
                                All data will be encrypted
                                </p>
                            </div>
                            <div className="icon-header d-flex">
                                <div className="icon_1">
                                    <div  className="icon">
                                    <FontAwesomeIcon icon={faTruck} className="bhr_01" size="2x"/>
                                    </div>
                                    <div className="text-group">
                                        <p className="pr_01">
                                            Free shipping
                                        </p>
                                        <p>
                                            on all orders
                                        </p>
                                    </div>
                                   
                                </div>
                                <div className="icon_2">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} className="bhr_02" size="2x"/>
                                    </div>
                                    <div className="text-group">
                                        <p className="pr_02">
                                            Free Returns
                                        </p>
                                        <p>
                                            Up to 90days
                                        </p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="input-values">
                            <div className="d-flex form flex-column">
                                <label className="lbf_email">Email or phone number</label>
                                <input className="ipf_email" />
                                <label className="lbf_password">Password</label>
                                <input className="ipf_password" type="password" autoComplete={false} autoCapitalize={false}/>
                                <button className="btnf_login">Continue</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </motion.div>
        </Modal>
    );
};

export default LoginModal;
