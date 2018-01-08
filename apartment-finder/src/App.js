import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import Footer from './footer'
import ApartmentIndex from './ApartmentIndex';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApartmentDetail from './ApartmentDetails';


class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <Header name= "For Rent" />
        <Route exact path="/" component={ApartmentIndex} />
        <Route path='/apartments/:id' component={ApartmentDetail} />
        <div>
      
        </div>
          <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
