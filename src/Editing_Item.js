import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
export function EditingItem({
  editingTexts,
  handleEditingText,
  error,
  updateEditingText,
  cancalEditing,
  cat1,
  index,
}) {
  return (
    <>
      <Card.Body>
        <Form.Control
          value={editingTexts[cat1.id]}
          onChange={(e) => handleEditingText(cat1.id, e)}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{ borderColor: error ? "red" : "none" }}
        />
        {console.log(editingTexts[cat1.id])}
      </Card.Body>
      <Button onClick={() => updateEditingText(index, cat1.id)}>
        Хадгалах
      </Button>
      <Button onClick={() => cancalEditing(cat1.id)}>Болих</Button>
    </>
  );
}
