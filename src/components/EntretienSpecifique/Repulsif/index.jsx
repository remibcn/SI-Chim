/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienSpecifique/REPULSIF_CHIENS_CHATS-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI MENAGE.pdf';

function Repulsif() {
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
            SI REPULSIF grâce à sa formule révolutionnaire, permet d’éloigner les chiens et les
            chats des endroits où ils ont l’habitude d’uriner.
          </p>
          <p>
            SI REPULSIF à une action immédiate et spectaculaire; il peut s’appliquer sur différents
            supports comme les devantures de boutiques, cours, escaliers ......
          </p>
        </div>
      </div>
    </div>
  );
}

export default Repulsif;
