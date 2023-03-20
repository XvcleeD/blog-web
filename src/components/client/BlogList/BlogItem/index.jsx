import React from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";
import "./style.css";
import Chip from "../../../../common/Chip/index";

const BlogItem = ({ blog: { id, title, backgaround, category } }) => (
  <div className="blogItem-wrap">
    
    <img src={backgaround} alt="cover" className="blogItem-cover" />
    <Chip label={category.name} />
    <h3>{title}</h3>
    <footer>
      <div className="blogItem-author">{/* <div>{parse(text)}</div> */}</div>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        →
      </Link>
    </footer>
  </div>
);

export default BlogItem;
