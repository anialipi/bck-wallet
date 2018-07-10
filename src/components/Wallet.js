import React, { Component } from 'react';
import Transfer from './Transfer'
import {accounts, getWeiBalance, balance} from '../lib/Eth'
import './Wallet.css';

const WEIMAX = 10000000000000000000

export default class Wallet extends Component {
  state = {
    account: '',
    balance: 0,
    bck: 0
  }

  componentDidMount() {
    accounts().then(this.setAccounts).then(this.setBalances).catch(console.error)
  }

  setAccounts = (accounts) => {
    let account = accounts[0]
    if (!account) return Promise.reject('No hay cuenta')
    this.setState({account: account})
    return account
  }

  setBalances = (account) => {
    getWeiBalance(account).then(balance => this.setState({balance}))
    balance(account).then(bck => this.setState({bck}))
  }

  render() {
    return (
      <div className="Wallet">
        <Battery balance={this.state.balance} version={this.state.version}/>
        <Balance bck={this.state.bck}/>
        <Address account={this.state.account}/>
        <Transfer />
      </div>
    );
  }
}

const Battery = ({balance, version}) => (
  <div className="Icons">
    <span className="Icon">{version}</span>
    <i className={"fas fa-2x fa-battery-" + batteryLevel(balance / WEIMAX)} />
  </div>
)

const Balance = ({bck}) => (
  <div className="Balance">
    <label className="Amount">{bck}</label>
    <label>BCK</label>
  </div>
)

const Address = ({account}) => (
  <div className="Address">
    <p>{account}</p>
  </div>
)

function batteryLevel(fuel) {
  let battery = 'full'
  if (fuel < 0.1) {
    battery = 'empty'
  } else if (fuel < 0.3) {
    battery = 'quarter'
  } else if (fuel < 0.5) {
    battery = 'half'
  } else if (fuel < 0.8) {
    battery = 'three-quarter'
  }
  return battery
}
