import React, { useState } from "react";
import blogright1 from "../assets/blog/blogright1.webp";
import blogright2 from "../assets/blog/blogright2.webp";
import blogright3 from "../assets/blog/blogright3.webp";
import blogright4 from "../assets/blog/blogright4.webp";
import blogright5 from "../assets/blog/blogright5.webp";
import "./blogpost.css";

function Blogpost() {
  const [blogPost, setBlogPost] = useState([
    {
      blogId: 1,
      blogName: "HOW QITCHEN REDEFINES FLAVOR HARMONY IN EVERY BITE",
      blogDate: "August 31, 2023",
      blogDesc:
        "Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors.",
      blogPic: blogright1,
    },
    {
      blogId: 2,
      blogName: "UNVEILING THE MASTERY BEHIND OUR CULINARY CRAFTSMANSHIP",
      blogDate: "June 27, 2023",
      blogDesc:
        "The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them.",
      blogPic: blogright2,
    },
    {
      blogId: 3,
      blogName: "JOURNEY THROUGH FRESHNESS EXQUISITE SUSHI SELECTION",
      blogDate: "April 15, 2023",
      blogDesc:
        "The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter,",
      blogPic: blogright3,
    },
    {
      blogId: 4,
      blogName: "PALATE WITH QITCHEN'S UNSURPASSED SUSHI DELICACIES",
      blogDate: "March 19, 2023",
      blogDesc:
        "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish.",
      blogPic: blogright4,
    },
    {
      blogId: 5,
      blogName: "THE QITCHEN EXPERIENCE BEYOND SUSHI",
      blogDate: "December 28, 2022",
      blogDesc:
        "In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined.",
      blogPic: blogright5,
    },
  ]);
  return (
    <div className="blog-right-blogs">
      {blogPost.map((blog, index) => {
        return (
          <article key={index} className="blog-right-blog">
            <img className="blog-pic" src={blog.blogPic} />
            <div className="blog-details">
              <p className="blog-date">{blog.blogDate}</p>
              <h4 className="blog-name">{blog.blogName}</h4>
              <p className="blog-desc">{blog.blogDesc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Blogpost;
