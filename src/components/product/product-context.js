import React, { useState, useEffect } from "react";
import { getDrinksByLetter, getDrinksByName } from '../api';


export const DrinksContext = React.createContext(null);

export default function DrinksContextProvider({ children }) {
   
  const [products, setproducts] = useState(null);
  const [searchProduct, setsearchProduct] = useState(null);
  const [isAlcoholic, setisAlcoholic] = useState(true);
  let urlName = 'a'

    useEffect(() => {
      getDrinks();
    }, [])
  
  useEffect(() => {
      getDrinks()
  }, [isAlcoholic])
  
  function getDrinks(callback = getDrinksByLetter) {

    setproducts(null);

    callback(urlName)
       .then(p => setTimeout(() => {
         if (isAlcoholic)
           setproducts(p['drinks']);
         else
           setproducts(p['drinks'].filter(d => d['strAlcoholic'] !== 'Alcoholic'));
       }, 500)).catch();
  }
  
    function onSearchProduct(name) {
      urlName = name;
      
      switch (name.length) {

        case 0:
          getDrinks(getDrinksByLetter)
            
          break;
        
        case 1:
          getDrinks(getDrinksByLetter)
            
          break;
        
        default:
          getDrinks(getDrinksByName)
           
      }
    }
 
    
  return (
    <DrinksContext.Provider
      value={{
        products, setsearchProduct, onSearchProduct,
        isAlcoholic, setisAlcoholic
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
}