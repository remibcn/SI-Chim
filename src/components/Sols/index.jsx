import image1 from '../../assets/sols/DECRASSOL-removebg-preview.png';
import image2 from '../../assets/sols/4_-_SI_DECAP-removebg-preview-2.png';
import image3 from '../../assets/sols/6_-_SI_MOQ-removebg-preview.png';
import image4 from '../../assets/sols/7_-_SI_PARK-removebg-preview.png';
import image5 from '../../assets/sols/12_-_SI_CLEAN_2-removebg-preview.png';
import image6 from '../../assets/sols/SI-ODOR.gif';
import image7 from '../../assets/sols/E-_Pictures_site-internet_2D_TEST1_2D.gif';
import image8 from '../../assets/sols/SI_SOL-removebg-preview.png';

import './styles.scss';

function Sols() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Sols </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <a href=" /Produits/Sols/SUPERDECRASSSOLS">
            <img src={image1} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Super Decrass Sols </p>
          <a href=" /Produits/Sols/DECAP">
            <img src={image2} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Decap </p>
          <a href=" /Produits/Sols/Odor2D">
            <img src={image7} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> SI Odor 2D </p>
        </div>
        <div className="colonne-sols2">
          <a href=" /Produits/Sols/MOQ">
            <img src={image3} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Moq </p>
          <a href="/Produits/Sols/PARK">
            <img src={image4} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Park </p>
          <a href="/Produits/Sols/SiSol">
            <img src={image8} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Sol </p>
        </div>
        <div className="colonne-sols3">
          <a href=" /Produits/Sols/CLEAN">
            <img src={image5} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Clean </p>
          <a href=" /Produits/Sols/Odor">
            <img src={image6} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Odor </p>
        </div>
      </div>
    </div>
  );
}

export default Sols;
