import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    // REDUX ACTION
    this.props.setActiveCity(this.props.city);
  }

  render() {
    let classes = "city";
    if (this.props.city === this.props.activeCity) {
      classes += " active";
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return { activeCity: reduxState.activeCity };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
