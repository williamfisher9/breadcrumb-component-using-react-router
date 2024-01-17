import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    let currentLocation = '';

    const pathNameLength = location.pathname.split('/').length;

    const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '')
    .map((crumb, ci) => {
        currentLocation += `/${crumb}`;
        return <Breadcrumb.Item key={crumb} active={ci === pathNameLength-1 ? false : true}>
            <Link to={currentLocation}>{crumb.toUpperCase()}</Link>
        </Breadcrumb.Item>
    });

    return (
            <Breadcrumb>
                {crumbs}
            </Breadcrumb>
    )
}

export default Breadcrumbs
