import React from "react";
import { useState } from "react";
import { NewModal } from "./modal";
import { CardMap } from "./CartMap";
// import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ArticlesNew } from "./articlesNew";
import { Articles } from "./ckeditior";
import { Route, Routes, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export function Body() {
  const [todos, setModalEl] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);
  const [searchParams, setSearchParams] = useSearchParams({});

  function loadCategories() {
    axios.get(`http://localhost:3001/categories?q=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setModalEl(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  }
  useEffect(() => {
    loadCategories();
  }, []);
  useEffect(() => {
    loadCategories(searchedQuery);
  }, [searchedQuery]);
  function handleComplete() {
    loadCategories();
    // toast.success("Амжилттай үүслээ", {
    //   position: "bottom-right",
    //   autoClose: true,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  }
  function closeModal() {
    setSearchParams({});
  }

  const editing = searchParams.get("editing");

  return (
    <>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/new" element={<ArticlesNew />} />
        <Route
          path="/categories"
          element={
            <>
              <div className="row mt-5 container m-auto justify-content-center">
                <Card className="d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0">
                  <h1 className="col">Ангилал</h1>
                  <Button
                    variant="outline-primary"
                    onClick={() => setSearchParams({ editing: "new" })}
                  >
                    шинэ
                  </Button>
                </Card>
                <input
                  className="col-ms-9 col-md-5 col-10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <CardMap
                  todos={todos}
                  setModalEl={setModalEl}
                  onComplete={handleComplete}
                  loadCategories={loadCategories}
                />
              </div>
            </>
          }
        />
      </Routes>
      <NewModal
        onComplete={handleComplete}
        show={editing}
        handleClose={closeModal}
      />
    </>
  );
}
