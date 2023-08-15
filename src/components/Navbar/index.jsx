import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../slices/modalSlice';
import Products from './modalProducts';

function Navbar() {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <h2> Si-Chim </h2>
      </div>
      <div className="navbar-container navbar-middle">
        <button className="navbar-button" type="button" onClick={() => dispatch(openModal())}>
          {isOpen && <Products />}
          <h2 className="navbar-h2">Nos Produits</h2>
        </button>
        <button className="navbar-button" type="button">
          <h2 className="navbar-h2">Nos Documents</h2>
        </button>
      </div>
      <div className="navbar-container navbar-right">
        <h2>Contact</h2>
      </div>
    </header>
  );
}

export default Navbar;
