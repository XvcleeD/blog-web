import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { NewModal } from "./modal";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

export let CardList = ({ handleClose, show, setShow }) => {
  const [text, setText] = useState("");
  const [todos, setModalEl] = useState([]);
  const [editing, setEditing] = useState();
  const [editingTexts, setEditingText] = useState({});

  function addTodo() {
    if (editing === undefined) {
      const newTodo = {
        text: text,
        done: false,
        id: uuidv4(),
      };
      const newTodos = [newTodo, ...todos];
      setModalEl(newTodos);
      // console.log(newTodos);
    } else {
      const newTodos = [...todos];
      newTodos[editing].text = text;
      setModalEl(newTodos);
      setEditing(undefined);
    }
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
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingText(newEditingTexts);
  }
  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingText(newEditingTexts);
  }

  console.log({ editingTexts });

  return (
    <>
      {todos.map((cat1, index) => (
        <Card
          key={cat1.id}
          className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-2 flex-row align-items-center border rounded"
        >
          {editingTexts[cat1.id] !== undefined ? (
            <>
              <Card.Body>
                <Form.Control
                  value={editingTexts[cat1.id]}
                  onChange={(e) => handleEditingText(cat1.id, e)}
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </Card.Body>
              <Button>Хадгалах</Button>
              <Button>Болих</Button>
            </>
          ) : (
            <>
              <Card.Body key={index}>{cat1.text}</Card.Body>
              <Button
                variant="light"
                onClick={() => editTodoInline(cat1.id, index)}
              >
                засах
              </Button>
              <Button variant="danger" onClick={() => handleDelete(index)}>
                Устгах
              </Button>
            </>
          )}
          {console.log(editingTexts)}
        </Card>
      ))}

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
