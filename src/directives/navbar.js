import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import  logo from "../assets/images/logo.png";
import userPhoto from "../assets/images/img/user.jpeg";

const Navbar = () => {

  const history = useHistory();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://nearbyplaceadminpanner.onrender.com/api/v1/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        localStorage.removeItem('token');
        history.push('/');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.log(error);
      // display an error message to the user
    }
  };

  return (
    <>

      {/*header area start*/}
      <input type="checkbox" id="check" />
      <header>
        <div className='header-section'>
          <img className='header-img' src={logo} alt="logo"/>
        </div>
        {/* <label htmlFor="check">
          <i className="fa fa-bars" aria-hidden="true" id="sidebar_btn" />
        </label> */}
        <div className="nav-right_area">
          <div className="btn-group">
            <button type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a href="#"><img src={userPhoto} alt="user" />&nbsp;&nbsp;Admin</a>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to='/profile'><button className="dropdown-item" type="button"><i class="fa fa-pencil" /> Profile</button></Link>
              <a ><button className="dropdown-item" type="button" onClick={handleLogout}><i class="fa fa-sign-out" /> Logout</button></a>
            </div>
          </div>
        </div>
      </header>
      {/*header area end*/}
    </>
  )
}

export default Navbar