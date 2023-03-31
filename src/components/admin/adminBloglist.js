import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import Chip from "../../common/Chip/index";


export function AdminBlogList() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/articles`).then((res) => {
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
      {article.list?.map((blog) => (
        <div key={blog._id} className="blogItem-wrap">
          <img src={blog.image.path} alt="cover" className="blogItem-cover" />
          <Chip label={blog.categoryId.name} />
          <h3>{blog.title}</h3>
          <footer>
            <div className="blogItem-author">
              {/* <di>{parse(text)}</di  v> */}
            </div>
            <Link className="blogItem-link" to={`/blog/${blog._id}`}>
              →
            </Link>
          </footer>
        </div>
      ))}
    </div>
  );
}
