import './styles.scss';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container navbar-left">
        <h2> Si-Chim </h2>
      </div>
      <div className="navbar-container navbar-middle">
        <button className='navbar-button'>
          <h2 className="navbar-h2">Nos Produits</h2>
        </button>
        <button className='navbar-button'>
          <h2 className="navbar-h2">Nos Documents</h2>
        </button>
      </div>
      <div className="navbar-container navbar-right">
        <h2>Contact</h2>
      </div>
    </header>
  );
}

export default Navbar;
