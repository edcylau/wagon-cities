import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from "./city";

class CityList extends Component {
  componentWillMount() {
    // TODO: dispatch an action to load cities!
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return { cities: reduxState.cities };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
