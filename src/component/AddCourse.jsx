import axios from 'axios'
import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Form, Container, Button, FormGroup, Label, Input } from 'reactstrap'
import base_url from '../api/bootapi'


function AddCourse() {
    useEffect(() => {
        document.title = "Add Course"
    }, [])

    // This state will store the changes
    const [course, setCourse] = useState({});

    //Form handler Function
    const handleForm = (e) => {
        //whaterver data is give by UI with the help of axios it will go to ther server
        // if (!course.id || !course.title || !course.description) {
        //     toast.error("Please fill in all fields", { position: 'bottom-center' });

        // }
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    //Function to post the data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data)
            .then((response) => {
                toast.success("Course Added", { position: 'bottom-center' })
                console.log(response);
                console.log("Success");
                setCourse({id:"",title:"",description:""});
            })
            .catch((error) => {
                toast.error("Error! Something went wrong", { position: 'bottom-center' })
                console.log(error);
                console.log("Faiure");
            })
    }

    return (
        <div>
            <Fragment>
                <h1 className='text-center'>Fill Course Detail</h1>
                {/* Form handler */}
                <Form onSubmit={handleForm} >
                    <FormGroup>
                        <Label for='userId'>Course Id</Label>
                        <Input type="text" placeholder='Enter the here' id='UserId' name='UserId' onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='title'>Title</Label>
                        <Input type='text' placeholder='Enter the title here' id='title' onChange={(e) => {
                            setCourse({ ...course, title: e.target.value })
                            setCourse({})
                        }}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input style={{ height: 150 }} type='textArea' placeholder='Enter the description here' id='description' name='' onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }}></Input>
                    </FormGroup>
                    <Container className='text-center'>
                        <Button type='submit' color='success'>Add</Button>
                        <Button type='reset'onClick={()=>{
                            setCourse({id:"",title:"",description:""})
                        }} style={{ marginLeft: 5 }} color='warning'>Clear</Button>
                    </Container>
                </Form>
            </Fragment>
        </div>
    )
}

export default AddCourse