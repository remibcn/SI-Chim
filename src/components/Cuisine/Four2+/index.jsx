/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/8_-_SI_FOUR_2+-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI FOUR 2+ copie.pdf';

function Four() {
  return (
    <div>
      <Navbar />
      <div className="four2">
        <div className="four2-left">
          <img className="four2-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="four2-right">
          <p>
            SI FOUR 2 +  est un puissant dégraissant pour les gaines, les hottes, les grilles ainsi que tous les
            systèmes d’extraction en cuisine industrielle.
          </p>
          <p>
            SI FOUR 2 +  permet le dégraissage des fours très encrassés.
          </p>
          <p>
            SI FOUR 2 + pénètre, dissout et émulsionne les graisses végétales et animales, et les souillures 
            tenaces, cuites, fraîches ou sèches.
          </p>
          <p>
            Eviter toutes projection sur l’aluminium, le cuivre, les surfaces peintes, les parois intérieures des 
            mini fours, des fours à pyrolyse et des fours à micro-ondes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Four;
