import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Card({ product: { strDrink, strInstructions, strDrinkThumb, idDrink }, onBuy }) {
 
  const drink = {
                  id: idDrink,
                  name: strDrink,
                  description: strInstructions,
                  imageURL: strDrinkThumb,
                };

  return (
    <div className="card">
      <h2> { drink.name } </h2>
      <img src={ drink.imageURL} />
      <p className="mb-50"> {drink.description} </p>

      <div className="d-flex-bottom-2 justify-content-center">
        <button className="btn-primary" onClick={() => onBuy(drink.id)}>
          buy 
        </button>

        <Link to={`/products/${drink.id}`}>
          <button className="btn-primary">
            Info
          </button>
        </Link>
      </div>
    </div>
    )
}

Card.defaultProps = {
  product: {
    idDrink: -1,
    strDrink: 'wait',
    strInstructions: 'wait',
    strDrinkThumb: 'wait'
  }
};

Card.propTypes = {
  product: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  })
}