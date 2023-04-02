import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { toast } from 'react-toastify'



const Header = () => {
    const params = useParams()
    const auth = getAuth();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/");
        toast.success("Successfully Logout");
    };
    const { categoryName } = params;
    return (
        <>

            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">

                    <Link to="/"><img src={Logo} className='Logo' /></Link>

                    <h2 className='Company-Name'>
                        PRAMIT EDUCATION
                    </h2>

                    {
                        auth.currentUser ? (<button className="btn signinbutton" onClick={logoutHandler}> Logout</button>) : (
                            categoryName === 'signin' ? (<Link to={'/auth/signup'}><button type="button" class="btn signinbutton">Register</button></Link>) : (<Link to={'/auth/signin'}><button type="button" class="btn signinbutton">Login</button></Link>)
                        )

                    }

                </div>
            </nav >

            <nav className="navbar navbar-expand-lg nav-2">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/course/8523002123">Web Development</Link></li>
                                    <li><Link className="dropdown-item" to="/course/5411097854">Machine Learning</Link></li>
                                    <li><Link className="dropdown-item" to="/course/2675990354">App Development</Link></li>
                                    <li><Link className="dropdown-item" to="/course/6744456347">C Programming</Link></li>
                                    <li><Link className="dropdown-item" to="/course/9867435674">C++ Programming</Link></li>
                                    <li><Link className="dropdown-item" to="/course/8766342133">Python Programming</Link></li>



                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="">More</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;