import { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import "./style.css";
import { Link, useSearchParams } from "react-router-dom";

export function BlogListTest() {
  const [article, setArticle] = useState([]);
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  function loadArticles(page, query = "") {
    axios
      .get(`${process.env.REACT_APP_API_URL}/articlesNew?q=${query}&page=${page}`)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { list, count } = data;
          setArticle(list);
          setPages(Math.ceil(count / 10));
        } else {
          alert(`Aldaa garlaa: ${status}`);
        }
      });
  }

  useEffect(() => {
    loadArticles(page, "");
  }, [page]);

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
    <>
      <div className="blogList-wrap container mt-5">
        {article?.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination" style={{ flexWrap: "wrap" }}>
          {page !== 1 && (
            <li class="page-item">
              <Link to={`?page=${page - 1}`} class="page-link">
                Өмнөх
              </Link>
            </li>
          )}

          {[...Array(pages)].map((_, index) => (
            <li
              key={index}
              class={`page-item ${page === index + 1 ? "active" : ""}`}
            >
              <Link to={`?page=${index + 1}`} class="page-link">
                {index + 1}
              </Link>
            </li>
          ))}

          {page !== pages && (
            <li class="page-item">
              <Link to={`?page=${page + 1}`} class="page-link">
                Дараах
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
