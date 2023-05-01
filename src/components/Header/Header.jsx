/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BongChef</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link><button type="button" class="btn btn-outline-light">Log in</button>
</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;