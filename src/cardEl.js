import { categories } from "./categories";
import Card from "react-bootstrap/Card";
import { EditCard } from "./editCard";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export let CategotyList = () => {
  const [editing, setEditing] = useState(false);
  function closeModal() {
    setEditing(false);
  }
  return (
    <>
      {categories.map((cat1) => (
        <Card className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-1 flex-row align-items-center border rounded">
          <Card.Body>{cat1.name}</Card.Body>
          <Button variant="light" onClick={() => setEditing(true)}>
            засах
          </Button>
          <Button variant="danger">Устгах</Button>
          <EditCard show={editing} onClose={closeModal} />
        </Card>
      ))}
    </>
  );
};
