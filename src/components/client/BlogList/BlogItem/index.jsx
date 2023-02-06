import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const BlogItem = ({ blog: { id, title, text } }) => (
  <div className="blogItem-wrap">
    <h3>{title}</h3>
    <footer>
      <div className="blogItem-author">
        <div>
          {parse(text)}
        </div>
      </div>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        →
      </Link>
    </footer>
  </div>
);

export default BlogItem;
