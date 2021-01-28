import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';

import NavBar from './components/navbar';
import Product from './components/product';
import DrinksContextProvider from './components/product/product-context';
import ProductsShow from './components/productshow';
import Basket from './components/basket';

import ThrobberContextProvider from './components/throbber';
import Menu from './components/menu';
import Footer from './components/footer';


import './App.css';

function App() {
  
  const [isMenu, setisMenu] = useState(false);
  

  return (
    <>
       <ThrobberContextProvider>
          <DrinksContextProvider>
      <Router>
        <Menu isMenu={isMenu} setisMenu={ setisMenu }/>
      <div className="container">            
            
              <NavBar isShowMenu={ () => setisMenu(!isMenu) }/>
              
              
              <Switch>
                <Route path="/products/:id">
                  <Product/>
                </Route>

                <Route path="/basket">
                    <Basket />
                </Route>

                <Route path="/">
                  
                    <ProductsShow />
                    
                </Route>
              </Switch>    
            
        <Footer/>
        </div>
          </Router> 
           </DrinksContextProvider>
        </ThrobberContextProvider>
      </>
  );
}

export default App;
