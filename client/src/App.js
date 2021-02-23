import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import TimerPage from './TimerPage.js';
import About from './About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpeg';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/timer" exact>
            <TimerPage />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
        <a href="https://www.lsesuhkpass.co.uk/" target="_blank" rel="noreferrer"><img src={logo} alt="LSESU HKPASS" style={{position: "fixed", height: "100px", width: "auto", left: "10px", bottom: "10px", borderRadius: "50px"}}/></a>
      </div>
    </Router>
  )
}

export default App;
