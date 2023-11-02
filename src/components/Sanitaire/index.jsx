import image1 from '../../assets/Sanitaire/1_-_SI_MAINS-removebg-preview.png';
import image2 from '../../assets/Sanitaire/SANI_CLEAN_SI_ACID-removebg-preview.png';
import image3 from '../../assets/Sanitaire/SI_DEO.png';
import image4 from '../../assets/Sanitaire/SI_GEL_WC-removebg-preview.png';
import image5 from '../../assets/Sanitaire/SI_CALC-removebg-preview.png';
import image6 from '../../assets/sols/SI-ODOR.gif';

import './styles.scss';
import { Link } from 'react-router-dom';

function Sanitaire() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Sanitaire ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <Link to="/Produits/Sanitaire/CREMEMAINS">
            <img src={image1} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Crème Mains </p>
          <Link to="/Produits/Sanitaire/DEO">
            <img src={image3} alt="test" className="column-imagedeo" />
          </Link>
          <p className="sols-test"> Déo </p>
        </div>
        <div className="colonne-sols2">
          <Link to="/Produits/Sanitaire/GelWC">
            <img src={image4} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Gel WC </p>
          <Link to="/Produits/Sanitaire/Calc">
            <img src={image5} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Calc </p>
        </div>
        <div className="colonne-sols3">
          <Link to="/Produits/Sanitaire/SaniClean">
            <img src={image2} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Sani Clean </p>
        </div>
      </div>
    </div>
  );
}

export default Sanitaire;
