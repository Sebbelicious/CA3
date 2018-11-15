import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import LoginApp from './components/Login'
import 'react-input-range/lib/css/index.css';
import './App.css';
import BigData from "./components/ClientSidePagination.js";
import Persons from "./components/Persons";


const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/persons" component={Persons} />
      <Route path="/bigdata" component={BigData} />
      <Route path="/login" component={LoginApp} />
    </div>
  </Router>
)

function Home() {
  return (
    <div>
      <h2>Before you run</h2>
      <h5>Installing dependencies</h5>
      <p>
        Before running you need to do a npm install in the following folders:
      </p>
      <ul>
        <li>CA3-native</li>
        <li>CA3-react</li>
      </ul>
    </div>
  );
}

const Header = () => (
  <ul className="header">
    <li>
      <NavLink exact to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/persons">Persons</NavLink>
    </li>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/bigdata">Big Data</NavLink>
    </li>

  </ul>
)


export default App;