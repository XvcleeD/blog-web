// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarEl } from "./nabvar";
import { Body } from "./body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientApp } from "./ ClientApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/*"
            element={
              <>
                <NavbarEl />
                <Container>
                  <Body />
                </Container>
              </>
            }
          />
          <Route path="*" element={<ClientApp />} />
        </Routes>
        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}
