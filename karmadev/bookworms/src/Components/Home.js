import React, { useState } from "react";
import { Metadata } from "./Layouts/Metadata";
import { product } from './json';
import { Navbar } from "./Layouts/Navbar";
import { Link } from "react-router-dom";
import { Recent } from "./Recent";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const data = product;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory ? data.filter(item => item.product_type === selectedCategory) : data;

  return (
    <>
    <Navbar handleCategoryClick={handleCategoryClick}/>
      <Metadata title={`Buy Books`} />
      <h1 id="products_heading" className="tib">TOP INTERESTING BOOKS</h1>
      <p className="tibs">Browse the collection of our best top interesting Books.<br />
        You will definitely find what you are looking for.</p>
      <section id="" className="container mt-5">
        {
          filteredData.map((item, index) => (
            
            <div className="card_flow" key={index}>
               
              <div className="card" style={{ width: '201px' }}>
               
              <Link to={`/product/${item.id}`}>
                  <img src={item.image} className="card-img-top cdimg" alt="..." />
                </Link>
                <div className="card-body">
                  <h5 className="card-title aut_name">{item.author_name}</h5>
                </div>
              </div>
            </div>
          ))
        }
        <Recent/>
      </section>
    </>
  );
};
