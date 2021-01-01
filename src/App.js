import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import InstrumentCont from './components/InstrumentCont';

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
        </Route>
      </Switch>
      <InstrumentCont />
      <Footer />
    </div>
  );
}

export default App;
