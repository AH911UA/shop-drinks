import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DrinksContext } from "../product/product-context";

export default function Menu({ isMenu, setisMenu })
{

    const { isAlcoholic, setisAlcoholic } = useContext(DrinksContext);

    function closeMenu() {
        setisMenu(false);
    }

    function onAlcoholic() {
        setisAlcoholic(!isAlcoholic);
    }

    return (
        <div className={isMenu ? 'sidebar open' : 'sidebar'}>
            <h3> menu </h3>
            <ul>
                <li>
                    <Link to={'/'} onClick={closeMenu}>
                        <button className="btn-primary btn-w-100">main</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/basket/'} onClick={closeMenu}>
                        <button className="btn-primary btn-w-100">basket</button>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => { closeMenu(); onAlcoholic(); }}>
                    <button className={`btn-primary btn-w-100  ${isAlcoholic ? 'btn-highlight' : ''}`}> with alcohol </button>
                    </Link>
                </li>
                <li>
                    <Link onClick={closeMenu}>
                        <button className="btn-primary btn-w-100">close</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}