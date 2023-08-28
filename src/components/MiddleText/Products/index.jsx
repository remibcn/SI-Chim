import './styles.scss';
import { GiFloorHatch } from 'react-icons/gi';
import { LiaToiletSolid } from 'react-icons/lia';
import { FaCarSide } from 'react-icons/fa';
import { BiSprayCan } from 'react-icons/bi';
import { GiKitchenTap } from 'react-icons/gi';

function test() {
  return (
    <div id="test">
      <div className="container">
        <div className="column">
          <a href="/Produits/Sols">
            <GiFloorHatch className="icons" />
            <h2 className="products-h2">Sols </h2>
          </a>
          <a href="Sanitaire">
            <LiaToiletSolid className="icons" />
            <h2 className="products-h2">Sanitaire </h2>
          </a>
          <a href="Vitres">
            <LiaToiletSolid className="icons" />
            <h2 className="products-h2">Vitres & surfaces </h2>
          </a>
          <a href="/Cuisine">
            <GiKitchenTap className="icons" />
            <h2 className="products-h2">Entretien spécifique</h2>
          </a>
        </div>
        <div className="column">
          <a href="Voitures">
            <FaCarSide className="icons" />
            <h2 className="products-h2">Entretien auto</h2>
          </a>
          <a href="/graffiti">
            <BiSprayCan className="icons" />
            <h2 className="products-h2">Anti graffiti</h2>
          </a>
          <a href="/Cuisine">
            <GiKitchenTap className="icons" />
            <h2 className="products-h2">Cusine</h2>
          </a>
          <a href="/Cuisine">
            <GiKitchenTap className="icons" />
            <h2 className="products-h2"> Entretien général </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default test;
