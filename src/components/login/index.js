import './style.css';

import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form className='login'>

        <div className="mb-3">
          <label>E-mail</label>
          <br></br>
          <input
            type="email"
            className="form-control"
            placeholder="Enter E-mail address"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <br></br>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="login" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
            <a href="#">Forgot password?</a>
        </p>
      </form>
    )
  }
}