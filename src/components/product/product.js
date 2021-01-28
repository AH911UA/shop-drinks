import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDrinkById } from '../api';
import { BasketContext } from '../basket/basket-context';
import './style.css';

export default function Product() {

  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [ingredients, setingredients] = useState([]);
  const { onBuy } = useContext(BasketContext);

  useEffect(() => {
      getDrinkById(id)
        .then(drinks => setproduct(drinks['drinks'][0]));    
  }, []);

  useEffect(() => {
    setingredients(() => {
      let arr = [];
        for (let key in product) 
          if (key.includes('strIngredient') && product[key] != null)
            arr.push(<li> {product[key]} </li>);
        return arr;
      }
    )
  }, [product]);


  return (
    <>
      {
        product ?
          <div className="product"> 

            <h2> {product.strDrink} </h2>
            <img src={product.strDrinkThumb} />
            <h3> Category : { product.strCategory } </h3>
            <p className="productDescription"> { product.strInstructions }  </p>
            <div>
              <input type="checkbox" id="alcoholic" name="alcoholic"
                checked={product.strAlcoholic == "Alcoholic"} />
              <label for="alcoholic">Alcoholic</label>
            </div>

            <ul>
              {ingredients}
            </ul>

            <div className="d-flex-bottom">
              <button className="btn-primary"
                onClick={() => onBuy(id)}>
                buy
              </button>

              <Link to={`/`}>
                <button className="btn-primary">
                  back
                </button>
              </Link>
            </div>
          </div> 
          : ''
      }
    </>
  )
}

Product .defaultProps = {
  product: PropTypes.object,
};