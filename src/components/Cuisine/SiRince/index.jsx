/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/9_-_SI_RINCE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI RINCE.pdf';

function SiRince() {
  return (
    <div>
      <Navbar />
      <div className="rince">
        <div className="rince-left">
          <img className="rince-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="rince-right">
          <p>
            SI RINCE est un liquide de rinçage automatique de la vaisselle en machine
            professionnelle.
          </p>
          <p>
            SI RINCE  accélère le rinçage, facilite le séchage de la vaisselle, ne laisse aucune 
            trace au séchage et rend la vaisselle et la verrerie brillantes.
          </p>
          <p>
            SI RINCE convient à tous types d’eaux.
            Un agent anti-mousse permet de maîtriser la formation de mousse.           
          </p>
        </div>
      </div>
    </div>
  );
}

export default SiRince;
