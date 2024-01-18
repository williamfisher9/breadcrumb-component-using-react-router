import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ServicesList from "./ServicesList";
import PaymentProcessingService from "./PaymentProcessingService";
import PaymentInitializationService from "./PaymentInitializationService";
import PaymentCreationService from "./PaymentCreationService";
import ServicesLayout from "./ServicesLayout";
import About from "./About";
import Contact from "./Contact";


const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="services">
                <Route index element={<ServicesList />} />
                <Route path="*"  element={<ServicesLayout />} >
                    <Route path="process" element={<PaymentProcessingService  data={'Payment is being processed...'}/>} />
                    <Route path="create">
                        <Route index element={<PaymentCreationService />} />
                        <Route path="payment" element={<PaymentProcessingService data={'Payment is being created...'}/>} />
                        <Route path="invoice" element={<PaymentProcessingService  data={'Invoice is being created...'}/>} />
                        <Route path="beneficiary" element={<PaymentProcessingService  data={'Benenficiary is being created...'}/>} />
                    </Route>
                    <Route path="initialize" element={<PaymentInitializationService />} />
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