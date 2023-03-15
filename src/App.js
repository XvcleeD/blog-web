// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarEl } from "./components/admin/nabvar";
import { Body } from "./components/admin/body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientApp } from "./components/client/ ClientApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
// import { SingUp } from "./components/admin/sing_up";
// import { Login } from "./components/admin/log_in";

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
          {/* <Route path="/singUp" element={<SingUp />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="*" element={<ClientApp />} />
        </Routes>
        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}
