import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    if (this.props.activeCity) {
      return (
        <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p> {this.props.activeCity.address}</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt={this.props.activeCity.slug} />
        </div>
      );
    }
    return (
      <div className="active-city">
        <p>Select a city please</p>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  console.log(reduxState);
  return { activeCity: reduxState.activeCity };
}

export default connect(mapReduxStateToProps)(ActiveCity);
