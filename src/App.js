import React, { Component } from 'react';
import Balance from './components/Balance'
import Transfer from './components/Transfer'

class App extends Component {
  render() {
    return (
      <div>
        <Balance />
        <Transfer />
        <div className="py-5 text-muted text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-4">
              <p className="mb-1">uPort - ConsenSys</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
