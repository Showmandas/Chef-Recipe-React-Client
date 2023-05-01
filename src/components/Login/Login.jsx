/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container my-5 mb-5'>
            <div className="row w-50 d-flex justify-content-center mx-auto bg-warning">
                <h2 className='p-3 text-center'>Please Log in</h2>
            <form className='w-100 bg-warning p-5 mb-3'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name='email' placeholder='enter your email' required/>
  </div>
  <div class="mb-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name='password' required placeholder='enter your password' />
  </div>
  <button type="submit" class="btn bg-warning-subtle fw-bold d-flex w-25 justify-content-center align-items-center mx-auto fs-5">Log in</button>
</form>
<div className='mb-3'>
    <p className='fs-5 text-center'>Don't have account ? please <Link className='text-decoration-none'>Register</Link></p>
</div>
<div className='d-flex flex-column gap-4 w-50 mb-5'>
                <button className='btn bg-dark text-white fs-5'><i class="fa-brands fa-google"></i> &nbsp;sign in with Google</button>
                <button className='btn bg-dark text-white fs-5'><i class="fa-brands fa-github"></i> &nbsp;sign in with Github</button>
            </div>
            </div>
           
        </div>
    );
};

export default Login;