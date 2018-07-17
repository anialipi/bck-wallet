import React, { Component } from 'react';
import {accounts, tokenBalance} from '../lib/Eth'
import hodlers from '../lib/hodlers'

const tokenAddress='0x52e0fa36160d7613e6bc17280f8f043ee7549f1a'; //BCK

export default class Transfer extends Component {
  state = {
    account: '',
    balances: {}
}

componentDidMount() {
    accounts().then(this.setAccounts).then(this.setBalances).catch(console.error)
}

setAccounts = (accounts) => {
    let account = accounts[0]
    if (!account) return Promise.reject('No account')
    console.log("Account: "+account)
    this.setState({account: account})
    return account
}

setBalances = (account) => {
  for (const hodler in hodlers) {
    let addr=hodler;
    tokenBalance(tokenAddress,addr)
    .then(tokenBalance => {
      console.log(addr+':'+tokenBalance)
      let bal=this.state.balances;
      bal[addr]=tokenBalance;
      this.setState({balances: bal});
    })
  }
  
}

render() {
    //let tokenHodlers=

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 order-md-2">
            <h4 className="d-flex justify-content-between mb-3">
              <span className="text-muted">Beckoiners</span>
            </h4>
            <ul className="list-group">
            {Object.keys(hodlers).map((hodler, i) => (
              <li className="list-group-item d-flex justify-content-between" key={i}>
                <div>
                  <h6 className="my-0">{hodlers[hodler].firstName} {hodlers[hodler].lastName}</h6>
                </div>
                <span className="text-muted">{this.state.balances[hodler]} BCK</span>
              </li>
            ))}
            </ul>
            <p> </p>
            <form className="form-inline d-flex justify-content-between align-items-center align-self-center flex-column">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="Amount to Send"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Send BCK</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

