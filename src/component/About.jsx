import React, { useEffect } from 'react'
import { Container } from 'reactstrap'

function About() {
    useEffect(() => {
        document.title = "About";
    }, [])
    return (
        <div className="Container">
            <h1>About</h1>
            <p>I am a web developer with a vast array of knowledge in many different front end and back end languages,
                responsive frameworks, databases, and best code practices. </p>
        </div>
    )
}

export default About