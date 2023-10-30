/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienAuto/SI_JANTES-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/SI JANTES.pdf';

function Jantes() {
  return (
    <div>
      <Navbar />
      <div className="jantes">
        <div className="jantes-left">
          <img className="jantes-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="jantes-right">
          <p>
            SI Jantes est un nettoyant dégraissant, puissant, rénovateur pour jantes peintes, aluminium ou enjoliveurs plastiques.
          </p>
          <p>
            SI Jantes à été concu pour ne pas altérer les jantes aluminium anodisé ou aluminiumt theromo-laqué.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jantes;
