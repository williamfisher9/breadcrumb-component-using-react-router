import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ServicesList() {
    return (
        <Container>
            <Link to="/services/process" className='nav-link'>Payment Processing</Link>
            <Link to="/services/create" className='nav-link'>Payment Creation</Link>
            <Link to="/services/initialize" className='nav-link'>Payment Initialization</Link>
        </Container>
    )
}

export default ServicesList