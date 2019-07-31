/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import signupAction from '../../actions/SignupAction';
import Header from '../common/Header';

export class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isValid) {
      const { history } = this.props;
      history.push('/');
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    const { signupAction } = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      firstname, lastname, username, email, password,
    } = this.state;
    const data = {
      firstname,
      lastname,
      username,
      email,
      password,
    };
    signupAction(data);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="form-contents">
          <form className="container" onSubmit={this.handleSubmit}>
            <label htmlFor="inputFirtsname" className="col-sm-2 col-form-label">
              Firstname
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="firstname"
                id="inputFirstname"
                placeholder="First name"
                onChange={this.changeHandler}
              />
            </div>
            <label htmlFor="inputLastname" className="col-sm-2 col-form-label">
              Lastname
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                name="lastname"
                placeholder="lastname"
                onChange={this.changeHandler}
              />
            </div>
            <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                name="username"
                placeholder="Username"
                onChange={this.changeHandler}
              />
            </div>
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder="Email"
                onChange={this.changeHandler}
              />
            </div>
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                placeholder="Password"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn submit-button">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  const { isSigningUp, isValid } = state.signupReducer;
  return {
    isSigningUp,
    isValid,
  };
};

export default connect(mapStateToProps, { signupAction })(SignUp);
