import React from "react";
import { useRecent } from "./RecentContext";

export const Recent = () => {
  const { recentProducts } = useRecent();

  return (
    <>
      <div class=" container mt-5 border border-5">
        
      
      <h2>Recently Viewed Products</h2>
      <ul>
        {recentProducts.map((product,index) => (
            <>
              <div class="recent" key={index}> 
              <div class="card" style={{width: '200px'}}>
                <div class=""><img src={product.image} style={{width: '200px'}}/></div>
                <div class="card-body">
                  <p class="card-text align-center">{product.author_name}</p>
                </div>
              </div>
              </div>
            </>
          // <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      </div>
    </>
  );
};
