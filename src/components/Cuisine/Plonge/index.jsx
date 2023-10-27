/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/13_-_SI_PLONGE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI PLONGE.pdf';

function Plonge() {
  return (
    <div>
      <Navbar />
      <div className="plonge">
        <div className="plonge-left">
          <img className="plonge-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="plonge-right">
          <p>
            SI PLONGE est un dégraissant concentré pour le lavage de la vaisselle, de la verrerie, des
            plans de travail et tous les ustensiles pouvant se trouver au contact de denrées alimentaires,
            même en eau calcaire.
          </p>
          <p>
            SI PLONGE s’utilise également pour toutes les surfaces lavables ainsi que les surfaces
            stratifiées. Elimine tous corps gras, même les plus tenaces.
          </p>
          <p>
            SI PLONGE facilite le rinçage et le séchage de la vaisselle, en évitant la formation de 
            traînées blanches.
          </p>
          <p>
            SI PLONGE possède une agréable odeur d’agrumes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plonge;
