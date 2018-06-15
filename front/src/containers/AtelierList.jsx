import React from 'react';
import { Button } from 'material-ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAteliers } from '../actions/index';
import BoutonContact from '../components/client/BoutonContact';

const AteliersList = ({ ateliers, selectAteliers }) => (
  <div style={{ display: 'flex' }}>
    <BoutonContact />
    <div
      style={{
          width: '100%',
          height: '100%',
          background: '#f0f0f0',
        }}
    >
      <ul className="AteliersList">
        {ateliers.map(atelier => (
          <Button key={atelier.id_atelier} onClick={() => selectAteliers(atelier)}>
            <li >
              {atelier.nom}
              <br />
              {atelier.debut}
              <hr />
            </li>
          </Button>
        ))}
      </ul>
    </div>
  </div>
);

function mapStateToProps(state) {
  return { ateliers: state.ateliers.ateliers };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAteliers,
  }, dispatch);
}

AteliersList.propTypes = {
  ateliers: PropTypes.arrayOf(Array).isRequired,
  selectAteliers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(AteliersList);
