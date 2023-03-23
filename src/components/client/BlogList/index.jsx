import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogItem from "./BlogItem";
import "./style.css";

// import { useSearchParams } from "react-router-dom";

export function BlogList() {
  const [article, setArticle] = useState([]);
  // const [searchParams] = useSearchParams();
  // console.log(categoryId);
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
  // console.log(article);
  useEffect(() => {
    loadArticles();
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/articles`).then((res) => {
  //     const { data, status } = res;
  //     if (status === 200) {
  //       setArticle(data);
  //     } else {
  //       alert(`Aldaa garlaa: ${status}`);
  //     }
  //   });
  // }, []);
  console.log(article);
  if (!article.list) return null;
  return (
    <div className="blogList-wrap container mt-5">
      {article.list?.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
}
