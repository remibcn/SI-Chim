/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Sanitaire/SI_CALC-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI DEO.pdf';

function Calc() {
  return (
    <div>
      <Navbar />
      <div className="calc">
        <div className="calc-left">
          <img className="calc-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="calc-right">
          <p>
            SI CALC est un puissant détartrant rénovant concentré pour les sanitaires, salles
            de bain, douches, WC, et toutes surfaces lavables : céramiques, porcelaine,
            robinetteries, chromes, carrelages et sols...
          </p>
          <p>
            SI CALC enlève le voile calcaire, les traces de savon et de rouille et redonne aux
            surfaces leur brillance.
          </p>
          <p>
            SI CALC n’attaque pas les supports métalliques présents dans les sanitaires.
          </p>
          <p>
            SI CALC laisse une odeur agréable fleurie.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calc;
