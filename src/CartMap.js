import Card from "react-bootstrap/Card";
import { EditingItem } from "./Editing_Item";
import { NormalItem } from "./Normal_Item";
import { useState } from "react";

export let CardMap = ({ todos, setModalEl }) => {
  const [editingTexts, setEditingText] = useState({});
  return (
    <>
      {todos.map((cat1, index) => (
        <Card
          key={cat1.id}
          className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-2 flex-row align-items-center border rounded"
        >
          {console.log(cat1.id)}
          {editingTexts[cat1.id] !== undefined ? (
            <EditingItem
              editingTexts={editingTexts}
              cat1={cat1}
              index={index}
              setEditingText={setEditingText}
              setModalEl={setModalEl}
              todos={todos}
              e
            />
          ) : (
            <NormalItem
              editingTexts={editingTexts}
              setModalEl={setModalEl}
              todos={todos}
              cat1={cat1}
              index={index}
              setEditingText={setEditingText}
            />
          )}
        </Card>
      ))}
    </>
  );
};
