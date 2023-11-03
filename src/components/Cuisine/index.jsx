import image1 from '../../assets/Cuisine/9_-_SI_RINCE-removebg-preview.png';
import image2 from '../../assets/Cuisine/LAVE_EAU_DURE-removebg-preview.png';
import image3 from '../../assets/Cuisine/13_-_SI_PLONGE-removebg-preview.png';
import image4 from '../../assets/Cuisine/16_-_SI_DETARTRE-removebg-preview.png';
import image5 from '../../assets/Cuisine/8_-_SI_FOUR_2+-removebg-preview.png';
import image6 from '../../assets/Cuisine/10_-_SPEED_FLASH-removebg-preview.png';
import image7 from '../../assets/Cuisine/SI_NET-removebg-preview.png';
import { Link } from 'react-router-dom';

import './styles.scss';

function Cuisine() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Cuisine  </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <Link to="/Produits/Cuisine/SiRince">
            <img src={image1} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI RINCE </p>
          <Link to="/Produits/Cuisine/Detart">
            <img src={image4} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI DETART </p>
          <Link to="/Produits/Cuisine/Net">
            <img src={image7} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI NET </p>
        </div>
        <div className="colonne-sols2">
          <Link to="/Produits/Cuisine/LaveEauDure">
            <img src={image2} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> LAVE EAU DURE </p>
          <Link to="/Produits/Cuisine/Four2+">
            <img src={image5} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI FOUR2+ </p>
        </div>
        <div className="colonne-sols3">
          <Link to="/Produits/Cuisine/Plonge">
            <img src={image3} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI PLONGE </p>
          <Link to="/Produits/Cuisine/SpeedFlash">
            <img src={image6} alt="test" className="column-imagespeed" />
          </Link>
          <p className="sols-test"> SPEEDFLASH </p>
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
