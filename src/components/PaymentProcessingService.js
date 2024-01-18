import React from 'react'
import { Container } from 'react-bootstrap'

function PaymentProcessingService(props) {
    return (
        <Container>
            <h1>{props.data}</h1>
        </Container>
    )
}

export default PaymentProcessingService