/* eslint-disable max-len */
import './styles.scss';
import SIMAINIMAGE from '../../../assets/Sanitaire/1_-_SI_MAINS-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI MAINS.pdf';
import monobrosse from '../../../assets/icones/monobrosse.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import sceau from '../../../assets/icones/sceau-eponge.jpg';

function CREMEMAINS() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={SIMAINIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SI MAINS est un gel doux, formulé spécialement pour être utilisé dans le lavage des
            mains.
          </p>
          <p>
            SI MAINS est parfaitement toléré lors de lavages consécutifs et fréquents.
          </p>
          <p>
            Solution prête à l’emploi, SI MAINS est utilisable dans tous les distributeurs de savon
            à remplissage
          </p>
        </div>
      </div>
    </div>
  );
}

export default CREMEMAINS;
