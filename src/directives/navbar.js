import React from 'react'

const Navbar = () => {
  return (
    <>

      {/*header area start*/}
      <input type="checkbox" id="check" />

      <header>
        <div className='header-section'>
          <img className='header-img' src='assets/images/logo.png' />
        </div>
        <label htmlFor="check">
          <i className="fa fa-bars" aria-hidden="true" id="sidebar_btn" />

        </label>

        <div className="nav-right_area">
          {/* <a href=''><i class="fa fa-user" aria-hidden="true"></i> Your are connected as admin .</a> */}
          {/* <select className='lang'>
            <option>EN-English</option>
            <option>HE-עברית </option>
            <option>PT-Portugues</option>
            <option>RU-Russian </option>
            <option>ZH-Chinese </option>
            <option>HR-Croatian-Serbian-Bosonian </option>
            <option>IT-Italian </option>
            <option>MS-English </option>
            <option>FR-Français </option>
          </select> */}
          {/* <a href="#"><img src="assets/images/img/user.jpeg" alt="user"/>&nbsp;&nbsp;Admin</a> */}
          <div className="btn-group">
            <button type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a href="#"><img src="assets/images/img/user.jpeg" alt="user" />&nbsp;&nbsp;Admin</a>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
            <a href='profile'><button className="dropdown-item" type="button"><i class="fa fa-pencil" /> Profile</button></a>
              <a ><button className="dropdown-item" type="button"><i class="fa fa-sign-out" /> Logout</button></a>
            </div>
          </div>
        </div>
      </header>
      {/*header area end*/}
    </>
  )
}

export default Navbar