import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import HotDeals from './components/HotDeals';
import SearchPage from './pages/SearchPage';
import InfoPage from './pages/InfoPage';
import HotDealsPage from './pages/HotDealsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/wishlist">
          <Cart />
          <HotDeals />
        </Route>
        <Route path="/cart">
          <Cart />
          <HotDeals />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/info/:productId">
          <InfoPage />
        </Route>
        <Route path="/hotdeals/:productId">
          <HotDealsPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
