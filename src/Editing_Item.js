import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
export function EditingItem({
  cat1,
  index,
  setEditingText,
  editingTexts,
  setModalEl,
  todos,
}) {
  // const [editingTexts, setEditingText] = useState({});
  const [error, setError] = useState("");
  function cancalEditing(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingText(newEditingTexts);
  }
  function updateEditingText(index, id) {
    const newTodos = [...todos];
    if (!editingTexts[id]) {
      setError("sdgdsags");
    } else {
      newTodos[index].text = editingTexts[id];
      setModalEl(newTodos);
      cancalEditing(id);
    }
  }
  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingText(newEditingTexts);
  }
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
