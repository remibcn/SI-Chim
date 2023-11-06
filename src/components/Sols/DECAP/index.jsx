/* eslint-disable max-len */
import './styles.scss';
import DECAPIMAGE from '../../../assets/sols/4_-_SI_DECAP-removebg-preview-2.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI DECAP.pdf';
import monobrosse from '../../../assets/icones/monobrosse.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';

function DECAP() {
  return (
    <div>
      <Navbar />
      <div className="decap">
        <div className="decap-left">
          <img className="decap-image" src={DECAPIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decap-right">
          <p>
            SI DECAP est un décapant puissant pour tous types de sols lavables.
          </p>
          <p>
            SI DECAP élimine facilement et rapidement les couches d’émulsions, même les plus encrassées
            sur les sols protégés tels que thermoplastiques, carrelages, pvc, pierres naturelles ou
            artificielles.
          </p>
          <img className="icone-image" src={monobrosse}  alt="monobrosse" />
          <img className="icone-image" src={serpillere}  alt="serpillere" />
        </div>
      </div>
    </div>
  );
}

export default DECAP;
