import React, { forwardRef } from "react";
import { urlFor } from "../lib/sanity";
import Tag from "./Tag";

const Card = forwardRef(({ onClick, href, post }, ref) => {
  const { publishedAt, title, mainImage, username, authorImage, categories } =
    post;
  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>
      <img className="main-image" src={urlFor(mainImage)} alt={title} />

      <br />

      <div className="info-container">
        <p>Posted by: {username} </p>
        <img
          className="avatar"
          src={urlFor(authorImage)}
          alt={`${username}avatar`}
        />
      </div>

      <div className="tag-container">
        {categories.map((category) => (
          <Tag key={category?.id || ""} title={category?.title || ""} />
        ))}
      </div>
    </div>
  );
});

export default Card;
