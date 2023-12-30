import axios from 'axios'
import React ,{useState} from 'react'
import { toast } from 'react-toastify'
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from 'reactstrap'
import base_url from '../api/bootapi'

function Course({ course, update }) {
    //state for storing the data
    const [courses, setCourse] = useState([]);

    //delete api
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`)
            .then((response) => {
                console.log(response);
                toast.success("Course is Deleted")
                update(id); // Call update function after deletion
            })
            .catch((error) => {
                toast.error("Error ! Something went wrong")
            })
    }


    const putUpdateCourse = (id) => {
        axios.get(`${base_url}/courses/${id}`)
            .then((response) => {
                console.log(response.data);
                setCourse(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //card display
    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className="font-weight-bold" tag="h6">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color='danger' onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button style={{ marginLeft: 5 }} className='ml-2' color='warning' onClick={() => {
                        putUpdateCourse(course.id);
                    }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course