import React, {Component} from 'react';
import './atelierHome.css';
import AtelierVignette from './atelierVignette';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit
  }
});

class AtelierHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atelier: [
        {
          id: 'atelier1',
          name: 'Mieux gérer son stress au quotidien',
          date: '26 mai 2018',
          intervenant: 'Patrick Roumat',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFes7efbbxHGuEs1FYAQVi5kZ' +
              'tEv0cTRxrc6RlhA7OLmGLYgS6Q',
          descriptif: 'loreum ipsum bla bblabalalalabalbalaalb'
        }, {
          id: 'atelier2',
          name: 'Bien dans son assiette avec la Psycho-Naturopathie',
          date: '9 juin 2018',
          intervenant: 'Laurence Libert',
          image: 'http://decouverteetnature.d.e.pic.centerblog.net/31613f45.jpg',
          descriptif: 'loreum ipsum bla bblabalalalabalbalaalb'
        }, {
          id: 'atelier3',
          name: 'Cesser de Faire, Réapprendre à Etre',
          date: '16 juin 2018',
          intervenant: 'Patrick Roumat',
          image: 'https://canalrivertrust.org.uk/refresh/media/original/21505.jpg?v=629360',
          descriptif: 'loreum ipsum bla bblabalalalabalbalaalb'
        }, {
          id: 'atelier4',
          name: 'Ménopause : Rien ne s’oppose à la Vie !',
          date: '22 juin 2018',
          intervenant: 'Laurence Libert',
          image: 'http://a4.pbase.com/o6/92/749792/1/76606684.mWJfb932.grand_heron_bleu_1.jpg',
          descriptif: 'loreum ipsum bla bblabalalalabalbalaalb'
        }, {
          id: 'atelier5',
          name: 'Vivre aux rythmes des saisons ',
          date: '23 juin 2018',
          intervenant: 'Patrick Roumat',
          image: 'http://www.hotel-r.net/im/hotel/fr/le-h%C3%A9ron-bleu-24.jpg',
          descriptif: 'loreum ipsum bla bblabalalalabalbalaalb'
        }, {
          id: 'atelier6',
          name: 'Vacances d’été : La trousse Santé/Bien-être au naturel',
          date: '1 juillet 2018',
          intervenant: 'Laurence Libert',
          image: 'http://www.oiseauxparlacouleur.com/I/Grand_heron3.jpg',
          descriptif: 'loreum ipsum bla bblabalalalabalbalaalb'
        }
      ],

      showAteliers: false
    };
  }

  showAteliers = () => {
    const doesShow = this.state.showAteliers;
    this.setState({
      showAteliers: !doesShow
    });
  };

  hideAteliers = () => {
    const doesShow = this.state.showAteliers;
    this.setState({
      showAteliers: !doesShow
    });
  };

  render() {
    let firstAteliers = this
      .state
      .atelier
      .slice(0, 3);
    let upcomingAteliers = (

      <Grid container justify="center">
        {firstAteliers.map((atelier) => {
          return (<AtelierVignette
            key={atelier.name}
            name={atelier.name}
            date={atelier.date}
            image={atelier.image}
            intervenant={atelier.intervenant}
            descriptif={atelier.descriptif}/>);
        })}
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          onClick={this.showAteliers}>
          <AddIcon/>
        </Button>
      </Grid>
    );

    if (this.state.showAteliers) {
      upcomingAteliers = (
        <Grid container justify="center">
          {this
            .state
            .atelier
            .map((atelier) => {
              return (<AtelierVignette
                name={atelier.name}
                date={atelier.date}
                image={atelier.image}
                intervenant={atelier.intervenant}
                descriptif={atelier.descriptif}/>);
            })}
          <Button
            size="small"
            variant="fab"
            color="secondary"
            aria-label="add"
            onClick={this.hideAteliers}>
            <AddIcon/>
          </Button>
        </Grid>
      );
    }

    return (
      <div>
        <div style={{marginBottom: 100}}>
          <video id="background-video" style={{height: 'auto',
          width:'100%' }} loop muted autoPlay>
            <source src="../images/video.mp4" type="video/mp4"/>
            <source
              src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
              type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <Grid container spacing={16}>
          {upcomingAteliers}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AtelierHome);
