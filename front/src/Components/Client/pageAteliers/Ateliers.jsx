import React, { Component } from 'react';
import UserList from '../../../containers/UserList';
import UserDetail from '../../../containers/UserDetail';
import Grid from 'material-ui/Grid';

class Ateliers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <div>
              <Grid container>
                  <Grid item xs={2}>
                      <UserList />
                    </Grid>
                  <Grid item xs={10}>
                      <UserDetail />
                    </Grid>
                </Grid>
            </div>
    );
  }
}

export default Ateliers;
