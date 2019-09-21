import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountReceived: '',
      amountDue: '',
      changeDue: '',
      twenties: '0',
      tens: '0',
      fives: '0',
      dollars: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculateChange(e) {
    e.preventDefault();
    
    let amountReceived = this.state.amountReceived;
    let amountDue = this.state.amountDue;

    let change = (amountReceived - amountDue).toFixed(2);

    this.setState({
      changeDue: change
    });

    if (change > 19.99) {
      let twentiesBills = Math.floor(change / 20.00);
      change = change % 20.00;
      this.setState({
        twenties: twentiesBills
      });
    }

    if (change > 9.99) {
      let tensBills = Math.floor(change / 10.00);
      change = change % 10.00;
      this.setState({
        tens: tensBills
      });
    }

    if (change > 4.99) {
      let fivesBills = Math.floor(change / 5.00);
      change = change % 5.00;
      this.setState({
        fives: fivesBills
      });
    }

    if (change > .99) {
      let dollarsBills = Math.floor(change / 1.00);
      change = change % 1.00;
      this.setState({
        dollars: dollarsBills
      });
    }

    if (change > .24) {
      let quartersCoins = Math.floor(change / .25);
      change = change % .25;
      this.setState({
        quarters: quartersCoins
      });
    }

    if (change > .09) {
      let dimesCoins = Math.floor(change / .10);
      change = change % .10;
      this.setState({
        dimes: dimesCoins
      });
    }

    if (change > .04) {
      let nickelsCoins = Math.floor(change / .05);
      change = change % .05;
      this.setState({
        nickels: nickelsCoins
      });
    }

    if (change > .00) {
      let penniesCoins = (change / .01).toFixed();
      this.setState({
        pennies: penniesCoins
      });
    }

  }

  render() {
    return (
      <div className='container'>
        <h1>Change Calculator</h1>
        <div className='row'>

          <div className='form-group col-4'>
            <div className='card'>
              <div className="card-header">
                <p className='tagline'>Enter Information</p>
              </div>
              <div className='card-body'>
                <label>How much is due?</label>
                <input className='form-control' name='amountDue' type='text' onChange={this.handleChange}></input>
                <label>How much was amountReceived?</label>
                <input className='form-control' name='amountReceived' type='text' onChange={this.handleChange}></input>
              </div>
              <div className="card-footer">
                <button type='button' className='btn btn-primary' onClick={(e) => this.calculateChange(e)}>Calculate Button</button>
              </div>
            </div>
          </div>
          <div className='form-group col-8'>
            <div className="card">
              <div className="card-body">
                <div className='outcome-alerts'>
                  <div className='alert alert-success' name='changeDue' role='alert'>The total change due is ${this.state.changeDue}</div>
                  <div className='alert alert-danger' role='alert'></div>
                  <div className='row'>
                    <div className='card p-3 col-lg-3 text-center' name='twenties'>
                      <h5>Twenties</h5>
                      <p>{this.state.twenties}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='tens'>
                      <h5>Tens</h5>
                      <p>{this.state.tens}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='fives'>
                      <h5>Fives</h5>
                      <p>{this.state.fives}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='dollars'>
                      <h5>Ones</h5>
                      <p>{this.state.dollars}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='quarters'>
                      <h5>Quarters</h5>
                      <p>{this.state.quarters}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='dimes'>
                      <h5>Dimes</h5>
                      <p>{this.state.dimes}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='nickels'>
                      <h5>Nickels</h5>
                      <p>{this.state.nickels}</p>
                    </div>
                    <div className='card p-3 col-lg-3 text-center' name='penniess'>
                      <h5>Pennies</h5>
                      <p>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
