import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Details from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
