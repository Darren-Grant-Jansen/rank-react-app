import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { CreditCardProvider } from '../../store/CreditCardContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import BannedCountriesPage from '../../pages/BannedCountriesPage';
import CreditCardsPage from '../../pages/CreditCardsPage';


const NavigationMenu = () => {
  return (
    <CreditCardProvider>
      <Router>
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <Link to="/"><li className="nav-item"><a className="nav-link" href="#"><BsFillCreditCard2FrontFill size="30"/></a></li></Link>
                  <Link to="/credit-cards"><li className="nav-item"><a className="nav-link" href="#">Captured Cards</a></li></Link>
                  <Link to="/banned-countries"><li className="nav-item"><a className="nav-link" href="#">Banned Countries</a></li></Link>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/credit-cards' element={ <CreditCardsPage /> } />
          <Route path='/banned-countries' element={ <BannedCountriesPage /> } />
        </Routes>
      </Router>
    </CreditCardProvider>
  )
}

export default NavigationMenu