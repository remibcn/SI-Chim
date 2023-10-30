/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Sanitaire/SI_DEO.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI CALC.pdf';

function Deo() {
  return (
    <div>
      <Navbar />
      <div className="deo">
        <div className="deo-left">
          <img className="deo-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="deo-right">
          <p>
            SI DEO est un désodorisant d’atmosphère qui permet de désodoriser les locaux
            durant plusieurs heures : bureaux, halls d’entrées, couloirs, salles de réunions,
            vestiaires, intérieurs de véhicules, salle d’attente, chambres. Exempt de CMR.
          </p>
          <p>
            Parfums disponibles : Citron, Coquelicot, Fleurs de coton, agrumes, Vent frais, Fraicheur Impérial, Lavande, Mille Fleurs,
            Thé vert, Pomme, Orchidée, Menthe, Magnolia, Floral.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Deo;
