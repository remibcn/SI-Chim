import './styles.scss';
import { NavLink } from 'react-router-dom';

function Documents() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <NavLink to="/Cuisine">
          <p> Fiches techniques </p>
        </NavLink>
        <NavLink to="/Sols">
          <p> Sols </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Documents;
