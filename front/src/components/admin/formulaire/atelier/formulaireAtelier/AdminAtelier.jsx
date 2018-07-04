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
    /*     this.props.fetchAteliersSuccess();
 */
  }
  render() {
    return (
      <Grid container>
        <Grid item sm={6}>
          <MenuAdmin />
        </Grid>
        <Grid item sm={6}>
          <FormAtelier />
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
