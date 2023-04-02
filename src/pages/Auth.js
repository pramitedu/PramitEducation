import React from 'react'
import { useParams } from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'

const Auth = () => {
    const params = useParams()
    return (
        <>
            {
                params.categoryName === 'signin' ? (<Signin />) : (<Signup />)
            }
        </>
    )
}

export default Auth