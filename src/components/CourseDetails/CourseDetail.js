import React, { useEffect, useState } from 'react'
import './CourseDetail.css'
import { useParams } from 'react-router-dom'
import { Coursedata } from '../../Course-data'
import { Affordable_C_data } from '../../Course-data'

const CourseDetail = () => {
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
                <div class="p-4 p-md-5 mb-4 rounded text-bg-dark d-flex justify-content-between align-items-center  contain">
                    <div class="col-md-6 px-0 ">
                        <h1 class="display-4 fst-italic">{data.title}</h1>
                        <p class="lead my-3">{data.description}</p>
                        <p class="lead mb-0">Language: {data.Language}</p>
                    </div>
                    <div>

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className='course-img' />
                    </div>
                </div>


            </main>
        </>
    )
}

export default CourseDetail