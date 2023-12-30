import React, { useEffect } from 'react'
import { List ,Container} from 'reactstrap'

function ContactUs() {
    useEffect(()=>{
        document.title = "Contact Us";
    },[])
    return (
        <div className='Container'>
            <h3>
                <List>
                    <li>
                        <a href="https://www.linkedin.com/in/mohd-faizan-siddiqui-234091192/">LinkedIn</a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/faizan_siddiqui73/">Instagram</a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/faizansiddiqui73/">LeetCode</a>
                    </li>
                    <li>
                        <a href="https://github.com/faizansiddiqui73/">GitHub</a>
                    </li>
                </List>
            </h3>
        </div>
    )
}

export default ContactUs