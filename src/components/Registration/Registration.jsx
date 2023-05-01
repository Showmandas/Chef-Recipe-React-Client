/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='container my-5 mb-5'>
        <div className="row w-50 d-flex justify-content-center mx-auto bg-warning">
            <h2 className='p-3 text-center'>Please Register</h2>
        <form className='w-100 bg-warning p-5 mb-3'>
<div class="mb-3">
<label  className="form-label">Name</label>
<input type="text" class="form-control" id="name" name='name' placeholder='enter your name' required/>
</div>
<div class="mb-3">
<label  class="form-label">Email address</label>
<input type="email" class="form-control" id="email" name='email' placeholder='enter your email' required/>
</div>
<div class="mb-3">
<label  class="form-label">Password</label>
<input type="password" class="form-control" id="password" name='password' required placeholder='enter your password' />
</div>
<div class="mb-3">
<label  className="form-label">Photo Url</label>
<input type="text" class="form-control" id="photoUrl" name='photoUrl' placeholder='enter your photo url' required/>
</div>
<button type="submit" class="btn bg-warning-subtle fw-bold d-flex w-25 justify-content-center align-items-center mx-auto fs-5">Register</button>
</form>
<div className='mb-3'>
<p className='fs-5 text-center'>Already have account.please <Link to={'/login'} className='text-decoration-none'>Log in</Link></p>
</div>
        </div>
       
    </div>
    );
};

export default Registration;