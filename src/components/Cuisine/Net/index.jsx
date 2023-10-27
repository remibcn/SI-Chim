/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/SI_NET-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI LAV EAU DURE.pdf';

function Net() {
  return (
    <div>
      <Navbar />
      <div className="net">
        <div className="net-left">
          <img className="net-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="net-right">
          <p>
            SI NET est un nettoyant dégraissant concentré universel pour toutes surfaces
            lavables.
          </p>
          <p>
            SI NET émulsionne et élimine les graisses, les huiles et tous les dépôts tenaces sur 
            les surfaces non protégées.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Net;
