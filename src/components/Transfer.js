import React, { Component } from 'react';
import './Transfer.css'

const Errors = {
  general: '',
  amount: '',
  address: ''
}

export default class Transfer extends Component {
  state = {
    amount: '',
    address: '',
    errors: {...Errors}
  }

  clearErrors() {
    this.setState({
      errors: {...Errors}
    })
  }

  onAmountChange = (e) => {
    let amount = e.target.value
    let error = ''
    if (isNaN(amount)) {
      error = 'El monto debe ser numerico'
    }
    this.setState({amount, errors: {...this.state.errors, amount: error}})
  }

  onAddressChange = (e) => {
    this.setState({address: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    this.clearErrors()
    let {amount, address} = this.state

    if (isNaN(amount)) {
      this.setState({errors: {...this.state.errors, general: 'El monto es requerido'}})
      return
    }
    if (address.trim().length === 0) {
      this.setState({errors: {...this.state.errors, general: 'La direccion es requerida'}})
      return
    }

    let data = {
      amount: parseInt(this.state.amount, 10),
      address
    }
    console.log('submit', data)
  }

  render() {
    let errors = this.state.errors
    return (
      <div className="Transfer">
        <form className="pure-form" onSubmit={this.submit}>
          <div>
            <input placeholder="Amount" className="pure-input-1" value={this.state.amount} onChange={this.onAmountChange} required/>
          </div>
          <div>
            <input placeholder="Address" className="pure-input-1" value={this.state.address} onChange={this.onAddressChange} required/>
          </div>
          <div className="ErrorMessage">{errors.general}</div>
          <button className="Send pure-button pure-input-1 pure-button-primary">Enviar</button>
        </form>
      </div>
    );
  }
}

