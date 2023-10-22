import React from 'react';
import Product from './Product';


const products = [
  {
    id: 1,
    name: 'Adventure Tour',
    description: 'Explore exciting adventures in unique locations.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/25/13/12/tour-1005768_1280.jpg', 
   price: 299.99,
  },{
    id: 1,
    name: 'Adventure Tour',
    description: 'Explore exciting adventures in unique locations.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/25/13/12/tour-1005768_1280.jpg', 
   price: 299.99
  },
  {
    id: 1,
    name: 'Adventure Tour',
    description: 'Explore exciting adventures in unique locations.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/25/13/12/tour-1005768_1280.jpg', 
   price: 299.99
  }
  
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id}
         name={product.name}
         description={product.description} 
         price={product.price}/>
      ))}
    </div>
  );
};

export default ProductList;
