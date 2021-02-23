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
        <img src={logo} alt="LSESU HKPASS" style={{position: "absolute", height: "100px", width: "auto", left: "10px", bottom: "10px", borderRadius: "50px", pointerEvents: "none"}}/>
      </div>
    </Router>
  )
}

export default App;
