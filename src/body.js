import Card from "react-bootstrap/Card";
import { ModalEl } from "./modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { CategotyList } from "./cardEl";

export function Body() {
  const [editing, setEditing] = useState(false);
  function closeModal() {
    setEditing(false);
  }
  return (
    <div className="row mt-5 container m-auto justify-content-center">
      <Card className="d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0">
        <h1 className="col">Ангилал</h1>
        <Button variant="outline-primary" onClick={() => setEditing(true)}>
          шинэ
        </Button>
        <ModalEl show={editing} onClose={closeModal} />
      </Card>
      <CategotyList />
    </div>
  );
}
