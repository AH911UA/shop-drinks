import React, { useContext, useEffect, useState } from 'react';
import { BasketContext } from './basket-context';
import BasketCard from './basketcard'
import {
    Link
} from 'react-router-dom';


export default function Basket() {

    const { productsBuy, setproductsBuy } = useContext(BasketContext);
    const [products, setproducts] = useState([])
 
    useEffect(() => {
        setproducts(productsBuy);
        window.scrollTo(-20, 0);
    }, [])
    
    useEffect(() => {
       setproductsBuy(products);
    }, [products])

    function onDelete(id) {

        let arr = productsBuy.map(p =>  p.prod.idDrink === id ?  { ...p, quantity: p.quantity - 1 } : p )
        arr = arr.filter(p => p.quantity > 0);
        
        setproducts(arr);
    }

    return (
        <div className="basket">
            <h1> Basket </h1>
            <div className="d-flex d-flex-wrap justify-content-around">
                {
                    products ?
                        products.map(p => <BasketCard key={p.idDrink} product={p.prod} quantity={p.quantity} onDelete={ onDelete }/>) 
                    : ''
                }
            </div>
            <div className="d-flex-bottom">

                <Link to={"/"}>
                    <button className="btn-primary b-75">
                        back
                    </button>
                </Link>
            </div>
        </div>
    );
}
