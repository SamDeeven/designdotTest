import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className="navOuterContainer">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">/ in Job Sight</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">FIND JOBS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">FOR COMPANY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">PRICING</a>
        </li>
      </ul>
      <ul className="d-flex">
        <li className="nav-item" >POST YOUR JOB</li>
        <li>|</li>
        <li className="nav-item">LOGIN</li>
      </ul>
    </div>
  </div>
</nav>
        
    </div>
  )
}

export default Navbar