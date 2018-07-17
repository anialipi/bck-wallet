import React, { Component } from 'react';
import {accounts, tokenBalance} from '../lib/Eth'

const tokenAddress='0x52e0fa36160d7613e6bc17280f8f043ee7549f1a'; //BCK

export default class Balance extends Component {
    state = {
        account: '',
        tokenBalance: '...'
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
        tokenBalance(tokenAddress,account).then(tokenBalance => this.setState({tokenBalance}))
    }
    

    render() {
    return (
      <div className="py-3">
        <div className="container">
        <div className="row">
            <div className="text-center col-md-7 mx-auto">
            <h2 className="">Hi Andrés, your balance is:</h2>
            </div>
        </div>
        <div className="row">
            <div className="text-center col-md-7 mx-auto">
            <h2 className="box-shadow border border-primary">
                <b>{this.state.tokenBalance} BCK</b>
            </h2>
            </div>
        </div>
        </div>
    </div>
    );
  }
}

