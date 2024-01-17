import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ServicesList from "./ServicesList";
import ProcessPaymentService from "./ProcessPaymentService";
import InitializePaymentService from "./InitializePaymentService";
import CreatePaymentService from "./CreatePaymentService";
import ServicesLayout from "./ServicesLayout";
import About from "./About";
import Contact from "./Contact";


const router = createBrowserRouter(createRoutesFromElements(
    
        <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="services">
                <Route index element={<ServicesList />} />
                <Route path="*"  element={<ServicesLayout />} >
                    <Route path="process" element={<ProcessPaymentService />} />
                    <Route path="create">
                        <Route index element={<CreatePaymentService />} />
                        <Route path="payment" element={<ProcessPaymentService />} />
                        <Route path="invoice" element={<ProcessPaymentService />} />
                        <Route path="beneficiary" element={<ProcessPaymentService />} />
                    </Route>
                    <Route path="initialize" element={<InitializePaymentService />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Route>
        </Route>    
    
))

function Router(){
    return (
        <RouterProvider router={router} />
    )
}

export default Router;