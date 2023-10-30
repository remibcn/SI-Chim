/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/VitresSurfaces/5_-_SI_MENAGE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI MENAGE.pdf';

function Menage() {
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
            SI MENAGE Détachant nettoyant  multi-usages
            SI MENAGE est particulièrement recommandé pour l’entretien des surfaces modernes et stratifiées
            et des objets : mobilier de bureau, matériel informatique, téléphones,  poignées de
            portes, peintures lavables, surfaces émaillées...
          </p>
          <p>
            Antistatique, SI MENAGE enlève les tâches d’encre, nettoie, dégraisse et désodorise.
          </p>
          <p>
            SI MENAGE sèche rapidement et ne laisse pas de trace, ni auréole.
          </p>
          <p>
            SI MENAGE est une solution hydro alcoolique au pouvoir mouillant élevé qui remplace
            avantageusement l’alcool à brûler.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menage;
