import image1 from '../../assets/EntretienAuto/SJ_WASH-removebg-preview.png';
import image2 from '../../assets/EntretienAuto/SI_JANTES-removebg-preview.png';
import image3 from '../../assets/EntretienAuto/lave_glaces-removebg-preview.png';
import image4 from '../../assets/EntretienAuto/turbonet-removebg-preview.png';
import './styles.scss';
import { Link } from 'react-router-dom';

function EntretienAuto() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Entretien Auto ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <Link to="/Produits/EntretienAuto/Wash">
            <img src={image1} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI Wash </p>
        </div>
        <div className="colonne-sols2">
          <Link to="/Produits/EntretienAuto/Jantes">
            <img src={image2} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si Jantes </p>
        </div>
        <div className="colonne-sols3">
          <Link to="/Produits/EntretienAuto/LaveGlaces">
            <img src={image3} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Laves Glaces </p>
        </div>
        <div className="colonne-sols4">
          <Link to="/Produits/EntretienAuto/Turbonet">
            <img src={image4} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Turbonet </p>
        </div>
      </div>
    </div>
  );
}

export default EntretienAuto;
