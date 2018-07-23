import React, {Component} from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class RowAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inscrits: 0,
    };
  }

  componentDidMount() {
    this.getParticipantsCount();
  }

  getParticipantsCount() {
    let nbInscrits = this.state.inscrits;
    for (let i = 0; i < this.props.participants.length; i++) {
      if (this.props.participants[i].id_atelier === this.props.idAtelier ) {
        nbInscrits += 1;
      }
      console.log('nb inscrits: ', nbInscrits);
    }
    this.setState({ inscrits: nbInscrits });
  }

  render() {
    console.log(this.props.participants)
    return (
      <TableRow key={this.props.idAtelier}>
        <TableCell component="th" scope="row">
          {this.props.nomAtelier}
        </TableCell>
        <TableCell numeric>{this.props.nbParticipants}</TableCell>
        <TableCell numeric>{this.state.inscrits}</TableCell>
        <TableCell numeric>{this.props.nbParticipants - this.state.inscrits}</TableCell>
      </TableRow>
    );
  }
}
function mapStateToProps(state) {
  return {
    participants: state.participants.participants,
  };
}

export default connect(mapStateToProps, null)(RowAtelier);
