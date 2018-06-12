import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavLink from 'react-router-dom/NavLink';
import './footer.css';

const Footer = () => (
  <div className="Footer" style={{ backgroundColor: 'none', height: '200px' }}>
    <div className="mui-container mui--text-center">
      <Grid container alignItems="center" style={{ height: '200px' }}>
        <Grid item xs={3} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center', margin: '15px' }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>Accueil</NavLink>
          </li>
          <li style={{ listStyleType: 'none', textAlign: 'center', margin: '15px' }}>
            <NavLink to="/Ateliers" style={{ textDecoration: 'none' }}>Ateliers</NavLink>
          </li>
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center', margin: '15px' }}>
            <NavLink to="/Intervenants" style={{ textDecoration: 'none' }}>Intervenants</NavLink>
          </li>
          <li style={{ listStyleType: 'none', textAlign: 'center', margin: '15px' }}>
            <NavLink to="/Concept" style={{ textDecoration: 'none' }}>Concept</NavLink>
          </li>
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center', margin: '15px' }}>
            <NavLink to="/Contact" style={{ textDecoration: 'none' }}>Contact</NavLink>
          </li>
          <li style={{ listStyleType: 'none', textAlign: 'center' }}>
            <a href="https://www.reserve-ornithologique-du-teich.com/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
              Réserve ornithologique du Teich
            </a>
          </li>
        </Grid>
        <Grid item xs={2} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center' }}>
            <a href="https://www.facebook.com/lesateliers.heronbleu/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
              <i className="icon icon-fb">
                <img src="/icones/fb2.svg" alt="LogoFB" />
              </i>
            </a>
          </li>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Footer;
