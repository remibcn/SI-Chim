/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienSpecifique/ANTI_MOUSSE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT ANTIMOUSSE.pdf';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import injection from '../../../assets/icones/Injection.jpg';

function AntiMousse() {
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
            Elimine immédiatement la mousse qui se produit lors de l’utilisation de
            certains détergents en machine ou dans le cas de machines à 
            injection/ extraction, lorsqu’il y a aspiration des résidus moussants des shampooings
            traditionnels.
          </p>
          <img className="icone-image" src={autolaveuse} alt='autolaveuse' />
          <img className="icone-image" src={injection}  alt="serpillere" />
        </div>
      </div>
    </div>
  );
}

export default AntiMousse;
