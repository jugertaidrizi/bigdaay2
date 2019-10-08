import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { Link } from "react-router-dom";
import HomePage from './HomePage';
import Login from './Login';
import Footer from './components/footerC';
import Header from './components/headerC';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="/login" exact component="/" component={Login} />
        </div>
        <Footer />
      </Router>
    )
  }
}
export default App;
