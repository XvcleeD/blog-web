function EdititButton(setEditingText, editingTexts, index, cat1) {
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    console.log(newEditingTexts);
    newEditingTexts[id] = todos[index].text;
    setEditingText(newEditingTexts);
  }
  return (
    <Button variant="light" onClick={() => editTodoInline(cat1.id, index)}>
      засах
    </Button>
  );
}
