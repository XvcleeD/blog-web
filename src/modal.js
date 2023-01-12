import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import { useState } from "react";

export function NewModal({ show, handleClose, onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  function handleTextChange(event) {
    setText(event.target.value);
  }
  function handleSave() {
    if (text === "") {
      setError("utgaa bichnuu");
    } else {
      setError("");
      onSave(text);
      setText("");
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Шинэ мэдээ</Modal.Title>
        </Modal.Header>
        <label>
          <p className=" p-3">Мэдээний нэр</p>
          <InputGroup show={show} size="sm" className="mb-3 p-3 pt-0">
            <Form.Control
              value={text} 
              onChange={handleTextChange}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              style={{ borderColor: error ? "red" : "none" }}
            />
          </InputGroup>
        </label>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Гарах
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
