import Card from "react-bootstrap/Card";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { CardList } from "./cardEl";

export function Body() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);

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
          show1={show1}
          setShow1={setShow1}
          handleShow1={handleShow1}
          handleClose1={handleClose1}
        />
      </div>
    </>
  );
}
