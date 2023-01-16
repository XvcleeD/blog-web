// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarEl } from "./nabvar";
import { Body } from "./body";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { BasicExample } from "./ tester";
import { Container } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "admin",
    element: (
      <div>
        <h1>sgrefdgvser</h1>
      </div>
    ),
    children: [
      // {
      //   path: "hhh",
      //   element: (
      //     <div>
      //       <h1>askjhglhsdkfh</h1>
      //     </div>
      //   ),
      // },
      {
        path: "/todo",
        element: <NavScrollExample />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <>
        <BasicExample />
        <Link to="admin">gjfggfhfg</Link>
      </>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
function NavScrollExample() {
  return (
    <>
      <NavbarEl />
      <Container>
        <Body />
      </Container>
    </>
  );
}
