import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export function SingUp() {
  return (
    <Form className="container my-auto d-flex" style={{ height: "100vh" }}>
      <Card className=" col-10 col-lg-7 col-lx-7 col-xxl-6 p-5 m-auto">
        <Card.Body className="gap-2 d-flex flex-column col-12 col-sm-12 col-md-10 m-auto">
          <Card.Title>Sing Up</Card.Title>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name*</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your name"
              // className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter your name" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email*</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your email"
              // className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password*</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Create a password" />
            </FloatingLabel>
            <Form.Label>Must be at least 8 characters.</Form.Label>
          </Form.Group>

          <Button className="p-2" to="/" as={Link}>
            Creare account
          </Button>
          <Form.Label className="d-flex justify-content-center ">
            Already have an account? <Link to="/Login">Log in</Link>
          </Form.Label>
        </Card.Body>
      </Card>
    </Form>
  );
}
