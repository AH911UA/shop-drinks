import React, { useState, useEffect } from "react";
import { getDrinkById } from '../api'
export const BasketContext = React.createContext([]);

export default function BasketContextProvider({ children }) {
   
  const [productsBuy, setproductsBuy] = useState([]);


   function onBuy(id)
   {
        const isContains = productsBuy.length ? productsBuy.find(p => p['prod']['idDrink'] === id) : false;

        !isContains ?
            getDrinkById(id).then(p => {
                const prod = p['drinks'][0];
                setproductsBuy([...productsBuy, { prod, quantity : 1}]);
            }).catch()
            : setproductsBuy(productsBuy.map(p => 
                p['prod']['idDrink'] === id ? { ...p, quantity: p.quantity + 1 } : p
            ));        
    }


  return (
    <BasketContext.Provider
      value={{
            productsBuy, setproductsBuy, onBuy
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}