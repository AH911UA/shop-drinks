import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


export default function BasketCard({ product: { strDrink, strInstructions, strDrinkThumb, idDrink }, quantity, onDelete}) {
 
  const drink = ({id: idDrink,
                  name: strDrink,
                  description: strInstructions,
                  imageURL: strDrinkThumb,
                });

  return (
      <div className="card">
        <h2> { drink.name }  </h2>
        <img src={drink.imageURL} />
        <p className="mb-150"> { drink.description} </p>

        <aside className="absolute b-75 ta-right">
          <p className="underline "> quantity : { quantity } </p>
        </aside>

      
        <div className="d-flex-bottom-1 justifu-content-center"> 
              <button className="btn-primary" onClick={ () => onDelete(drink.id) }>
                delete 
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

BasketCard.defaultProps = {
  product: {
    idDrink: -1,
    strDrink: 'wait',
    strInstructions: 'wait',
    strDrinkThumb: 'wait'
  }
};

BasketCard.propTypes = {
  product: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  })
}