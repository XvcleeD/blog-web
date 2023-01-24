import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function AngilalCard({ handleShow }) {
  return (
    <Card className="d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0">
      <h1 className="col">Ангилал</h1>
      {/* <Button onClick={}>eeeee</Button> */}
      <Button variant="outline-primary" onClick={handleShow}>
        {/* () => setEditing(true) */}
        шинэ
      </Button>
    </Card>
  );
}
