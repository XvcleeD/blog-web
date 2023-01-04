import { categories } from "./categories";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export let CategotyList = () => {
  return (
    <>
      {categories.map((cat1) => (
        <Card className="col-sm-11 my-3 col-md-8 col-12 d-flex flex-row align-items-center border rounded">
          <Card.Body>{cat1.name}</Card.Body>
          <Button variant="light">засах</Button>
        </Card>
      ))}
    </>
  );
};
