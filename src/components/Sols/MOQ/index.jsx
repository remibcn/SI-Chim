/* eslint-disable max-len */
import './styles.scss';
import MOQIMAGE from '../../../assets/sols/6_-_SI_MOQ-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI MOQ.pdf';
import injection from '../../../assets/icones/Injection.jpg';

function MOQ() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={MOQIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SI MOQ est un shampooing pour le nettoyage des moquettes, tissus d’ameublement,
            tapis et toutes surfaces textiles synthétiques (de préférence) en lavage par le procédé
            d’injection extraction.
          </p>
          <p>
            SI MOQ ne mousse pratiquement pas et possède un excellent pouvoir nettoyant.
            sur les sols protégés tels que thermoplastiques, carrelages, pvc, pierres naturelles ou
            artificielles.
          </p>
          <img className="icone-image" src={injection} alt='injection' />
        </div>
      </div>
    </div>
  );
}

export default MOQ;
