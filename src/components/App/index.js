import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './index.css';
import AdSubmit from '../AdSubmit/index.js';
import AdList from '../AdList/index.js';

class App extends Component {
  render() {
    return (
        <div>
          <AdSubmit/>
          <AdList/>
        </div>
    );
  }
}

export default App;
