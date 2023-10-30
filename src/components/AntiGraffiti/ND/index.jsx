/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/AntiGraffiti/15_-_ND_GRAFF-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT N.P GRAFF.pdf';

function NDGRAFF() {
  return (
    <div>
      <Navbar />
      <div className="nd">
        <div className="nd-left">
          <img className="nd-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="nd-right">
          <p>
            Nettoyant doux qui élimine rapidement et facilement les inscriptions
            feutres et peintures lorsqu’elles ont été récemment appliquées
            sans endommager les supports peints ou vernis .
          </p>
          <p>
            Une opération rapide est nécessaire, ne pas laisser agir le produit trop longtemps.
          </p>
          <p>
            Sans solvant pétrolier, terpènes ou solvant chloré.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NDGRAFF;
