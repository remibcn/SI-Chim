/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/VitresSurfaces/VITRES_+-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI VITRES +.pdf';

function VitrePlus() {
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
            SI VITRES + est un nettoyant dégraissant pour les vitres, miroirs, pare-brises, écrans,
            surfaces plastiques, surfaces modernes,  stratifiées ou peintes.
          </p>
          <p>
            SI VITRES + possède un haut pouvoir nettoyant et sèche rapidement sans laisser
            ni trace, ni auréole.
          </p>
          <p>
            SI VITRES ECO laisse une odeur agréable de fraicheur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VitrePlus;
