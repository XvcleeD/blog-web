// import Alert from "react-bootstrap/Alert";
// import { Link } from "react-router-dom";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { BlogPageHome } from "./blog_page";
import { BlogNav } from "./blog_navbar";

export function ClientApp() {
  return (
    <div>
      <BlogNav />
      <Routes>
        <Route path="/" element={<BlogPageHome />} />
        <Route path="/blog" element={<div>Blog list</div>} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Link to="/">Home</Link> <Link to="/blog">Blog</Link>
      <Link to="/admin"> admin</Link>
      <Link to="/singUp"> sing_up</Link>
    </div>
  );
}
function SingleBlog() {
  const { slug } = useParams();

  return <div>Single Blog component : {slug}</div>;
}

function NotFound() {
  return <div>Not Found</div>;
}
