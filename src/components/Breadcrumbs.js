import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    let currentLocation = '';

    const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '')
    .map((crumb) => {
        currentLocation += `/${crumb}`;
        return <BreadcrumbItem key={crumb} style={{textDecoration: 'none'}}>
            <Link to={currentLocation}>{crumb.toUpperCase()}</Link>
        </BreadcrumbItem>
    });

    return (
            <Breadcrumb>
                {crumbs}
            </Breadcrumb>
    )
}

export default Breadcrumbs
