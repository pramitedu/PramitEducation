import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc'



const OAuth = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleAuthHandler = () => {

        const auth = getAuth();
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                const user = result.user;
                navigate('/')
                toast.success("Login Successfully");
            }).catch((error) => {
                toast.error('Problem with Google Auth')
                console.log(error);

            });

    }

    return (
        <div>
            <h3 className='mt-4 text-center'>Sign {location.pathname === "/signup" ? 'Up' : 'in'} With &nbsp;
                <button onClick={onGoogleAuthHandler} style={{
                    outline: "none",
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: "1px solid black",
                    cursor:'pointer'
                }}>

                    <span>
                        <FcGoogle />
                        oogle
                    </span>
                </button>

            </h3>
        </div>
    )
}

export default OAuth