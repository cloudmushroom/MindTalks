import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href='#!'>
<<<<<<< HEAD
          <i className='fas fa-sign-out-alt' />{' '}
=======
          <i className='fas fa-sign-out-alt'></i>{' '}
>>>>>>> 9bba0b417556ee2410ca416e5845c29976d72d53
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
<<<<<<< HEAD
        <Link to='/profiles'>Developers</Link>
=======
        <a href='#!'>Developers</a>
>>>>>>> 9bba0b417556ee2410ca416e5845c29976d72d53
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
<<<<<<< HEAD
          <i className='fas fa-code' /> Ooo Aćime
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
=======
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks} </Fragment>
>>>>>>> 9bba0b417556ee2410ca416e5845c29976d72d53
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

<<<<<<< HEAD
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
=======
const mapsStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapsStateToProps,
  { logout }
)(Navbar);
>>>>>>> 9bba0b417556ee2410ca416e5845c29976d72d53
