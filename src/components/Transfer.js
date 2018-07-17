import React, { Component } from 'react';


export default class Transfer extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 order-md-2">
            <h4 className="d-flex justify-content-between mb-3">
              <span className="text-muted">Beckoiners</span>
            </h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">Michael Sena</h6>
                  <small className="text-muted">0x9C803151d0fD38f8C9FCEe7D5d02498dF6067E5A</small>
                </div>
                <span className="text-muted">12 BCK</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">Andres Junge</h6>
                  <small className="text-muted">0x9C803151d0fD38f8C9FCEe7D5d02498dF6067E5A</small>
                </div>
                <span className="text-muted">8 BCK</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">
                    <b>Beck Klausmann</b>
                  </h6>
                  <small className="text-muted">0x9C803151d0fD38f8C9FCEe7D5d02498dF6067E5A</small>
                </div>
                <span className="text-muted">1300 &nbsp;BCK</span>
              </li>
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

