import image1 from '../../assets/VitresSurfaces/VITRES_ECO-removebg-preview.png';
import image2 from '../../assets/VitresSurfaces/VITRES_+-removebg-preview.png';
import image3 from '../../assets/VitresSurfaces/5_-_SI_MENAGE-removebg-preview.png';
import './styles.scss';
import { Link } from 'react-router-dom';

function VitresSurfacesProducts() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Vitres & Surfaces ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <Link to="/VitresSurfaces/VitreEco">
            <img src={image1} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> SI VITRES ECO </p>
        </div>
        <div className="colonne-sols2">
          <Link to="/VitresSurfaces/VitrePlus">
            <img src={image2} alt="test" className="column-image" />
          </Link>
          <p className="sols-test"> Si VITRES + </p>
        </div>
        <div className="colonne-sols3">
          <Link to="/VitresSurfaces/Menage">
            <img src={image3} alt="test" className="column-image-menage" />
          </Link>
          <p className="sols-test"> Si Ménage </p>
        </div>
      </div>
    </div>
  );
}

export default VitresSurfacesProducts;
