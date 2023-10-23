/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Sanitaire/SANI_CLEAN_SI_ACID-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SANI-CLEAN.pdf';

function SaniClean() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SANI-CLEAN est un nettoyant détartrant bactériostatique pour les sanitaires,
            salles  de  bain,  douches,  WC,  et  toutes  surfaces  lavables :  céramiques,
            porcelaine,    robinetteries, chromes, carrelages et sols...
          </p>
          <p>
            SANI-CLEAN enlève le voile calcaire et redonne aux surfaces leur brillance.
          </p>
          <p>
            SANI-CLEAN n’attaque pas les supports métalliques présents dans les sanitaires.
          </p>
          <p>
            SANI-CLEAN laisse une odeur agréable fleurie
          </p>
        </div>
      </div>
    </div>
  );
}

export default SaniClean;
