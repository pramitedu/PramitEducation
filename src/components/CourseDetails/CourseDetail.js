import React, { useEffect, useState } from 'react'
import './CourseDetail.css'
import { useParams } from 'react-router-dom'
import { Coursedata } from '../../Course-data'
import { Affordable_C_data } from '../../Course-data'
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare } from 'react-icons/fa'

const CourseDetail = () => {
    const auth = getAuth()
    const [data, setData] = useState("")
    const params = useParams()
    const { coursesId } = params



    useEffect(() => {
        const data = Coursedata.find((val) => {
            console.log(val.id);
            return coursesId == val.id
        })
        if (data) {
            setData(data)

        } else {
            const data = Affordable_C_data.find((val) => {
                console.log(val.id);
                return coursesId == val.id
            })
            setData(data)
        }
    }, [coursesId, Coursedata])


    return (
        <>

            <main class="container mt-3">
                <div class="p-4 p-md-5 mb-4 rounded text-bg-dark d-flex justify-content-between align-items-center contain">
                    <div class="col-md-6 px-0 ">
                        <h1 class="display-4 fst-italic course-title">{data.title}</h1>
                        <p class="lead my-3 course-des">{data.description}</p>
                        <p class="lead mb-0 course-language">Language: {data.Language}</p>
                    </div>
                    <div>

                        <img src={data.image} className='course-img' />
                    </div>
                </div>
            </main>
            <div className='d-flex justify-content-evenly align-items-center course-s'>
                <div className="card card-b mb-2 mx-4 course-syllabus">
                    <div className="card-body" >
                        <h4 className="card-title">What you'll learn</h4>
                        <p>{data.Syllabus}</p>
                    </div>
                </div>
                <div className="card card-b mb-2 mx-4">
                    <div className="card-body" >
                        <h6 className="card-title">Live Online Classes</h6>
                        <h6 className="card-title">Doubt Sessions</h6>
                        <h6 className="card-title">Courses Notes</h6>
                        <h6 className="card-title">Assignments</h6>
                        <h6 className="card-title">Interview Preparation</h6>
                        <h6 className="card-title">Resume building</h6>
                        <h6 className="card-title">Career guidance</h6>

                        <h4>{data.Price}</h4>
                        {
                            auth.currentUser ? (

                                <Link to='http://wa.me/919155045578'><button type="button" class="btn btn-success"><FaWhatsappSquare enableBackground='green' size={30} />Message us on Whatsapp</button></Link>) : (<Link to="/auth/signin"><button type="submit" className="btn signinbutton">Login</button> </Link>)
                        }

                    </div>
                </div>

            </div>



        </>
    )
}

export default CourseDetail