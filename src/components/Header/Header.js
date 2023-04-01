import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} className='Logo' />
                    </a>
                    <h2 className='Company-Name'>
                        PRAMIT EDUCATION
                    </h2>
                    <button type="button" class="btn btn-primary">Login/Register</button>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg nav-2">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Web Development</Link></li>
                                    <li><Link className="dropdown-item" to="#">Machine Learning</Link></li>
                                    <li><Link className="dropdown-item" to="#">App Development</Link></li>
                                    <li><Link className="dropdown-item" to="#">C++</Link></li>
                                    <li><Link className="dropdown-item" to="#">Python</Link></li>
                                    <li><Link className="dropdown-item" to="#">Java</Link></li>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="contact">More</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;