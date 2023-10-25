import image1 from '../../assets/Cuisine/9_-_SI_RINCE-removebg-preview.png';
import image2 from '../../assets/Cuisine/LAVE_EAU_DURE-removebg-preview.png';

import './styles.scss';

function Cuisine() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Cuisine ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <a href="/Produits/Cuisine/SiRince">
            <img src={image1} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Vitres Eco </p>
        </div>
        <div className="colonne-sols2">
          <a href="/Produits/Cuisine/LaveEauDure">
            <img src={image2} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Vitres Eco </p>
        </div>
        <div className="colonne-sols3">
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
