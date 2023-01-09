import Card from "react-bootstrap/Card";
import { EditCard } from "./editCard";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import { NewModal } from "./modal";

export let CardList = ({ handleClose, show, setShow }) => {
  const [text, setText] = useState("");
  const [todos, setModalEl] = useState([]);

  function addTodo() {
    const newTodos = [text, ...todos];
    setModalEl(newTodos);
    setText("");
    setShow(false);
  }
  function handleDelete(index) {
    if (window.confirm("Устгах уу?")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setModalEl(newTodos);
    }
  }

  return (
    <>
      {todos.map((cat1, index) => (
        <Card className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-2 flex-row align-items-center border rounded">
          <Card.Body key={index}>{cat1}</Card.Body>
          <Button variant="light" onClick={setShow}>
            засах
          </Button>
          <Button variant="danger" onClick={() => handleDelete(index)}>
            Устгах
          </Button>
        </Card>
      ))}
      <EditCard show={show} handleClose={handleClose} />
      <NewModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        addTodo={addTodo}
        setText={setText}
      />
    </>
  );
};
