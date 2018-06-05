import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAteliers } from '../actions/index';

const AteliersList = ({ ateliers, selectAteliers }) => (
  <div style={{ display: 'flex' }}>
    <div
      style={{

          width: '100%',
          height: '100%',
          background: '#f0f0f0',
        }}
    >
      <ul className="AteliersList">
        {ateliers.map(atelier => (
          <li key={atelier.key} onClick={() => selectAteliers(atelier)}>
            {atelier.nom_atelier}
            <br />
            {atelier.date}
            <hr />
          </li>

      ))
}
      </ul>
    </div>
  </div>

);

function mapStateToProps(state) {
  return { ateliers: state.ateliers };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAteliers,
  }, dispatch);
}


;

export default connect(mapStateToProps, matchDispatchToProps)(AteliersList);
