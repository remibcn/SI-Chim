import image1 from '../../assets/palette.jpeg';
import image2 from '../../assets/palette.jpeg';
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
        <img src={image1} alt="test" />
      </div>
    </div>
  );
}

export default Sols;
