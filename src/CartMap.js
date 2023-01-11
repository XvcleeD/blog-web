import Card from "react-bootstrap/Card";
import { useState } from "react";
import { NewModal } from "./modal";
import { v4 as uuidv4 } from "uuid";
import { EditingItem } from "./Editing_Item";
import { NormalItem } from "./Normal_Item";

export let CardList = ({ handleClose, show, setShow }) => {
  const [todos, setModalEl] = useState([]);

  const [editingTexts, setEditingText] = useState({});

  function handleSave(text) {
    const newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newTodos = [newTodo, ...todos];
    setModalEl(newTodos);
    setShow(false);
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
              cat1={cat1}
              index={index}
              setEditingText={setEditingText}
              setModalEl={setModalEl}
              todos={todos}
              e
            />
          ) : (
            <NormalItem
              editingTexts={editingTexts}
              setModalEl={setModalEl}
              todos={todos}
              cat1={cat1}
              index={index}
              setEditingText={setEditingText}
            />
          )}
        </Card>
      ))}
      <NewModal
        onSave={handleSave}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />
    </>
  );
};
