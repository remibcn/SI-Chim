/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienSpecifique/SI_ODOR_+_PIN-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI ODOR + PIN.pdf';

function OdorPin() {
  return (
    <div>
      <Navbar />
      <div className="menage">
        <div className="menage-left">
          <img className="menage-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="menage-right">
          <p>
            SI ODOR + PIN est un détergent bactériostatique à haute concentration et à fort pouvoir rémanent.
          </p>
          <p>
            SI ODOR + PIN détruit intégralement toutes les souillures et absorbe toutes les mauvaises odeurs.
          </p>
          <p>
            Si ODOR + PIN nettoie toutes les surfaces traitées : locaux à poubelles, gaines,
            sanitaires, halls d’immeubles, ascenseurs, vestiaires...
          </p>
        </div>
      </div>
    </div>
  );
}

export default OdorPin;
