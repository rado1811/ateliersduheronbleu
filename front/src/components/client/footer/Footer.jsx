import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavLink from 'react-router-dom/NavLink';
import './footer.css';

const Footer = () => (
  <div className="Footer" style={{ backgroundColor: 'none', padding: '50px 20px 20px 20px' }}>
    <div className="mui-container mui--text-center">
      <Grid container alignItems="center">
        <Grid item xs={3} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center', margin: '15px' }}>
            <NavLink to="/Ateliers" style={{ textDecoration: 'none', color: 'black' }}>CGV</NavLink>
          </li>
        </Grid>
        <Grid item xs={6} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center', color: 'black' }}>
            <a href="https://www.reserve-ornithologique-du-teich.com/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color: 'black' }}>
              Réserve ornithologique du Teich
            </a>
          </li>
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: 'none' }}>
          <li style={{ listStyleType: 'none', textAlign: 'center', color: 'black' }}>
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
