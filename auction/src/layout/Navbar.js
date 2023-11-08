import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light p-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <i className="fa fa-university" aria-hidden="true"></i>
                  &nbsp; BIDBRICK
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink id="navlink" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink id="navlink" className="nav-link active" aria-current="page" to="/form">Log Property</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink id="navlink" className="nav-link active" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink id="navlink" className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;