/* eslint-disable max-len */
import './styles.scss';
import { FR } from 'country-flag-icons/react/3x2';

function Text() {
  return (
    <div className="text-container">
      <div className="h2-h2">
        <h2> Si-Chim est une société francaise de fabrication de produits d'entretien.</h2>
      </div>
      <div className="text-container-text">
        <h2> Spécialisée dans la recherche et le développement au services des professionnels et des collectivités .</h2>
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
