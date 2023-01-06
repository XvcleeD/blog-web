import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { useState } from "react";

export function ModalEl({ show, onClose, todos }) {
  const [text, setText] = useState("");
  const [todos, setModalEl] = useState([]);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function addTodo() {
    const newTodos = [...todos, text];
    setModalEl(newTodos);
    setText("");
  }

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Шинэ мэдээ</Modal.Title>
        </Modal.Header>
        <label>
          <p className=" p-3">Мэдээний нэр</p>
          <InputGroup size="sm" className="mb-3 p-3 pt-0">
            <Form.Control
              value={text}
              onChange={handleTextChange}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </label>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Гарах
          </Button>
          <Button variant="primary" onClick={addTodo}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
