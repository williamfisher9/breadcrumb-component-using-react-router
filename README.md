# Setup

npx create-react-app breadcrumbs-using-react-router-app

npm install bootstrap react-bootstrap react-router-dom

useLocation hook returns the current location object which has a pathname property. This property is split based on the forward slash character and then used to build the breadcrumb component contents.

```
function Breadcrumbs() {
    const location = useLocation();
    let currentLocation = '';

    const pathNameLength = location.pathname.split('/').filter((crumb) => crumb !== '').length;

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
```