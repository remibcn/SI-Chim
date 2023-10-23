/* eslint-disable max-len */
import './styles.scss';
import DECAPIMAGE from '../../../assets/sols/12_-_SI_CLEAN_2-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI CLEAN.pdf';
import monobrosse from '../../../assets/icones/monobrosse.jpg';
import serpillere from '../../../assets/icones/serpillere.jpg';
import autolaveuse from '../../../assets/icones/autolaveuse.jpg';
import sceau from '../../../assets/icones/sceau-eponge.jpg';

function CLEAN() {
  return (
    <div>
      <Navbar />
      <div className="decrass">
        <div className="decrass-left">
          <img className="decrass-image" src={DECAPIMAGE} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="decrass-right">
          <p>
            SI CLEAN permet la rénovation des sols et surfaces fortement encrassés.
          </p>
          <p>
            SI CLEAN est un nettoyant, dégraissant surpuissant multi-surfaces pour sols non pro-
            tégés, murs, portes , gaines, plastiques, carrelages, grès, marbre, ciment peint...
          </p>
          <p>
            SI CLEAN est peu moussant, spécifiquement étudié pour les sols à très fort passage
            des grandes surfaces.
          </p>
          <img className="icone-image" src={monobrosse}  alt="monobrosse" />
          <img className="icone-image" src={serpillere}  alt="serpillere" />
          <img className="icone-image" src={autolaveuse} alt='autolaveuse' />
          <img className="icone-image" src={sceau} alt='sceau' />
        </div>
      </div>
    </div>
  );
}

export default CLEAN;
