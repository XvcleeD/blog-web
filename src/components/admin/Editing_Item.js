import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
// import { toast } from "react-toastify";
import axios from "axios";
export function EditingItem({
  cat1,
  index,
  setEditingText,
  editingTexts,
  loadCategories,
}) {
  // const [editingTexts, setEditingText] = useState({});
  const [error, setError] = useState("");
  function cancalEditing(id) {
    loadCategories();
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingText(newEditingTexts);
  }

  function updateEditingText(index, id) {
    if (!editingTexts[id]) {
      setError("sdgdsags");
    } else {
      const updatedItem = { ...cat1, name: editingTexts[cat1.id] };
      axios.put(`http://localhost:3001/categories/${id}`, updatedItem);
      loadCategories();
      cancalEditing(id);
      // toast.success("Амжилттай хадгаллаа", {
      //   position: "bottom-right",
      //   autoClose: false,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    }
  }
  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingText(newEditingTexts);
  }
  function handleKeyUp(e) {
    if (e.code === "Enter") {
      updateEditingText(index, cat1.id);
    }
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
          onKeyUp={handleKeyUp}
        />
        {/* {console.log(editingTexts[cat1.id])} */}
      </Card.Body>
      <Button onClick={() => updateEditingText(index, cat1.id)}>
        Хадгалах
      </Button>
      <Button onClick={() => cancalEditing(cat1.id)}>Болих</Button>
    </>
  );
}
