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
        <NavLink to="/Produits/Sanitaire">
          <p> Sanitaires </p>
        </NavLink>
        <NavLink to="/VitresSurfaces">
          <p> Vitres & surfaces </p>
        </NavLink>
        <NavLink to="/Produits/EntretienSpecifique">
          <p> Entretien spécifique </p>
        </NavLink>
        <NavLink to="/Produits/EntretienAuto">
          <p> Entretien auto </p>
        </NavLink>
        <NavLink to="/Produits/AntiGraffiti">
          <p> Anti graffiti </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Products;
