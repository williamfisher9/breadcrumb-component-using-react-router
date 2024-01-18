import React from "react";
import { Button, ButtonGroup, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function ServicesList() {
  return (
    <div className="jumbotron mt-4">
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
        <DropdownButton
          variant="secondary"
          as={ButtonGroup}
          title="Other Services"
          id="bg-vertical-dropdown-1"
        >
            <Link className="dropdown-item" to="/services/about" style={{ ...linkStyle, color: "black" }}>About</Link>
    
          
            <Link className="dropdown-item" to="/services/contact" style={{ ...linkStyle, color: "black" }}>Contact</Link>
          
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
}

export default ServicesList;
