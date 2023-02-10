import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./style.css";
import Chip from "../../common/Chip/index";

export function AdminBlogList() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/articles`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticle(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);

  // console.log(article);
  return (
    <div className="blogList-wrap container mt-5">
      {article?.map((blog) => (
        <div key={blog.id} className="blogItem-wrap">
          {/* <img src={blog.backgaround} alt="cover" className="blogItem-cover" /> */}
          <Chip label={blog.tags[1]} />
          <h3>{blog.title}</h3>
          <footer>
            <div className="blogItem-author">
              {/* <div>{parse(text)}</div> */}
            </div>
            <Link className="blogItem-link" to={`/blog/${blog.id}`}>
              →
            </Link>
          </footer>
        </div>
      ))}
    </div>
  );
}
