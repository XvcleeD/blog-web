import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";


export function NormalItem({
  cat1,
  index,
  todos,
  setEditingText,
  editingTexts,
  loadCategories,
}) {
  function handleDelete(index) {
    if (window.confirm("Устгах уу ?")) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/categories/${cat1._id}`)
        .then((res) => {
          loadCategories();
        });
    }
  }
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].name;
    setEditingText(newEditingTexts);
  }

  return (
    <>
     
      <Card.Body
        className="my-2"
        key={index}
      >
        {cat1.name}
      </Card.Body>
      <Button variant="light" onClick={() => editTodoInline(cat1._id, index)}>
        засах
      </Button>
      <Button variant="danger" onClick={() => handleDelete(index)}>
        Устгах
      </Button>
    </>
  );
}
