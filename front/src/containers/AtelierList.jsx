import React from 'react';
import { Button } from 'material-ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAteliers } from '../actions/Index';


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
          <Button key={atelier.key} onClick={() => selectAteliers(atelier)}>
            <li >
              {atelier.nom_atelier}
              <br />
              {atelier.date}
              <hr />
            </li>
          </Button>

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

AteliersList.propTypes = {
  ateliers: PropTypes.arrayOf(Array).isRequired,
  selectAteliers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(AteliersList);
