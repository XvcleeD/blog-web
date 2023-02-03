// import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export function Articles() {
  // const [text, setText] = useState();
  return (
    <div className="row mt-5 container m-auto justify-content-center">
      <Card className="d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0">
        <h1 className="col">Ангилал</h1>
        <Link to="/admin/articles/new" className="btn btn-primary">
          Шинэ мэдээ
        </Link>
      </Card>
    </div>
  );
}
