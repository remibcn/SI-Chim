/* eslint-disable max-len */
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { FR } from 'country-flag-icons/react/3x2';

function Text() {
  return (
    <div className="text-container">
      <div className="h2-h2">
        <h2> SiChim est une société francaise de fabrication spécialiste dans la recherche et le developpement d'une game complete </h2>
      </div>
      <div className="text-container-text">
        <h2> de produits d'hygienes, d'entretien et de maintenance pour les professionels et les collectivités</h2>
      </div>
      <div className="text-container-p">
        <p> Fondée depuis plus de 20 ans par 2 chimistees passionées, Si-Chim se veut innovante aussi bien dans ses formulations que dans le respect des normes et de l'environnement</p>
      </div>
      <div>
        <FR title="United States" className="flag" />
      </div>
      <div className="text-button">
        <a href="#test">
          <button className="text-button-products" type="button"> Nos Produits </button>
        </a>
      </div>
    </div>
  );
}

export default Text;
