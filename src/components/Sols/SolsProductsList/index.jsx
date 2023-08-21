import './styles.scss';

function SolsProductsList({ image }) {
  return (
    <div className="sport_card">
      <img className="sport_card-picture" src={image.src} alt={image.alt} />
    </div>
  );
}

export default SolsProductsList;
