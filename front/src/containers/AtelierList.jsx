import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAteliers } from '../actions/index';
import Drawer from 'material-ui/Drawer';

const AteliersList = ({ ateliers, selectAteliers }) => (
  <div style={{ display: 'flex' }}>
    <div
      style={{
          padding: '10px',
          width: '100%',
          height: '100%',
          background: '#f0f0f0',
        }}
    >
      <ul className="AteliersList">
        {ateliers.map(ateliers => (
          <li key={ateliers.key} onClick={() => selectAteliers(ateliers)}>
            {ateliers.nom_atelier}
            <br />
            {ateliers.date}
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

export default connect(mapStateToProps, matchDispatchToProps)(AteliersList);
