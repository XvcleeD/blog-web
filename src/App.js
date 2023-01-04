// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { CategotyList } from "./cardEl";
import { ModalEl } from "./modal";
import { NavbarEl } from "./nabvar";

export default function NavScrollExample() {
  return (
    <>
      <NavbarEl />
      <div className="row mt-5 container m-auto justify-content-center">
        <Card className="d-flex py-3 col-sm-11 col-md-8 col-12 flex-row justify-content-between border-0">
          <h1 className="col">Ангилал</h1>
          <ModalEl />
        </Card>
        <CategotyList />
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       </header>
//     </div>
//   );
// }

// export default App;
