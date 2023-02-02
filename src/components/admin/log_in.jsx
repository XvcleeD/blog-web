import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export function Login (){
  return(
    <Form className="container my-auto d-flex" style={{ height: "100vh" }}>
      <Card className=" col-10 col-lg-7 col-lx-7 col-xxl-6 p-5 m-auto">
        <Card.Body className="gap-2 d-flex flex-column col-12 col-sm-12 col-md-10 m-auto">
          <Card.Title>Log in</Card.Title>
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
            Log in 
          </Button>
          
        </Card.Body>
      </Card>
    </Form>
  )
}