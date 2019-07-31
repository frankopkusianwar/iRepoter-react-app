/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import redFlagAction from '../../actions/RedFlagActions';
import Navbar from '../common/Navbar';
import { Authenticated } from '../../authenticated';

export class RedFlag extends React.Component {
  componentWillMount() {
    const { redFlagAction } = this.props;
    console.log(this.props);
    redFlagAction();
  }

  render() {
    const { redflags } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        {
          redflags && (
            redflags.length > 0 && true) && Array.isArray(redflags) ? redflags.map(item => (
              <div key={item}>
                <div className="container redflag-container">
                  <div className="row title-div">
                    <div className="col-md-6">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="col-md-6">
                      <p>created on: 25-08-1993</p>
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p>status: dreaft</p>
                    </div>
                    <div className="col-sm-3">
                      <p>
latitude:
                        {' '}
                        {item.latitude}
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <p>
longitude:
                        {' '}
                        {item.longitude}
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <a href="#">view details</a>
                    </div>
                  </div>
                </div>
              </div>
            )) : null
    }
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  redflags: state.redflagReducer.redflags,
});
export default connect(mapStateToProps, { redFlagAction })(Authenticated(RedFlag));
