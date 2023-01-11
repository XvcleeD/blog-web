import Card from "react-bootstrap/Card";
import { useState } from "react";
import { NewModal } from "./modal";
import { v4 as uuidv4 } from "uuid";
import { EditingItem } from "./Editing_Item";
import { NormalItem } from "./Normal_Item";

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
    if (!editingTexts[id]) {
      setError("sdgdsags");
    } else {
      newTodos[index].text = editingTexts[id];
      setModalEl(newTodos);
      cancalEditing(id);
    }
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
            <EditingItem
              editingTexts={editingTexts}
              handleEditingText={handleEditingText}
              error={error}
              updateEditingText={updateEditingText}
              cancalEditing={cancalEditing}
              cat1={cat1}
              index={index}
              e
            />
          ) : (
            <NormalItem
              handleDoneChange={handleDoneChange}
              cat1={cat1}
              index={index}
              editTodoInline={editTodoInline}
              handleDelete={handleDelete}
              text={text}
            />
          )}
        </Card>
      ))}
      <NewModal
        error={error}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        addTodo={addTodo}
        setText={setText}
        text={text}
      />
    </>
  );
};
