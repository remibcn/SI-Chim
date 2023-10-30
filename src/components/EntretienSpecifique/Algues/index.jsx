/* eslint-disable max-len */
import './styles.scss';
import SaniCleanImage from '../../../assets/EntretienSpecifique/SI_ALGUES-removebg-preview.png';
import Navbar from '../../Navbar';
import PDF from '../../../assets/Fiches/FT SI ALGUES.pdf';

function Algues() {
  return (
    <div>
      <Navbar />
      <div className="algues">
        <div className="algues-left">
          <img className="algues-image" src={SaniCleanImage} alt="test" />
          <a href={PDF}> Fiche technique </a>
        </div>
        <div className="algues-right">
          <p>
            SI ALGUES Nettoyant Toitures et sols extérieurs
            SI ALGUES est un produit polyvalent composé principalement d’ammonium quaternaire  soigneusement choisi pour le nettoyage rapide et très efficace des toitures et des sols extérieurs.  Produit algicide possédant des propriétés désinfectantes. Nettoyage de toutes les toitures, sols, murs, terrasses, balcons, fontaines, sculptures,  courts de tennis...
          </p>
          <p>
            SI ALGUES est un excellent adjuvant  pour le traitement des eaux de piscine ; utilisé à des doses  minimes, il permet d’éviter toute pollution organique, le développement d’algues, etc...  
          </p>
          <p>
            SI ALGUES se combine avec tous les autres produits utilisés pour l’entretien des piscines (chlore,  carbonate de soude, acide trichloro cyanurique, le sulfate de cuivre, etc...). 
          </p>
          <p>
            SI ALGUES s’utilise également dans les tours de refroidissement industrielles, les climatisations, le  traitement de l’eau, l’industrie, les industries papetières, etc....
          </p>
        </div>
      </div>
    </div>
  );
}

export default Algues;
