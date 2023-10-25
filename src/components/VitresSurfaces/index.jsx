import image1 from '../../assets/VitresSurfaces/VITRES_ECO-removebg-preview.png';

import './styles.scss';

function VitresSurfaces() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Vitres & Surfaces ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <a href="/Produits/VitresSurfaces/VitreEco">
            <img src={image1} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> Si Vitres Eco </p>
        </div>
        <div className="colonne-sols2">
        </div>
        <div className="colonne-sols3">
        </div>
      </div>
    </div>
  );
}

export default VitresSurfaces;
