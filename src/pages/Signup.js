import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Layout from '../components/Layout/Layout'
import { BsFillEyeFill } from 'react-icons/bs'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from '../firebase.config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify';

import OAuth from '../components/OAuth'
import '../styles/SignUp.css'
import signupImage from '../assets/signup.svg'
import Header from '../components/Header/Header';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))

    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            updateProfile(auth.currentUser, { displayName: name })
            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            navigate('/')
            toast.success('Signup Successfully')

        } catch (error) {
            console.log(error);

            toast.error('Something went Wrong')
        }
    }
    return (
        <>
            <Header />
            <div className="row signup-container">
                <div className="col-md-6 signup-container-col-1">
                    <img src={signupImage} alt="welcome" />
                </div>
                <div className='col-md-6 signup-container-col-2'>
                    <form onSubmit={onSubmitHandler}>
                        <h3 className='mt-2 text-center'>Sign Up</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                            <input type="text" value={name} onChange={onChange} className="form-control" id="name" aria-describedby="nameHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={onChange} className="form-control" id="password" />
                            <span>
                                Show Password <BsFillEyeFill className='ms-2 text-danger' style={{ cursor: 'pointer' }} onClick={() => { setShowPassword((prevState) => !prevState) }} />
                            </span>
                        </div>

                        <button type="submit" className="btn signup-button">Sign up</button>

                        <span className='ms-4'>Already User? </span>{" "}
                        <Link to='/signin'>Login</Link>
                        <div className='mt-3'>
                            <OAuth />
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup