import image1 from '../../assets/EntretienSpecifique/ANTI_MOUSSE-removebg-preview.png';
import image2 from '../../assets/EntretienSpecifique/SI_ODOR_+_PIN-removebg-preview.png';
import image3 from '../../assets/EntretienSpecifique/2_-_DECAPCIM-removebg-preview.png';
import image4 from '../../assets/EntretienSpecifique/SI_FORCE-removebg-preview.png';
import image5 from '../../assets/EntretienSpecifique/SI_ALGUES-removebg-preview.png';
import image6 from '../../assets/EntretienSpecifique/REPULSIF_CHIENS_CHATS-removebg-preview.png';

import './styles.scss';
import { Link } from 'react-router-dom';

function EntretienSpecifique() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Entretien Spécifique ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <Link to="/Produits/EntretienSpecifique/AntiMousse">
            <img src={image1} alt="test" className="column-image" />
          </Link>
          <p className="sols-test">  Anti Mousse </p>
          <Link to="/Produits/EntretienSpecifique/DecapSim">
            <img src={image3} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI Decap Cim</p>
        </div>
        <div className="colonne-sols2">
          <Link to="/Produits/EntretienSpecifique/Force">
            <img src={image4} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Force </p>
          <Link to="/Produits/EntretienSpecifique/Algues">
            <img src={image5} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Algues </p>
        </div>
        <div className="colonne-sols3">
          <Link to="/Produits/EntretienSpecifique/OdorPin">
            <img src={image2} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Odor+ Pin</p>
          <Link to="/Produits/EntretienSpecifique/Repulsif">
            <img src={image6} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI Répulsif </p>
        </div>
      </div>
    </div>
  );
}

export default EntretienSpecifique;
