import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <div className="blog-container_article" id='blog'>
    <div className="blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href={link}><p>Click Here</p></a>
    </div>
  </div>
);

export default Article;