import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home"> OnlineShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="" style={{ marginLeft: "auto" }}>
            <Nav.Link href="#home">
              <i className="fas fa-shopping-cart mx-2" />
              Card
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-user mx-2" />
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
