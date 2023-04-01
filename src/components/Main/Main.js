import React from 'react'
import BookImage from '../../assets/Book-icon.jpg'
import EduImage from '../../assets/Edu-icon.jpg'
import PayImage from '../../assets/card-icon.jpg'
import './Main.css'
// import CourseData from '../../Course-data'
import { Coursedata, Affordable_C_data } from '../../Course-data'
import Card from '../Card/Card'

const Main = () => {
    return (
        <>

            <div className='container-fluid'>


                <div className='Main-1 mt-5' >
                    <div className='Main-heading'>
                        <h1 className='heading'>"There are no secrets to success. It is the result of preparation,<br /> hard work, and learning from failure."</h1>
                    </div>
                    <div className='home-cat row d-flex align-items-center justify-content-space-evenly Main-section'>

                        <img src={BookImage} className="Main-icons" />
                        <img src={EduImage} className="Main-icons" />
                        <img src={PayImage} className="Main-icons" />
                    </div>
                </div>

                <div className='Main-2 mt-5'>
                    <div className='Main-heading'>
                        <h1 className='heading'>Popular Programs</h1>
                        <h4 className='sub-heading'>Most in demand and watched by people.</h4>
                    </div>

                    <div className='Cards-wrapper mt-5'>
                        {
                            Coursedata.map((d) => (
                                <Card key={d.id} id={d.id} title={d.title} Des={d.description} Img={d.image} price={d.Price} />
                            ))
                        }
                    </div>

                </div>
                <div className='Main-3 mt-5'>
                    <div className='Main-heading'>
                        <h1 className='heading'>Affordable Programs</h1>
                        <h4 className='sub-heading'>Quality Education at Affordable Prices.</h4>
                    </div>

                    <div className='Cards-wrapper mt-5'>
                        {
                            Affordable_C_data.map((d) => (
                                <Card key={d.id} id={d.id} title={d.title} Des={d.description} Img={d.image} price={d.Price} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main