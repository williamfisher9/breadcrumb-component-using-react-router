import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from './Breadcrumbs'
import { Outlet } from 'react-router-dom'

function ServicesLayout() {
    return (
        <Container>
            <Breadcrumbs />
            <Outlet />
        </Container>
    )
}

export default ServicesLayout
