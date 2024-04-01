import React, { createContext, useContext, useState } from "react";

const RecentContext = createContext();

export const useRecent = () => {
  return useContext(RecentContext);
};

export const RecentProvider = ({ children }) => {
  const [recentProducts, setRecentProducts] = useState([]);

  const addToRecent = (product) => {
    setRecentProducts((prevProducts) => {
      if (!prevProducts.some((p) => p.id === product.id)) {
        return [product, ...prevProducts.slice(0, 4)]; 
      }
      return prevProducts;
    });
  };

  return (
    <RecentContext.Provider value={{ recentProducts, addToRecent }}>
      {children}
    </RecentContext.Provider>
  );
};
