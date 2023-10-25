/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/LAVE_EAU_DURE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI LAV EAU DURE.pdf';

function LaveEauDure() {
  return (
    <div>
      <Navbar />
      <div className="calc">
        <div className="calc-left">
          <img className="calc-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="calc-right">
          <p>
            SI LAV EAU DURE est un nettoyant dégraissant pour le lavage de la vaisselle en
            machine industrielle.
          </p>
          <p>
            SI LAV EAU DURE convient pour les eaux où le TH est supérieur à 15°.
          </p>
          <p>
            SI LAV EAU DURE  élimine parfaitement les graisses, féculents, albuminoïdes,
            taches de vin, thé, café, etc ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default LaveEauDure;
