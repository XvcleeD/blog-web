import { EditingItem } from "./Editing_Item";
import { NormalItem } from "./Normal_Item";
import { useState } from "react";

export function CardListItem({
  todos,
  setModalEl,
  cat1,
  index,
  loadCategories,
  
}) {
  const [editingTexts, setEditingText] = useState({});
  return (
    <>
      {editingTexts[cat1.id] !== undefined ? (
        <EditingItem
          editingTexts={editingTexts}
          cat1={cat1}
          index={index}
          setEditingText={setEditingText}
          setModalEl={setModalEl}
          todos={todos}
          loadCategories={loadCategories}
        />
      ) : (
        <NormalItem
        
          loadCategories={loadCategories}
          editingTexts={editingTexts}
          setModalEl={setModalEl}
          todos={todos}
          cat1={cat1}
          index={index}
          setEditingText={setEditingText}
        />
      )}
    </>
  );
}
