import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIntervenants } from '../../../actions/intervenants'

class Intervenants extends Component {
  componentDidMount() {
    this.props.fetchIntervenants();
  }
    return ( )
  }

Intervenants.propTypes = {
  fetchIntervenants: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return { intervenants: state.intervenants}
}

export default connnect(mapStateToProps, { fetchIntervenants })(Intervenants);
