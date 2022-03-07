// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Home';
import About from './pages/About';
import Header from './pages/Header';
import Service from './pages/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/service">
        <Service></Service>
        </Route>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
