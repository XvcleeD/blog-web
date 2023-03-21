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
  function cancalEditing(_id) {
    loadCategories();
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[_id] = undefined;
    setEditingText(newEditingTexts);
  }

  function updateEditingText(index, _id) {
    if (!editingTexts[_id]) {
      setError("sdgdsags");
    } else {
      const updatedItem = { ...cat1, name: editingTexts[cat1._id] };
      axios.put(`http://localhost:3001/categories/${_id}`, updatedItem);
      loadCategories();
      cancalEditing(_id);
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
  function handleEditingText(_id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[_id] = e.target.value;
    setEditingText(newEditingTexts);
  }
  function handleKeyUp(e) {
    if (e.code === "Enter") {
      updateEditingText(index, cat1._id);
    }
  }
  return (
    <>
      <Card.Body>
        <Form.Control
          value={editingTexts[cat1._id]}
          onChange={(e) => handleEditingText(cat1._id, e)}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{ borderColor: error ? "red" : "none" }}
          onKeyUp={handleKeyUp}
        />
        {/* {console.log(editingTexts[cat1.id])} */}
      </Card.Body>
      <Button onClick={() => updateEditingText(index, cat1._id)}>
        Хадгалах
      </Button>
      <Button onClick={() => cancalEditing(cat1._id)}>Болих</Button>
    </>
  );
}
