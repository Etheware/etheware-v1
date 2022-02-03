import React from 'react';
import Article from '../../components/article/article';
import { blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'

const Blog = () => (
  <div className="blog" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> we want to keep you tuned in.</h1>
    </div>
    <div className="blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Connect with Us On Social Media" text="Etheware is now on Instagram.com" link={'https://www.instagram.com/ethewaretech/'}/>
        <Article imgUrl={blog03} date="Contact Etheware Support" text="Etheware support is here to help with any need. " link={'tel:6198723038'}/>
        <Article imgUrl={blog04} date="Email Etheware Anytime" text="Etheware responds to all emails within 2-4 hours." link={"mailto:solutions@etheware.com"}/>
        <Article imgUrl={blog05} date="Want to Join Etheware?" text="Create the future and lead the face of technology with Etheware." link={"mailto:crystalbadu@etheware.com"} />
      </div>
    </div>
  </div>
);

export default Blog;
