import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Chip from "../../../../common/Chip/index";

const BlogItem = ({ blog: { image, title, categoryId, _id } }) => (
  <div className="blogItem-wrap">
    {/* {console.log(categoryId.name)} */}
    <img src={image.path} alt="cover" className="blogItem-cover" />
    <Chip label={categoryId.name} />
    <h3>{title}</h3>
    <footer>
      <Link className="blogItem-link" to={`/blog/${_id}`}>→</Link>
    </footer>
  </div>
);

export default BlogItem;
