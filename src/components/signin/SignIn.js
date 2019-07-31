/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import signinAction from '../../actions/SigninAction';
import Header from '../common/Header';

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem('token')) {
      const { history } = this.props;
      history.push('/redflag');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      const { history } = this.props;
      history.push('/redflag');
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    const { signinAction } = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      username, password,
    } = this.state;
    const data = {
      username,
      password,
    };
    signinAction(data);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="form-contents">
          <form className="container" onSubmit={this.handleSubmit}>
            <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputUsername" name="username" placeholder="Username" onChange={this.changeHandler} />
            </div>
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password" onChange={this.changeHandler} />
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn submit-button">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  const { loggedIn } = state.signinReducer;
  return {
    loggedIn,
  };
};

export default connect(mapStateToProps, { signinAction })(SignIn);
