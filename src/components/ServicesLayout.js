import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from './Breadcrumbs'
import { Outlet, useLocation } from 'react-router-dom'

function ServicesLayout() {
    const location = useLocation()
    return (
        <Container>
            {location.pathname !== '/services' ? <Breadcrumbs /> : null}
            <Outlet />
        </Container>
    )
}

export default ServicesLayout
