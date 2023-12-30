import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Menus() {
    return (
        <ListGroup>
            <ListGroupItem tag={Link} to='/' action>
                Home
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/add-course' action>
                Add Course
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/view-course' action>
                View Course
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/about' action>
                About 
            </ListGroupItem>
            <ListGroupItem tag={Link} to='/contact' action>
                ContactUs
            </ListGroupItem>
        </ListGroup>
    );
}

export default Menus;
