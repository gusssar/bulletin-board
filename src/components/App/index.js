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

    onAddAd = () => {
        // this.setState({submitTime: time});
        // console.log(this.state);
        // let serialState = JSON.stringify(this.state);
        // localStorage.setItem(time.toString(),JSON.stringify(this.state));
        // console.log(localStorage);
        // this.props.updateData(this.state.submitTime);

    };

    onClear = () => {localStorage.clear()};

    render() {


    return (
        <div style={{width:614, margin: '48px auto'}}>
          <AdSubmit updateData = {this.addNewAd}/>
            <div style={{height:'50px'}}> </div>
            <div>объявление</div>
            <div style={{height:'50px'}}> </div>
            <button onClick={this.onClear}>Clear</button>
          <AdList addNewAd = {this.state.addNewAd}/>
        </div>
    );
  }
}

export default App;
