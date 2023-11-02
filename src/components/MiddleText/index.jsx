/* eslint-disable max-len */
import './styles.scss';
import { FR } from 'country-flag-icons/react/3x2';

function Text() {
  return (
    <div className="text-container">
      <div className="h2-h2">
        <h2> Si CHIM est une société francaise spécialisée dans la conception, la fabrication </h2>
      </div>
      <div className="text-container-text">
        <h2> et le developpement de produits de nettoyage pour les professionels.</h2>
      </div>
      <div className="text-container-p">
        <p> Fondée depuis plus de 20 ans par 2 chimistes, Si CHIM offre à ses clients des formules et un packaging à façon</p>
      </div>
      <div>
        <FR title="United States" className="flag" />
      </div>
      <ul className="text-list">
        <li className='lili'>
          Fabrication Française
        </li>
        <li className='lili'>
          Formulation à façon
        </li>
        <li className='lili'>
          Flexibilité et disponibilité
        </li>
        <li className='lili'>
          Personnalisation du packaging
        </li>
      </ul>
      <div className="text-button">
        <a href="#Produits">
          <button className="text-button-products" type="button"> Nos Produits </button>
        </a>
      </div>
    </div>
  );
}

export default Text;
