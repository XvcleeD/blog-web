import Card from "react-bootstrap/Card";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { CardList } from "./cardEl";

export function Body() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="row mt-5 container m-auto justify-content-center">
        <Card className="d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0">
          <h1 className="col">Ангилал</h1>
          <Button variant="outline-primary" onClick={handleShow}>
            {/* () => setEditing(true) */}
            шинэ
          </Button>
        </Card>
        <CardList
          show={show}
          setShow={setShow}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
    </>
  );
}
