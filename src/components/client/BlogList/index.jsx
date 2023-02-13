import { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import "./style.css";
import { Link, useSearchParams } from "react-router-dom";

export function BlogList() {
  const [article, setArticle] = useState([]);
  const [searchParams] = useSearchParams();

  function loadArticles() {
    axios.get(`http://localhost:3001/articles`).then((res) => {
      const { data, status } = res;
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

  // console.log(article);
  return (
    <div className="blogList-wrap container mt-5">
      {article?.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
