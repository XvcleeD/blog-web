import { Route, Routes, useParams } from "react-router-dom";
import { BlogPageHome } from "./blog_page";
import { BlogNav } from "./blog_navbar";

export function ClientApp() {
  return (
    <>
      <BlogNav />
      <Routes>
        <Route path="/" element={<BlogPageHome />} />
        <Route path="/blog" element={<div>Blog list</div>} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
function SingleBlog() {
  const { slug } = useParams();

  return <div>Single Blog component : {slug}</div>;
}

function NotFound() {
  return <div>Not Found</div>;
}
