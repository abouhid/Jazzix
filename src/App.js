import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import HotDeals from './components/HotDeals';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/cart">
          <Cart />
          <HotDeals />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
