import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

export let EditCard = ({ show, handleClose, text, setText }) => {
  function handleTextChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Засах цонх</Modal.Title>
        </Modal.Header>
        <label>
          <p className=" p-3">Мэдээний шинэ нэр</p>
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
          <Button variant="secondary" onClick={handleClose}>
            Гарах
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
