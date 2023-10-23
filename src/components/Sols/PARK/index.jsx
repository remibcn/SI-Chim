/* eslint-disable max-len */
import './styles.scss';
import PARKIMAGE from '../../../assets/sols/7_-_SI_PARK-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI PARK.pdf';
import carcher from '../../../assets/icones/carcher.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';

function PARK() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={PARKIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SI PARK est un nettoyant, dégraissant surpuissant conçu spécialement pour le nettoyage industriel,
            le nettoyage des parkings ou des garages et les gros travaux de remise en état.
          </p>
          <p>
            SI PARK permet la rénovation des sols et surfaces fortement encrassés par les graisses,  les   huiles de coupe,
            les poussières de frein, le film de trafic routier, les traces noires de roues, de pneus ou de chaussures.
          </p>
          <p>
            SI PARK émulsionne également rapidement la suie causée par un sinistre incendie.
          </p>
          <img className="icone-image" src={carcher}  alt="monobrosse" />
          <img className="icone-image" src={serpillere}  alt="serpillere" />
          <img className="icone-image" src={autolaveuse} alt='autolaveuse' />
        </div>
      </div>
    </div>
  );
}

export default PARK;
