/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienAuto/lave_glaces-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT LAVE GLACES.pdf';

function LaveGlaces() {
  return (
    <div>
      <Navbar />
      <div className="lave">
        <div className="lave-left">
          <img className="lave-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="lave-right">
          <p>
            Nettoyant concentré pour le lavage des vitres de voitures.
          </p>
          <p>
            LAVE GLACES  possède un haut pouvoir nettoyant, sèche rapidement sans
            laisser de traces. Grâce à sa forte concentration en alcool, il résiste à des
            températures proches de –15°C Produit pouvant être utilisé comme lave vitres classique pur ou dilué
          </p>
        </div>
      </div>
    </div>
  );
}

export default LaveGlaces;
