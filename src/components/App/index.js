import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './index.css';
import AdSubmit from '../AdSubmit/index.js';
import AdList from '../AdList/index.js';

class App extends Component {

    state = {
        addNewAd : 0
    };

    addNewAd = (value) => {this.setState({addNewAd : value})};

    render() {

    return (
        <div>
          <AdSubmit updateData = {this.addNewAd}/>
            <div style={{height:'50px'}}> </div>
            <div>объявление</div>
            <div style={{height:'50px'}}> </div>
          <AdList addNewAd = {this.state.addNewAd}/>
        </div>
    );
  }
}

export default App;
