import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillEyeFill } from 'react-icons/bs'
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth'
import '../styles/SignIn.css'
import LoginImage from '../assets/loginpage.svg'
import Header from '../components/Header/Header'

const Signin = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))

    }
    //loginHandler

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential.user) {
                navigate('/');
                toast.success("Login Successfully");
            }
        } catch (error) {
            toast.error('Invalid Email or Password')
        }
    }


    return (
        <>
            <Header />
            <div className="row m-4 signin-container ">
                <div className="col-md-6">
                    <img src={LoginImage} alt="login" />
                </div>
                <div className='col-md-6 signin-container-col2'>
                    <form onSubmit={loginHandler}>
                        <h4 className=" text-center">Sign In</h4>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={onChange} className="form-control" id="password" />
                        </div>
                        <div className="mb-3 show-pass-forgot">
                            <span>
                                Show Password <BsFillEyeFill className='ms-2 text-danger' style={{ cursor: 'pointer' }} onClick={() => { setShowPassword((prevState) => !prevState) }} />
                            </span>
                            <span><Link to='/forgot-password'>forgot Password</Link></span>
                        </div>
                        <button type="submit" className="btn signinbutton">Sign In</button>
                        <span className='ms-4 new-user'>New User </span>
                        <Link to='/auth/signup'>Sign Up</Link>
                        <OAuth />

                    </form>
                </div>
            </div>

        </>
    )
}

export default Signin