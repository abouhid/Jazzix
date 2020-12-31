import { Link, Switch, Route } from 'react-router-dom';
import mainPage from './pages/mainPage';
import Details from './pages/search';

function App() {
  return (
    <div className="App">
      <Link to="/"> Main</Link>
      <Link to="/details"> Details</Link>
      <Switch>
        <Route exact path="/">
          <mainPage />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
