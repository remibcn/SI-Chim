/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/Cuisine/16_-_SI_DETARTRE-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI DETART.pdf';

function Detart() {
  return (
    <div>
      <Navbar />
      <div className="detart">
        <div className="detart-left">
          <img className="detart-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="detart-right">
          <p>
            SI DETART est un détartrant concentré, contact alimentaire, pour chaudières, distributeurs
            automatiques,  machines chauffantes (bains-marie, marmites, lave verres,
            percolateurs, cafetières, théières, stérilisateurs, machines à laver la vaisselle...), des
            fontaines réfrigérantes, des machines à glaçons, de la verrerie, des surfaces en inox...
          </p>
          <p>
            SI DETART permet aussi la suppression des dépôts de tartre, de calcaire, des laitances
            de plâtre, de ciment et des traces de rouille sur le carrelage, la terre cuite, la pierre
            naturelle et les sols thermoplastiques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detart;
