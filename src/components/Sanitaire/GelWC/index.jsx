/* eslint-disable max-len */
import './styles.scss';
import GELWC from '../../../assets/Sanitaire/SI_GEL_WC-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI GEL WC.pdf';
import monobrosse from '../../../assets/icones/monobrosse.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import sceau from '../../../assets/icones/sceau-eponge.jpg';

function GelWC() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={GELWC} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SI GEL WC est un gel désodorisant hyper actif pour nettoyer et détartrer les
            sanitaires, cuvettes, urinoirs, canalisations…
          </p>
          <p>
            SI GEL WC ravive la brillance et laisse une agréable odeur d’amende.
          </p>
          <p>
            Sans danger pour les fosses septiques dans les conditions normales
            d’utilisation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GelWC;
