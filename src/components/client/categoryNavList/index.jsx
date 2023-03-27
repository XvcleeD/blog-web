import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

export function BasicExample() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/categories?q=`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setCategories(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);

  console.log(categories);

  if (!categories) return null;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            {categories?.map((cat) => (
              <Nav.Link key={cat._id} as={Link} to="">
                {cat.name}
              </Nav.Link>
            ))}
          </Nav>
        
      </Container>
    </Navbar>
  );
}
