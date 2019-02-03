import React, { Component } from 'react';
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
        <div style={{width:614, margin: '48px auto'}}>
          <AdSubmit updateData = {this.addNewAd}/>
            <div className={'title-app'}>Объявление</div>
          <AdList addNewAd = {this.state.addNewAd}/>
        </div>
    );
  }
}

export default App;
