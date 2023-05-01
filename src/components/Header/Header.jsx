/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
  <div className="container-fluid">
    <NavLink to={'/'} className="navbar-brand fw-bold text-warning fs-2">BongChef</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fs-5">
        <li className="nav-item">
            <NavLink to={'/'} className={({isActive})=> isActive ? "bg-warning-subtle nav-link rounded" : "nav-link"}>Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to={'blog'} className={({isActive})=> isActive ? "bg-warning-subtle nav-link rounded" : "nav-link"}>Blog</NavLink>
        </li>
        <li className="nav-item px-3 py-1">
          <NavLink><button type="button" class="btn btn-outline-warning bg-warning-subtle text-dark fw-bold">Log in</button>
</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;