/* eslint-disable max-len */
import './styles.scss';
import PARKIMAGE from '../../../assets/sols/SI_SOL-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI SOL.pdf';
import carcher from '../../../assets/icones/monobrosse.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';

function SiSol() {
  return (
    <div>
      <Navbar />
      <div className="SiSol">
        <div className="SiSol-left">
          <img className="SiSol-image" src={PARKIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="SiSol-right">
          <p>
            SI SOL est un dégraissant décrassant décapant  suractif solvanté pour le nettoyage et la remise en
            état de toutes les surfaces lavables : carrelages, sols plastiques, poubelles, sols d’atelier...
          </p>
          <p>
            SI SOL est peu moussant et efficace sur les huiles, les hydrocarbures, les traces de pneus, les sols
            industriels, les garages, etc...
          </p>
          <p>
            SI SOL est aussi un décapant pour divers types de sols. Il facilite l’élimination des couches
            d’auto-lustrants sur sols protégés tels que thermoplastiques, carrelages, pvc...
          </p>
          <img className="SiSol-image" src={carcher}  alt="monobrosse" />
          <img className="SiSol-image" src={serpillere}  alt="serpillere" />
          <img className="SiSol-image" src={autolaveuse} alt='autolaveuse' />
        </div>
      </div>
    </div>
  );
}

export default SiSol;
