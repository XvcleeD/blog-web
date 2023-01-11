import React from "react";
import { useState } from "react";

import { NewModal } from "./modal";
import { v4 as uuidv4 } from "uuid";
import { AngilalCard } from "./angilal";
import { CardMap } from "./CartMap";

export function Body() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [todos, setModalEl] = useState([]);

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
      <div className="row mt-5 container m-auto justify-content-center">
        <AngilalCard handleShow={handleShow} />
        <CardMap todos={todos} setModalEl={setModalEl} />
      </div>
      <NewModal
        onSave={handleSave}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />
    </>
  );
}
