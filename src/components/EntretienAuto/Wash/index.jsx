/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienAuto/SJ_WASH-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI WASH.pdf';

function Wash() {
  return (
    <div>
      <Navbar />
      <div className="wash">
        <div className="wash-left">
          <img className="wash-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="wash-right">
          <p>
            SI WASH est un shampooing concentré qui dégraisse et casse le film statique qui se
            dépose sur les carrosseries.
          </p>
          <p>
            SI WASH convient également pour le nettoyage des bâches : camions, piscines et chapiteaux....
          </p>
        </div>
      </div>
    </div>
  );
}

export default Wash;
