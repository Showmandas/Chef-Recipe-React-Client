/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  // console.log(user?.photoUrl);
  const handleLogout=()=>{
    logOut()
    .then()
    .catch(error=>console.log(error))
  }
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
            <NavLink to={'/'} className={({isActive})=> isActive ? "text-warning nav-link rounded" : "nav-link"}>Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to={'blog'} className={({isActive})=> isActive ? "text-warning nav-link rounded" : "nav-link"}>Blog</NavLink>
        </li>
        <li>{user && <i title={user?.email} className="fa-solid fa-user mt-3 px-3"></i>}</li>
        <li className="nav-item px-3 py-1">
          {user ? <NavLink onClick={handleLogout}><button type="button" class="btn btn-outline-warning bg-warning-subtle text-dark fw-bold">Logout</button></NavLink> :<NavLink to={'login'}><button type="button" class="btn btn-outline-warning bg-warning-subtle text-dark fw-bold">Log in</button>
</NavLink>}
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;