import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, title, Img, price }) => {
    const navigate = useNavigate()
    return (

        <div className="card card-b" onClick={() => navigate(`/course/${id}`)}>
            <img src={Img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <span className='card-text'>{price}</span>

            </div>
        </div>

    )
}

export default Card