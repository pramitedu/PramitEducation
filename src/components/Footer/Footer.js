import React from 'react'

import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4 mt-5">
                <h3>
                    PRAMIT EDUCATION
                </h3>
                <h6>Email: educationpramit@gmail.com</h6>
                <h6>Phone: 9155045578, 7905558336</h6>
                <div className="d-flex flex-row p-2">

                    <p className="me-4" title="Linkedin">
                        <Link to="about" className='FooterLinks'>
                            About Us
                        </Link>
                    </p>
                    <p className="me-4" title="Linkedin">
                        <Link to="contact" className='FooterLinks'>
                            Contact Us
                        </Link>
                    </p>
                    <p className="me-4" title="Linkedin">
                        <Link to="privacy-policy" className='FooterLinks'>
                            Privacy Policy
                        </Link>
                    </p>
                    <p className="me-4" title="Linkedin">
                        <Link to="" className='FooterLinks'>
                            Terms and Conditions
                        </Link>
                    </p>

                </div>
                <div className="d-flex flex-row p-2">

                    <p className="me-4" title="Youtube">
                        <Link to="https://youtube.com/@PramitEducation-zn6bv">
                            <AiFillYoutube color="red" size={30} />
                        </Link>

                    </p>
                    <p className="me-4" title="Instagram">
                        <Link to="https://instagram.com/pramiteducation?igshid=ZDdkNTZiNTM=">
                            <AiFillInstagram color="#ff3399" size={30} />
                        </Link>

                    </p>

                </div>
            </div>
        </>
    )
}


export default Footer