/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienSpecifique/SI_FORCE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI FORCE.pdf';
import serpillere from '../../../assets/icones/serpillere.jpg';
import sceau from '../../../assets/icones/sceau-eponge.jpg';

function Force() {
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
            Grâce à sa formule révolutionnaire SI FORCE permet de nettoyer de multiples surfaces :
            acier inoxydable, aluminium anodisé, céramique, peinture, plastique, tissus, moquette...
          </p>
          <p>
            SI FORCE a une action immédiate et spectaculaire, même sur les tâches difficiles.
          </p>
          <p>
            SI FORCE remet en état les plastiques (ordinateur, photocopieur...) et enlève les taches de
            nicotine , d’encre, etc...
          </p>
          <img className="icone-image" src={serpillere} alt='serpillere' />
          <img className="icone-image" src={sceau}  alt="sceau" />
        </div>
      </div>
    </div>
  );
}

export default Force;
