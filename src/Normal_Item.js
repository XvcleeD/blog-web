import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";

export function NormalItem({
  cat1,
  index,
  todos,
  setModalEl,
  setEditingText,
  editingTexts,
  loadCategories,
}) {
  function handleDoneChange(id) {
    const newTodos = [...todos];

    let index;
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }
    newTodos[index].done = !newTodos[index].done;
    setModalEl(newTodos);
  }
  function handleDelete(index) {
    if (window.confirm("Устгах уу ?")) {
      axios
        .delete(`http://localhost:3001/categories/${cat1.id}`)
        .then((res) => {
          const { data, status } = res;
          console.log({ data, status });
        });
      loadCategories();
    }
  }
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    // // console.log(newEditingTexts);
    newEditingTexts[id] = todos[index].name;
    setEditingText(newEditingTexts);
  }

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
        {cat1.name}
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
