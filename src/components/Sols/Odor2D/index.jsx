/* eslint-disable max-len */
import './styles.scss';
import PARKIMAGE from '../../../assets/sols/E-_Pictures_site-internet_2D_TEST1_2D.gif';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI ODOR 2D.pdf';
import carcher from '../../../assets/icones/carcher.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import sceau from '../../../assets/icones/sceau-eponge.jpg';

function Odor2D() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={PARKIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SI ODOR 2D est un détergent désodorisant pour toutes surfaces lavables (surfaces   mo-
            dernes ou stratifiées, surfaces peintes, sols, sanitaires...)
          </p>
          <p>
            SI ODOR 2D est parfaitement adapté pour le nettoyage des sols protégés par des
            émulsions, de part son pH neutre.
          </p>
          <p>
            Senteurs longue rémanence : DAKKAR, CITRON, AGRUMES , POMME, PIN, FIGUE,
            FRAISE, FRAICHEUR IMPERIALE, ORANGE CANNELLE,  PAMPLEMOUSSE, OCEANE,
            LAVANDE, TROPICANA, MUGUET, MURE LITCHI, COQUELICOT, FRAIS, PECHE...
          </p>
          <img className="icone-image" src={sceau }  alt="monobrosse" />
          <img className="icone-image" src={serpillere}  alt="serpillere" />
          <img className="icone-image" src={autolaveuse} alt='autolaveuse' />
        </div>
      </div>
    </div>
  );
}

export default Odor2D;
