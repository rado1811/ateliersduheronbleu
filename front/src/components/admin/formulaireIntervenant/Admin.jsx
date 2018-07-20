import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import FormulaireIntervenant from './FormulaireIntervenant';
import MenuAdmin from '../menuAdmin/MenuAdmin';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container style={{ paddingRight: 30 }}>
        <Grid item md={2} s={2}>
          <MenuAdmin />
        </Grid>
        <Grid item md={10} s={10}>
          <FormulaireIntervenant history={this.props.history} />
        </Grid>
      </Grid>
    );
  }
}
Admin.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    listen: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
    reaplce: PropTypes.func.isRequired,
  }).isRequired,
};

export default Admin;
