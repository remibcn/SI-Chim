/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/10_-_SPEED_FLASH-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SPEED FLASH.pdf';

function SpeedFlash() {
  return (
    <div>
      <Navbar />
      <div className="speed">
        <div className="speed-left">
          <img className="speed-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="speed-right">
          <p>
            Grâce à sa formule révolutionnaire SPEEDFLASH permet de nettoyer de  multiples surfaces :
            acier inoxydable, aluminium anodisé, céramique, peinture, plan de travail de cuisine, plastique,
            tissus, moquette, etc...
          </p>
          <p>
            SPEEDFLASH a une action immédiate et spectaculaire, même sur les tâches difficiles. Il remet en
            état les plastiques (ordinateurs, photocopieurs, etc...) et enlève les taches de nicotine, d’encre,
            etc...
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpeedFlash;
