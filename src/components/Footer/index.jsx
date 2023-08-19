import { Link } from 'react-router-dom';

import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-description_container">
        <h2 className="footer-title">SiChim</h2>
        <p className="footer-description">
          Site de la société SiChim avec
        </p>
      </div>
      <div className="footer-links_container">
        <ul>
          <h2 className="footer-title">Informations</h2>
          <li>
            <Link className="button-minimalist" to="/nous">Adresse : ZA les flandres ?</Link>
          </li>
          <li>
            <Link className="button-minimalist" to="/contact">Contactez nous</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;