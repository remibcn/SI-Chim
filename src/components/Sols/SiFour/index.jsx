import './styles.scss';
import Navbar from "../../Navbar";
import image from '../../../assets/SI FOUR 2+.png';

function SiFour() {
  return (
    <div>
      <Navbar />
      <div className="sifour">
        <div className="sifour-left">
          <img src={image} alt="test" />
        </div>
        <div className="sifour-right">
          <p> Le SiFour est un produit blablablanlz eeeeee eeeee eeeee eeeee eeeeee eeee</p>
        </div>
      </div>
    </div>
  );
}

export default SiFour;
