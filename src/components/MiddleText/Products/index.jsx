import './styles.scss';
import { GiFloorHatch } from 'react-icons/gi';
import { LiaToiletSolid } from 'react-icons/lia';
import { FaCarSide } from 'react-icons/fa';
import { BiSprayCan } from 'react-icons/bi';
import { GiKitchenTap } from 'react-icons/gi';
import { MdOutlineLocalLaundryService } from 'react-icons/md';
import { LuPanelBottom } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function test() {
  return (
    <div id="Produits">
      <div className="container">
        <div className="column">
          <Link to="/Produits/Sols">
            <GiFloorHatch className="icons" />
            <h2 className="products-h2">Sols </h2>
          </Link>
          <Link to="/Produits/Sanitaire">
            <LiaToiletSolid className="icons" />
            <h2 className="products-h2">Sanitaire </h2>
          </Link>
          <Link to="/Produits/VitresSurfaces">
            <LuPanelBottom className="icons" />
            <h2 className="products-h2">Vitres & surfaces </h2>
          </Link>
          <Link to="/Produits/Cuisine">
            <MdOutlineLocalLaundryService className="icons" />
            <h2 className="products-h2">Entretien spécifique</h2>
          </Link>
        </div>
        <div className="column">
          <Link to="/Produits/EntretienAuto">
            <FaCarSide className="icons" />
            <h2 className="products-h2">Entretien auto</h2>
          </Link>
          <Link to="/Produits/AntiGraffiti">
            <BiSprayCan className="icons" />
            <h2 className="products-h2">Anti graffiti</h2>
          </Link>
          <Link to="/Produits/Cuisine">
            <GiKitchenTap className="icons" />
            <h2 className="products-h2">Cusine</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default test;
