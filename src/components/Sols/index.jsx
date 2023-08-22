import image1 from '../../assets/SI FOUR 2+.png';
import image2 from '../../assets/SI PLONGE.png';
import image3 from '../../assets/SI FOUR 2+.png';
import './styles.scss';

function Sols() {
  const ImagesSols = [
    {
      id: 1,
      src: image1,
      alt: 'Image1',

    },
    {
      id: 2,
      src: image2,
      alt: 'Image2',
    },
  ];

  // let listOfProducts;
  // if (ImagesSols) {
  //   listOfProducts = ImagesSols.map((image) => (
  //     <SolsProductsList key={image.id} image={image} />
  //   ));
  // }
  return (
    <div className="container">
      <div className="column">
        <a href='/'>
          <img src={image1} alt="test" className="column-image" />
          <a href="/" >
            <p> fiches technique </p>
          </a>
        </a>
      </div>
      <div className="column">
        <img src={image2} alt="test" className="column-image" />
        <a href="/" >
          <p> fiches technique </p>
        </a>  
      </div>
      <div className="column">
        <img src={image3} alt="test" className="column-image" />
        <a href="/">
          <p> fiches technique </p>
        </a> 
      </div>
    </div>
  );
}

export default Sols;
