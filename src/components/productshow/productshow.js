import { useState, useContext, useEffect } from 'react';
import { DrinksContext } from '../product/product-context';
import { BasketContext } from '../basket/basket-context';
import { ThrobberContext } from '../throbber';

import Card from '../card';
import './style.css'

export default function ProductsShow () { // nfn

    const { products } = useContext(DrinksContext);
    const { onBuy } = useContext(BasketContext);
    const { throbber } = useContext(ThrobberContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ ])
   
    return (
        <div className="containerProducts">
            {
                products ?
                    products.map( p =>
                        <Card key={p.idDrink} product={p} onBuy={ onBuy }/>  
                    )
                    : throbber
            }
        </div>
    );
    
}
