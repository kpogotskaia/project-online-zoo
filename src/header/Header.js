import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <a href="#" className="header__logo">
            <span>zoo</span>
            <span>online</span>
          </a>

          <span className="header__menu-icon closed" id="menuBtn"></span>

          <nav className="header__menu-container closed" id="menuContainer">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="/countryZoo.html" className="header__menu-item">Zoos</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </nav>
          <div className="header__revers">
            <div className="header__revers-btn"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
