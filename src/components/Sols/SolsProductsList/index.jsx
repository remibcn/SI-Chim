import image1 from '../../../assets/logo.png';
import image2 from '../../../assets/palette.jpeg';

function ProductsList() {
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

  return (
    <div>
      {ImagesSols.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default ProductsList;
