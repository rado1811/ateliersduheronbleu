import React from 'react';
import { Link } from 'react-router-dom';
import './BoutonContact.css';

const BouttonContact = () => (
  <div>
    <Link to="/contact">
      <button type="button" className="BoutonContact">
        Contact
      </button>
    </Link>
  </div>
);

export default BouttonContact;
