import './styles.scss';
import { productsModal } from '../../slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from './modalProducts';
import logo from '../../assets/newlogosichim2 blanc.png';

function Navbar() {
  const { isOpenProducts } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <a href="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>
      </div>
      <div className="navbar-container navbar-middle">
        <button className="navbar-button" type="button" onClick={() => dispatch(productsModal())}>
          <h2 className="navbar-h2">Nos Produits</h2>
        </button>
      </div>
      <div className="navbar-container navbar-right">
        <Link to="/contact">
          <h2>Contact</h2>
        </Link>
      </div>
      {isOpenProducts && <Products />}
    </header>
  );
}

export default Navbar;
