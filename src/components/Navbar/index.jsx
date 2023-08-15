import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Products from './modalProducts';

import {
  toggleDisplayProductsModal,
} from '../../slices/modalSlice';

function Navbar() {
  const dispatch = useDispatch();

  const displayProductsModal = useSelector((state) => state.displayProductsModal);

  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <h2> Si-Chim </h2>
      </div>
      <div className="navbar-container navbar-middle">
        <button onClick={() => dispatch(toggleDisplayProductsModal())} className="navbar-button" type="button">
          <h2 className="navbar-h2">Nos Produits</h2>
        </button>
        <button className='navbar-button'>
          <h2 className="navbar-h2">Nos Documents</h2>
        </button>
      </div>
      <div className="navbar-container navbar-right">
        <h2>Contact</h2>
      </div>
      {displayProductsModal
      && <Products />}

    </header>
  );
}

export default Navbar;
