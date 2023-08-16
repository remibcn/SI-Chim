/* eslint-disable max-len */
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';

function Text() {
  return (
    <div className="text-container">
      <div>
        <h2 className="text-h2-1"> Site commerçant de Si-Chim</h2>
        <h2 className="text-h2"> Les experts des produits d&apos;entretiens</h2>
      </div>
      <div>
        <h3>
          Si-Chim , formulateur, fabricant français de produits professionnels pour l’élevage, l’industrie et les collectivités.
        </h3>
      </div>
      <div className="text-button">
        <NavLink to="/Nos-Produits">
          <button type="button" className="text-button-products">  Nos Produits </button>
        </NavLink>
        <button className="text-button-documents" type="button"> Nos Documents </button>
      </div>
    </div>
  );
}

export default Text;
