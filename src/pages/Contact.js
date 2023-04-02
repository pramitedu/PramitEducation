import React, { useRef, useState, useContext } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import Header from '../components/Header/Header';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_sf48dy8', 'template_c5fiq1e', formRef.current, 'XrHmUDe0cxMqE8RR4')
            .then(() => {
                toast.success("Message Send Successfully")
                navigate('/')

            }, (error) => {
                console.log(error.text);
                setDone(true)
            });
    }
    return (
        <>
            <Header />
            <div className='c'>
                <div className="c-wrapper">
                    <div className="c-right">
                        <p className="c-desc">
                            Message For Course Purchase or any Query
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='user_name' />
                            <br />
                            <input type="text" placeholder='Subject' name='user_subject' />
                            <br />
                            <input type="email" placeholder='Email' name='user_email' />
                            <textarea rows='5' placeholder='Message' name='message' />
                            <button>Submit</button>
                            {done && "Thank you for messaging"}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact