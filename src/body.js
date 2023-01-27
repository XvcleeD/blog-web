import React from "react";
import { useState } from "react";
import { NewModal } from "./modal";
import { AngilalCard } from "./angilal";
import { CardMap } from "./CartMap";
// import { toast } from "react-toastify";
import { Articles } from "./ckeditior";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export function Body() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [todos, setModalEl] = useState([]);

  function loadCategories() {
    axios.get("http://localhost:3001/categories").then((res) => {
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

  return (
    <>
      <Routes>
        <Route path="/shineMedee" element={<Articles />} />
        <Route
          path="*"
          element={
            <div className="row mt-5 container m-auto justify-content-center">
              <AngilalCard handleShow={handleShow} />
              <CardMap
                todos={todos}
                setModalEl={setModalEl}
                onComplete={handleComplete}
                loadCategories={loadCategories}
              />
            </div>
          }
        />
      </Routes>
      <NewModal
        onComplete={handleComplete}
        // onSave={handleSave}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />
    </>
  );
}
