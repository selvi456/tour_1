import React from 'react';
import './Products.css';

const Product = ({ name, description, imageUrl, price }) => {


  
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
    
  );
};

export default Product;
