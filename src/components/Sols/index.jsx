import image1 from '../../assets/sols/ODOR-COTON.png';
import image2 from '../../assets/sols/ODOR-LAVANDE.png';
import image3 from '../../assets/sols/ODOR-PECHE.png';
import image4 from '../../assets/sols/SUPER-DECRASS-SOLS.png';
import image5 from '../../assets/SI FOUR 2+.png';
import image6 from '../../assets/SI PLONGE.png';
import './styles.scss';

function Sols() {
  return (
    <div className="container-sols">
      <div className="colonne-sols">
        <img src={image1} alt="test" className="column-image" />
        <p className="sols-test"> Si Four </p>
        <img src={image4} alt="test" className="column-image" />
        <p> le nom </p>
      </div>
      <div className="colonne-sols">
        <p> le nom </p>
        <img src={image1} alt="test" className="column-image" />
        <p> le nom </p>
        <img src={image4} alt="test" className="column-image" />
      </div>
      <div className="colonne-sols">
        <p> le nom </p>
        <img src={image1} alt="test" className="column-image" />
        <p> le nom </p>
        <img src={image4} alt="test" className="column-image" />
      </div>
    </div>
  );
}

export default Sols;
