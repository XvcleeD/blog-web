import { Button, Card, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export function SingUp() {
  return (
    <Card Body className="gap-5 container">
      <Card.Title>Sing Up</Card.Title>
      <InputGroup className="flex-column">
        <Form.Label>Name*</Form.Label>
        <Form.Control placeholder="Enter your name" />
      </InputGroup>
      <InputGroup className="flex-column">
        <Form.Label>Email*</Form.Label>
        <Form.Control placeholder="Enter your email" />
      </InputGroup>
      <InputGroup className="flex-column">
        <Form.Label>Password*</Form.Label>
        <Form.Control placeholder="Create a password" />
        <Form.Label>Must be at least 8 characters.</Form.Label>
      </InputGroup>
      <Button>Creare account</Button>
      <Form.Label>
        Already have an account? <Link>Log in</Link>
      </Form.Label>
    </Card>
  );
}
