/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/VitresSurfaces/VITRES_ECO-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI VITRES ECO.pdf';

function VitreEco() {
  return (
    <div>
      <Navbar />
      <div className="vitre">
        <div className="vitre-left">
          <img className="vitre-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="vitre-right">
          <p>
            SI VITRES ECO  est un  nettoyant pour  les  vitres, miroirs, pare-brises, écrans,surfaces
            plastiques, surfaces modernes,  stratifiées ou peintes.
          </p>
          <p>
            SI VITRES ECO possède un haut pouvoir nettoyant et sèche rapidement sans laisser
            de trace.
          </p>
          <p>
            SI VITRES ECO laisse une odeur agréable de fraicheur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VitreEco;
