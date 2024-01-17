import React from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function ServicesList() {
  return (
    <div class="jumbotron mt-4">
      <ButtonGroup vertical>
        <Button variant="secondary">
          <Link to="/services/process" style={linkStyle}>
            Payment Processing
          </Link>
        </Button>
        <Button variant="secondary">
          <Link to="/services/create" style={linkStyle}>
            Payment Creation
          </Link>
        </Button>
        <Button variant="secondary">
          <Link to="/services/initialize" style={linkStyle}>
            Payment Initialization
          </Link>
        </Button>
        <DropdownButton variant="secondary" as={ButtonGroup} title="Other Services" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1">
                <Link to="/services/about" style={{...linkStyle, color: "black"} }>
            About
          </Link>
          </Dropdown.Item>
            <Dropdown.Item eventKey="2"><Link to="/services/contact"  style={{...linkStyle, color: "black"} }>
            Contact
          </Link></Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
}

export default ServicesList;
