import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { NewModal } from "./modal";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

export let CardList = ({ handleClose, show, setShow }) => {
  const [text, setText] = useState("");
  const [todos, setModalEl] = useState([]);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState();
  const [editingTexts, setEditingText] = useState({});

  function addTodo() {
    if (text === "") {
      setError("utga bicnnuu");
    } else {
      if (editing === undefined) {
        const newTodo = {
          text: text,
          done: false,
          id: uuidv4(),
        };
        const newTodos = [newTodo, ...todos];
        setModalEl(newTodos);
      } else {
        const newTodos = [...todos];
        newTodos[editing].text = text;
        setModalEl(newTodos);
        setEditing(undefined);
      }
      setText("");
      setShow(false);
      setError("");
    }
  }
  function handleDoneChange(id) {
    const newTodos = [...todos];

    let index;
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }
    newTodos[index].done = !newTodos[index].done;
    setModalEl(newTodos);
  }
  function handleDelete(index) {
    if (window.confirm("Устгах уу ?")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setModalEl(newTodos);
    }
  }
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    console.log(newEditingTexts);
    newEditingTexts[id] = todos[index].text;
    setEditingText(newEditingTexts);
    // if (editingTexts[todos.id] === undefined) {
    //   setError("hooson baina");
    // } else {
    // }
  }
  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingText(newEditingTexts);
  }
  function cancalEditing(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingText(newEditingTexts);
  }
  function updateEditingText(index, id) {
    const newTodos = [...todos];
    newTodos[index].text = editingTexts[id];
    setModalEl(newTodos);
    cancalEditing(id);
  }

  return (
    <>
      {todos.map((cat1, index) => (
        <Card
          key={cat1.id}
          className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-2 flex-row align-items-center border rounded"
        >
          {console.log(cat1.id)}
          {editingTexts[cat1.id] !== undefined ? (
            <>
              <Card.Body>
                <Form.Control
                  value={editingTexts[cat1.id]}
                  onChange={(e) => handleEditingText(cat1.id, e)}
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  style={{ borderColor: error ? "red" : "none" }}
                />
                {console.log(editingTexts[cat1.id])}
              </Card.Body>
              <Button onClick={() => updateEditingText(index, cat1.id)}>
                Хадгалах
              </Button>
              <Button onClick={() => cancalEditing(cat1.id)}>Болих</Button>
            </>
          ) : (
            <>
              <Form.Check onChange={(e) => handleDoneChange(cat1.id, e)} />
              <Card.Body
                className="my-2"
                key={index}
                style={{
                  textDecoration: cat1.done ? "line-through" : "none",
                }}
              >
                {cat1.text}
              </Card.Body>
              {!cat1.done && (
                <Button
                  variant="light"
                  onClick={() => editTodoInline(cat1.id, index)}
                >
                  засах
                </Button>
              )}
              <Button variant="danger" onClick={() => handleDelete(index)}>
                Устгах
              </Button>
            </>
          )}
          {console.log(editingTexts)}
        </Card>
      ))}
      <NewModal
        error={error}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        addTodo={addTodo}
        setText={setText}
      />
    </>
  );
};
