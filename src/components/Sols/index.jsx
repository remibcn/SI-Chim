import image1 from '../../assets/sols/DECRASSOL-removebg-preview.png';
import image2 from '../../assets/sols/4_-_SI_DECAP-removebg-preview-2.png';
import image3 from '../../assets/sols/6_-_SI_MOQ-removebg-preview.png';
import image4 from '../../assets/sols/7_-_SI_PARK-removebg-preview.png';
import image5 from '../../assets/sols/12_-_SI_CLEAN_2-removebg-preview.png';
import image6 from '../../assets/sols/SI-ODOR.gif';
import image7 from '../../assets/sols/E-_Pictures_site-internet_2D_TEST1_2D.gif';
import image8 from '../../assets/sols/SI_SOL-removebg-preview.png';

import './styles.scss';
import { Link } from 'react-router-dom';

function Sols() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Sols </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <Link to="/Produits/Sols/SUPERDECRASSSOLS">
            <img src={image1} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Super Decrass Sols </p>
          <Link to="/Produits/Sols/DECAP">
            <img src={image2} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Decap </p>
          <Link to="/Produits/Sols/Odor2D">
            <img src={image7} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI Odor 2D </p>
        </div>
        <div className="colonne-sols2">
          <Link to="/Produits/Sols/MOQ">
            <img src={image3} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Moq </p>
          <Link to="/Produits/Sols/PARK">
            <img src={image4} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Park </p>
          <Link to="/Produits/Sols/SiSol">
            <img src={image8} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Sol </p>
        </div>
        <div className="colonne-sols3">
          <Link to="/Produits/Sols/CLEAN">
            <img src={image5} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Clean </p>
          <Link to="/Produits/Sols/Odor">
            <img src={image6} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Odor </p>
        </div>
      </div>
    </div>
  );
}

export default Sols;
