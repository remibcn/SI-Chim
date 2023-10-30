/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienSpecifique/2_-_DECAPCIM-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI DECAPCIM.pdf';

function DecapSim() {
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
            SI DECAP CIM est un puissant détartrant polyvalent mis au point pour résoudre les problèmes de  décapage et détartrage difficiles. 
          </p>
          <p>
            SI DECAP CIM est particulièrement adapté au décollage du ciment sur les camions et  le
            matériel de bâtiment et travaux publics, ainsi que les laitances de ciment sur les  carre-
            lages ou pour le nettoyage des pierres et monuments (tombes, murs, statues...).
          </p>
          <p>
            SI DECAP CIM peut être également employé pour le détartrage des chaudières, bassins
            de piscines, filtres à diatomées, baies de lavage et vitres de serres...
          </p>
        </div>
      </div>
    </div>
  );
}

export default DecapSim;
