import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import BannedCountriesPage from '../../pages/BannedCountriesPage';
import CreditCardsPage from '../../pages/CreditCardsPage';
import styles from './NavigationMenu.module.css';  

const NavigationMenu = () => {
  return (
    <Router>
      <header>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbarCustom}`}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <NavLinks />
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credit-cards" element={<CreditCardsPage />} />
        <Route path="/banned-countries" element={<BannedCountriesPage />} />
      </Routes>
    </Router>
  );
}

const NavLinks = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <ul className={`navbar-nav ${styles.navbarNavCustom}`}>
      <li className="nav-item">
        <NavLink to="/" className={isActive('/') ? styles.activeLinkStyle : styles.linkStyle}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/credit-cards" className={isActive('/credit-cards') ? styles.activeLinkStyle : styles.linkStyle}>
          Captured Cards
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/banned-countries" className={isActive('/banned-countries') ? styles.activeLinkStyle : styles.linkStyle}>
          Banned Countries
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationMenu;
