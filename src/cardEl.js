import Card from "react-bootstrap/Card";
import { EditCard } from "./editCard";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ModalEl } from "./modal";

export let CategotyList = (todos) => {
  const [editing, setEditing] = useState(false);
  function closeModal() {
    setEditing(false);
  }

  return (
    <>
      {todos.map((cat1) => (
        <Card className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-1 flex-row align-items-center border rounded">
          <Card.Body>{cat1}</Card.Body>
          <Button variant="light" onClick={() => setEditing(true)}>
            засах
          </Button>
          <Button variant="danger">Устгах</Button>
          <EditCard show={editing} onClose={closeModal} />
        </Card>
      ))}
      <ModalEl show={editing} onClose={closeModal} todos={todos} />
    </>
  );
};
