import { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import "./style.css";

export function BlogList() {
  const [article, setArticle] = useState([]);
  function loadArticles() {
    axios.get(`${process.env.REACT_APP_API_URL}/articles`).then((res) => {
      const { data, status } = res;
      // console.log(res);
      if (status === 200) {
        setArticle(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }
 
  useEffect(() => {
    loadArticles();
  }, []);

  if (!article.list) return null;
  return (
    <div className="blogList-wrap container mt-5">
      {article.list?.map((blog) => (
        <BlogItem blog={blog} key={blog._id} />
      ))}
    </div>
  );
}
