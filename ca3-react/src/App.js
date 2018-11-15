import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import dataFacade from './dataFacade';
import InputRange from 'react-input-range';
import LoginApp from './components/Login'
import 'react-input-range/lib/css/index.css';
import './App.css';
import BigData from "./components/ClientSidePagination.js";


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

class Persons extends Component {

  constructor(props) {
    super(props);
    this.state = { persons: [], amount: 5 };
  }

  async componentDidMount() {
    const persons = await dataFacade.getPersons();
    this.setState({ persons: persons });
  }

  amountChange = async (amount) => {
    this.setState({ amount: amount });
    const persons = await dataFacade.getPersons(amount);
    this.setState({ persons: persons });
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <Slider amount={this.state.amount} amountChange={this.amountChange} />
        </div>
        <div>
          <br />
          <br />
          <div>
            <AllPersons persons={this.state.persons} />
          </div>
        </div>
      </div>
    );
  }

}//CLASS

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.amountChange(this.state.value);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Choose amount af Star Wars characters to show</h2>
        </div>
        <div>
          <form className="form" onSubmit={this.handleSubmit}>
            <InputRange
              maxValue={87}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

function AllPersons(props) {
  return (
    <div>
      <h2>Characters</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Birth Year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.persons.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.height}</td>
              <td>{p.birth_year}</td>
              <td>{p.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
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