import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import { useState } from "react";
import axios from "axios";


export function NewModal({ show, handleClose, onComplete }) {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSave() {
    if (name === "") {
      setError("utgaa bichnuu");
    } else {
      setLoading(true);
      axios
        .post("http://localhost:3001/categories", {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            onComplete();
            Close();
            setLoading(false);
          }
        });
      setError("");
      setName("");
    }
  }
  function Close() {
    handleClose();
    setError("");
  }
  function handleKeyUp(e) {
    if (e.code === "Enter") {
      handleSave();
    }
  }

  return (
    <>
      <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>Шинэ мэдээ</Modal.Title>
        </Modal.Header>
        <label>
          <p className=" p-3">Мэдээний нэр</p>
          <InputGroup show={show} size="sm" className="mb-3 p-3 pt-0">
            <Form.Control
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              style={{ borderColor: error ? "red" : "none" }}
              onKeyUp={handleKeyUp}
            />
          </InputGroup>
        </label>
        <Modal.Footer>
          <Button disabled={loading} variant="secondary" onClick={Close}>
            Гарах
          </Button>
          <Button disabled={loading} variant="primary" onClick={handleSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
