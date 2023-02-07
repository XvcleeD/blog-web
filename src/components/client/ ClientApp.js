import axios from "axios";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { BlogPageHome } from "./blog_page";
import { BlogNav } from "./blog_navbar";
import { BlogList } from "./BlogList/index";

export function ClientApp() {
  return (
    <>
      <BlogNav />
      <Routes>
        <Route path="/" element={<BlogPageHome />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
function SingleBlog() {
  const { id } = useParams();
  const [article, setArticle] = useState();
  // const [category, setCategory] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/articles/${id}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticle(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);

  // useEffect(() => {
  //     if (article) {
  //         axios.get(`http://localhost:8000/categories/${article.categoryId}`).then((res) => {
  //             const { data, status } = res;
  //             if (status === 200) {
  //                 setCategory(data);
  //             } else {
  //                 alert(`Aldaa garlaa: ${status}`);
  //             }
  //         });
  //     }
  // }, [article]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container" style={{ maxWidth: 700 }}>
      {/* {category && <span>{category.name}</span>} */}

      <span className="badge rounded-pill text-bg-primary">
        {article.category?.name}
      </span>
      <h1 className="mb-4">{article.title}</h1>
      <div className="content">{parse(article.text)}</div>
    </div>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}
