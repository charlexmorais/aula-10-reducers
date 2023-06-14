import React, { createContext, useReducer } from 'react'; // importando ...

// Definindo o contexto
export const ProductContext = createContext();

// Tipos de ação
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// Reducer
const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.slice(0, -1);
    default:
      return state;
  }
};

// Provedor do contexto
export const ProductProvider = ({ children }) => {
  const [productList, dispatch] = useReducer(productReducer, []);

  // Ação para adicionar um produto
  const addProduct = () => {
    const newProduct = `Product ${productList.length + 1}`;
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  };

  // Ação para remover o último produto
  const removeProduct = () => {
    dispatch({ type: REMOVE_PRODUCT });
  };

  return (
    <ProductContext.Provider value={{ productList, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
