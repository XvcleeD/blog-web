import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function BlogNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" as={Link}>
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/blog" as={Link}>
            Blog
          </Nav.Link>
          <Nav.Link to="/admin" as={Link}>
            admin
          </Nav.Link>
          <Nav.Link to="/singUp" as={Link}>
            sing_up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
