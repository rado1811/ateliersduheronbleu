import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIntervenants } from '../../../../../actions/intervenants';
import {
  fetchAteliers,
  fetchAteliersSuccess,
} from '../../../../../actions/ateliers';
import MenuAdmin from '../../../menuAdmin/MenuAdmin';
import FormAtelier from './FormAtelier';
class AdminAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAteliers();
    this.props.fetchIntervenants();
  }
  render() {
    return (
      <Grid container style={{ paddingRight: 30 }}>
        <Grid item md={2} s={2}>
          <MenuAdmin />
        </Grid>
        <Grid item md={10} s={10}>
          <FormAtelier history={this.props.history} />
        </Grid>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchAteliers, fetchIntervenants, fetchAteliersSuccess },
    dispatch
  );
}

AdminAtelier.propTypes = {
  fetchAteliers: PropTypes.func.isRequired,
  fetchIntervenants: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(AdminAtelier);
