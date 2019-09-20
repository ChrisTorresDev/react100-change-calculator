import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>Header</h1>
        <p className='tagline'>Enter Information</p>
        <div className='row'>

          <div className='col-4'>
            <div className='panel'>
              <div className='panel-body'>
                <label>How much is due?</label>
                <input className='form-control' type='text'></input>
                <label>How much was received?</label>
                <input className='form-control' type='text'></input>
                <button type='button' className='btn btn-primary'>Calculate Button</button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='outcome-alerts'>
              <div className='alert alert-success' role='alert'></div>
              <div className='alert alert-danger' role='alert'></div>
              <div className='row'>
                <div className='col-3 text-center'>Twenties</div>
                <div className='col-3 text-center'>Ten</div>
                <div className='col-3 text-center'>Fives</div>
                <div className='col-3 text-center'>Ones</div>
                <div className='col-3 text-center'>Quarters</div>
                <div className='col-3 text-center'>Dimes</div>
                <div className='col-3 text-center'>Nickels</div>
                <div className='col-3 text-center'>Pennies</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
