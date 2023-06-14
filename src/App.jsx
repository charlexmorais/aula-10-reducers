import React, { useContext } from 'react';

import ProductList from './components/ProdutoList';
import { ProductContext } from './assets/counter-reducer';

const App = () => {
  const { addProduct, removeProduct } = useContext(ProductContext);

  return (
    <div>
      <h1>Product Management</h1>
      <button onClick={addProduct}>Adicionar Produto</button>
      <button onClick={removeProduct}>Remover Produto</button>
      <ProductList />
    </div>
  );
};

export default App;


