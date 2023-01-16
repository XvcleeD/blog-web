import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

export function BasicExample() {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <Link to="/">back</Link>
    </>
  );
}
