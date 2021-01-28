import './style.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DrinksContext } from '../product/product-context';

export default function NavBar({ isShowMenu })
{
  
  const { setsearchProduct, onSearchProduct } = useContext(DrinksContext);
  const [showMenu, setshowMenu] = useState(false)
  
  let searchStr = '';

  function onMenu() {
    isShowMenu();
    setshowMenu(!showMenu);
  }

  function onSearch({ target : { value } }) {
    searchStr = value;
  }

  function onSubmit(e)
  {
    e.preventDefault();

    onSearchProduct(searchStr.trim());
  }

  return (
    <nav >
      <div className="navbar justify-content-between">
        <div className="d-flex">
         
          <a onClick={ onMenu } className={`logo-href ${showMenu ? 'logo-href-select' : ''}`} >
              <i class="fa fa-bars fa-2x"></i>
          </a>
          <div className="digit">
            <h2 className="stripe"> Best shop drink </h2>
          </div>
        </div>
        <div className="d-flex nav-container justify-content-between">

          <form onChange={onSearch} onSubmit={onSubmit}>
            <input type="text" className="input-primary"/>
            <button className="btn-primary"> search </button>
          </form>

          <Link to="/basket" className="basket-fa">
            <i className="fa fa-shopping-basket fa-lg"></i>
          </Link>
        </div>  
      </div>
    </nav>
  );
}