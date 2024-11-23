import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/form">Questionnaire</Link></li> {/* Link to the questionnaire form */}
        <li><Link to="/resources">Resources</Link></li> {/* Link to the resource list page */}
      </ul>
    </nav>
  );
};

export default Navbar;
