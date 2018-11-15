import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import dataFacade from './dataFacade';
import InputRange from 'react-input-range';
import LoginApp from './components/Login'
import 'react-input-range/lib/css/index.css';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/persons" component={Persons} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

const Home = () => <h2>Home</h2>
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

const Topic = ({ match }) => <div className="topic"><h3>Requested Param: {match.params.id}</h3></div>
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      {/* <li>
        <NavLink activeClassName="activeV2" to={`topics/component`}>Components</NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeV2" to={`topics/props-v-state`}>Props v. State</NavLink>
      </li> */}
      <li>
        <NavLink activeClassName="activeV2" to={`${match.url}/component`}>Components</NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeV2" to={`${match.url}/props-v-state`}>Props v. State</NavLink>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() =>
        <h3>Please select a topic.</h3>
      }
    />
  </div>
)

const Header = () => (
  <ul className="header">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/persons">Persons</NavLink>
    </li>
    <li>
      <NavLink to="/topics">Topics</NavLink>
    </li>

  </ul>
)

// const Index = () => <h2>Home</h2>
// const About = () => <h2>About</h2>
// const Users = () => <h2>Users</h2>

// const AppRouter = () => (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about/">About</Link>
//           </li>
//           <li>
//             <Link to="/users/">Users</Link>
//           </li>
//         </ul>
//       </nav>

//       <Route path="/" exact component={Index} />
//       <Route path="/about/" component={About} />
//       <Route path="/users/" component={Users} />
//     </div>
//   </Router>

// )

export default App;
// export default AppRouter;