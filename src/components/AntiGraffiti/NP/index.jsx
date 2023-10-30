/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/AntiGraffiti/14_-_NP_GRAFF-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT N.P GRAFF.pdf';

function NPGRAFF() {
  return (
    <div>
      <Navbar />
      <div className="np">
        <div className="np-left">
          <img className="np-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="np-right">
          <p>
            Nettoyant puissant qui élimine rapidement et facilement les inscriptions
            feutres et peintures lorsqu’elles ont été récemment appliquées.
          </p>
          <p>
            Ne pas appliquer sur les surfaces fragiles ( polycarbonates, lexans,
            makrolons ) et certains vernis.
          </p>
          <p>
            Avant toute application vérifiez la compatibilité avec la surface.
          </p>
          <p>
            Sans solvant pétrolier, terpènes ou solvant chloré.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NPGRAFF;
