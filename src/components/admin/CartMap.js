import Card from "react-bootstrap/Card";
import { CardListItem } from "./CardListItem";

export let CardMap = ({ todos, setModalEl, onComplete, loadCategories }) => {
  console.log(todos);
  if (!todos) return null;
  return (
    <>
      {todos?.map((cat1, index) => (
        <Card
          key={cat1._id}
          className="col-sm-11 my-3 col-md-8 col-12 d-flex gap-2 flex-row align-items-center border rounded"
        >
          <CardListItem
            loadCategories={loadCategories}
            onComplete={onComplete}
            setModalEl={setModalEl}
            todos={todos}
            cat1={cat1}
            index={index}
          />
        </Card>
      ))}
    </>
  );
};
