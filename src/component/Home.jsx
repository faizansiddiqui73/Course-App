import React from 'react'
import { Container, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

function Home() {
    const buttonfForUsing = () => {
        toast.success("Content is Loading", { position: 'top-right' })
    }
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (

        <div class="jumbotron" className='text-center bg-info' style={{ paddingTop: 40 }}>
            <h1 className="display-7">Todo App</h1>
            <p class="lead">This Frontend is designed on ReactJs and Backend is Designed on SpringBoot</p>
            <p class='bold'>By Faizan Siddiqui</p>
            {/* <hr class="my-1" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> * /} */}
            <Container className='pb-4'>
                <ToastContainer />
                <Button color='primary' onClick={buttonfForUsing}>Start Using</Button>
            </Container>
        </div >
    )
}

export default Home