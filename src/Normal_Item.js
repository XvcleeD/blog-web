import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
export function NormalItem({
  handleDoneChange,
  cat1,
  index,
  editTodoInline,
  handleDelete,
}) {
  return (
    <>
      <Form.Check onChange={(e) => handleDoneChange(cat1.id, e)} />
      <Card.Body
        className="my-2"
        key={index}
        style={{
          textDecoration: cat1.done ? "line-through" : "none",
        }}
      >
        {cat1.text}
      </Card.Body>
      {!cat1.done && (
        <Button variant="light" onClick={() => editTodoInline(cat1.id, index)}>
          засах
        </Button>
      )}
      <Button variant="danger" onClick={() => handleDelete(index)}>
        Устгах
      </Button>
    </>
  );
}
