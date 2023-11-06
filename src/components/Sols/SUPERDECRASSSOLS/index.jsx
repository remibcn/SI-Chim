/* eslint-disable max-len */
import './styles.scss';
import DECRASSIMAGE from '../../../assets/sols/DECRASSOL-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SUPER DECRASSE SOLS.pdf';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import monobrosse from '../../../assets/icones/monobrosse.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';

function SUPERDECRASSSOL() {
  return (
    <div>
      <Navbar />
      <div className="SUPERDECRASSSOL">
        <div className="SUPERDECRASSSOL-left">
          <img className="SUPERDECRASSSOL-image" src={DECRASSIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="SUPERDECRASSSOL-right">
          <p>
            SUPER DECRASSE SOLS nettoie dégraisse et décrasse les sols, tels que thermoplastiques,
            carrelages, pierres naturelles ou artificielles, linos,  terrazzo…
          </p>
          <p>
            Elimine les graisses végétales ou minérale grâce à une synergie de tensio-actfs lui donnant un fort pouvoir mouillant.
          </p>
          <img className="SUPERDECRASSSOL-image" src={autolaveuse} alt='autolaveuse' />
          <img className="SUPERDECRASSSOL-image" src={monobrosse}  alt="monobrosse" />
          <img className="SUPERDECRASSSOL-image" src={serpillere}  alt="serpillere" />
        </div>
      </div>
    </div>
  );
}

export default SUPERDECRASSSOL;
