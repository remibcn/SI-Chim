import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';

import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-description_container">
        <h2 className="footer-title">SI CHIM</h2>
        <p className="footer-description">
          SI-Chim entreprise spécialisée dans la fabrication de produits d'entretien.
        </p>
      </div>
      <div className="footer-links_container">
        <ul>
          <h2 className="footer-title">Informations</h2>
          <ul>
            <li className="button-minimalist">Adresse : ZA les Flandres 98 avenue de Choisy</li>
            <li className=''> Villeneuve St Georges 94190</li>
            <li className=''> conctact@sichim.fr </li>
            <li> <BsFillTelephoneFill className="icons1" /> 01 43 82 65 11  </li>
          </ul>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
