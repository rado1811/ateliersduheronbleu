import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchIntervenants } from '../../actions/intervenants';
import BoutonContact from '../client/BoutonContact';

class Intervenants extends Component {
  componentDidMount() {
    this.props.fetchIntervenants();
  }
  render() {
    return (
      <BoutonContact />
    );
  }
}

Intervenants.propTypes = {
  fetchIntervenants: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { intervenants: state.intervenants };
}

export default connect(mapStateToProps, { fetchIntervenants })(Intervenants);
