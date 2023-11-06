/* eslint-disable max-len */
import './styles.scss';
import PARKIMAGE from '../../../assets/sols/SI-ODOR.gif';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI ODOR.pdf';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import sceau from '../../../assets/icones/sceau-eponge.jpg';

function Odor() {
  return (
    <div>
      <Navbar />
      <div className="odor">
        <div className="odor-left">
          <img className="odor-image" src={PARKIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="odor-right">
          <p>
            SI ODOR est un détergent désodorisant bactériostatique pour toutes surfaces
            lavables (surfaces modernes ou stratifiées, surfaces peintes, sols, sanitaires...)
          </p>
          <p>
            SI ODOR est parfaitement adapté pour le nettoyage des sols protégés par des
            émulsions, de part son pH neutre.
          </p>
          <p>
            Senteurs longue rémanence : DAKKAR, CITRON, AGRUMES , POMME, PIN, FIGUE,
            FRAISE, FRAICHEUR IMPERIALE, ORANGE CANNELLE,  PAMPLEMOUSSE, OCEANE,
            TROPICANA, LAVANDE, MUGUET, FRAIS... Existe aussi SANS PARFUM
          </p>
          <img className="odor-image" src={serpillere}  alt="serpillere" />
          <img className="odor-image" src={autolaveuse} alt='autolaveuse' />
        </div>
      </div>
    </div>
  );
}

export default Odor;
