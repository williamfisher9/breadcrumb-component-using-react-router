import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ServicesList from "./ServicesList";
import ProcessPaymentService from "./ProcessPaymentService";
import InitializePaymentService from "./InitializePaymentService";
import CreatePaymentService from "./CreatePaymentService";
import ServicesLayout from "./ServicesLayout";


const router = createBrowserRouter(createRoutesFromElements(
    
        <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="services" element={<ServicesLayout />}>
                <Route index element={<ServicesList />} />
                <Route path="process" element={<ProcessPaymentService />} />
                <Route path="create" element={<CreatePaymentService />} />
                <Route path="initialize" element={<InitializePaymentService />} />
            </Route>
        </Route>    
    
))

function Router(){
    return (
        <RouterProvider router={router} />
    )
}

export default Router;