/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienAuto/turbonet-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT TURBONET.pdf';

function Turbonet() {
  return (
    <div>
      <Navbar />
      <div className="turbonet">
        <div className="turbonet-left">
          <img className="turbonet-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="turbonet-right">
          <p>
            TURBONET est un shampooing spécialement conçu pour le nettoyage des intérieurs
            de véhicules : sièges, tapis de sol et moquettes, panneaux de portes, plafonniers et
            toutes surfaces textiles synthétiques (de préférence) en lavage par le procédé
            d’injection extraction
          </p>
          <p>
            TURBONET  remet également en état les tableaux de bord et surfaces plastifiées.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Turbonet;
