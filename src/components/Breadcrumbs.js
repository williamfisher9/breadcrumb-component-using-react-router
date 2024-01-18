import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    let currentLocation = '';

    const pathNameLength = location.pathname.split('/').filter((crumb) => crumb !== '').length;

    console.log(pathNameLength)

    const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '')
    .map((crumb, ci) => {
        currentLocation += `/${crumb}`;
        return ci === pathNameLength-1 ? 
        <span key={crumb} className="breadcrumb-item">{crumb.toUpperCase()}</span> :
        <Link className="breadcrumb-item" to={currentLocation} key={crumb}>{crumb.toUpperCase()}</Link>
    });

    return (
            <Breadcrumb>
                {crumbs}
            </Breadcrumb>
    )
}

export default Breadcrumbs
