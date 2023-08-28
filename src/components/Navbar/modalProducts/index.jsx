import './styles.scss';
import { NavLink } from 'react-router-dom';

function Products() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <NavLink to="/Produits/Cuisine">
          <p> Cuisine </p>
        </NavLink>
        <NavLink to="/Produits/Sols">
          <p> Sols </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Sanitaire </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Vitres & surfaces </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Entretien spécifique </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Entretien auto </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Anti graffiti </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Entretien général </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Products;
