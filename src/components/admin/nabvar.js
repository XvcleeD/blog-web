import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export let NavbarEl = () => {
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container className="container" fluid>
          <Navbar.Brand href="#">Админ</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav
              className="text-light navbar-nav-scroll me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link to="/" as={Link}>
                Хэрэглэгч
              </Nav.Link>
              <Nav.Link to="categories" as={Link}>
                Ангилал
              </Nav.Link>
              <NavDropdown title="Мэдээ">
                <NavDropdown.Item to="articles/list" as={Link}>
                  Мэдээ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Сэтгэгдэл</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="articles/new" as={Link}>
                  Шинэ мэдээ
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Сэдэв</Nav.Link>
            </Nav>
            <Button as={Link} to="/" variant="light">
              Гарах
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
