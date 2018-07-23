import React, {Component} from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { fetchInscrits } from '../../../actions/inscrits';

class RowAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbinscrits: 0,
    };
  }

  componentWillMount() {
    this.props.fetchInscrits();
    this.getParticipantsCount();
  }

  getParticipantsCount() {
    let nbInscrits = this.state.nbinscrits;
    for (let i = 0; i < this.props.inscrits.length; i++) {
      if (this.props.inscrits[i].id_atelier === this.props.idAtelier ) {
        nbInscrits += 1;
      }
    }
    this.setState({ nbinscrits: nbInscrits });
  }

  render() {
    return (
      <TableRow key={this.props.idAtelier}>
        <TableCell component="th" scope="row">
          {this.props.nomAtelier}
        </TableCell>
        <TableCell numeric>{this.props.nbParticipants}</TableCell>
        <TableCell numeric>{this.state.nbinscrits}</TableCell>
        <TableCell numeric>{this.props.nbParticipants - this.state.nbinscrits}</TableCell>
      </TableRow>
    );
  }
}

function mapStateToProps(state) {
  return {
    inscrits: state.inscrits.inscrits,
  };
}

export default connect(mapStateToProps, { fetchInscrits })(RowAtelier);
