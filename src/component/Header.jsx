import React from 'react'
import { Card, CardBody, Button } from 'reactstrap'

function header({ name, title }) {
    return (
        <div>
            <Card className='my-2 bg-warning'>
                <CardBody className='text-center my-2'>
                    <h1>Welcome to Course Application</h1>
                </CardBody>
            </Card>

        </div>
        // <div style={{ background: 'yellow',padding:20,width:400}}>
        //     <header>{title}</header>
        //     <h1>This is my React App</h1>
        //     <h2>{name}</h2>
        //     <p>This is paragraph</p>
        // </div>

    )
}

export default header