import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class RowAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentWillMount() {
    axios.get(`/api/participant/count/${this.props.idAtelier}`)
    .then(res => {
      this.setState({
        total: res.data.total,
      });
    });

    //this.props.fetchInscrits();
    //this.getParticipantsCount();
  }

  render() {
    const nbTotal = this.props.nbParticipants;
    const totalInscrits = this.state.total;
    const nbRestant = nbTotal - totalInscrits;
    return (
      <TableRow key={this.props.idAtelier}>
        <TableCell component="th" scope="row">
          {this.props.nomAtelier}
        </TableCell>
        <TableCell numeric>{nbTotal}</TableCell>
        <TableCell numeric>{totalInscrits}</TableCell>
        <TableCell numeric>{nbRestant}</TableCell>
      </TableRow>
    );
  }
}

export default RowAtelier;
