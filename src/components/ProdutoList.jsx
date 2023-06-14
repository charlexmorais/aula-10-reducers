import React, { useContext } from 'react';
import { ProductContext } from '../assets/counter-reducer';


const ProductList = () => {
  const { productList } = useContext(ProductContext);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
