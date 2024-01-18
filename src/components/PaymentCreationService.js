import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function PaymentCreationService() {
  return (
    <div className="jumbotron mt-4">
      <h1>List of Payment Creation Services</h1>
      <ButtonGroup vertical>
        <Button variant="secondary">
          <Link to="/services/create/payment" style={linkStyle}>
            Create Payment
          </Link>
        </Button>
        <Button variant="secondary">
          <Link to="/services/create/beneficiary" className="nav-link">
            Create Beneficiary
          </Link>
        </Button>
        <Button variant="secondary">
          <Link to="/services/create/invoice" className="nav-link">
            Create Invoice
          </Link>
        </Button>
      </ButtonGroup>

      <Outlet />
    </div>
  );
}

export default PaymentCreationService;
