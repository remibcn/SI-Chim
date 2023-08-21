import image1 from '../../assets/palette.jpeg';
import image2 from '../../assets/palette.jpeg';
import './styles.scss';
import SolsProductsList from './SolsProductsList';

function Sols() {
  const ImagesSols = [
    {
      id: 1,
      src: image1,
      alt: 'Image1',
      caca: 'test',
    },
    {
      id: 2,
      src: image2,
      alt: 'Image2',
      text: 'text',
    },
  ];

  let listOfProducts;
  if (ImagesSols) {
    listOfProducts = ImagesSols.map((image) => (
      <SolsProductsList key={image.id} image={image} />
    ));
  }
  return (
    <div className="container">
      <div className="column">
        <div className="column-image">
          {ImagesSols
          && listOfProducts}
        </div>
      </div>
    </div>
  );
}

export default Sols;
