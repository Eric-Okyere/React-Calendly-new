import React from 'react'
import logo from "../Sos/logo.png"


function Navbar() {
  return (
    <>
    <div className="col-md-12 vou">
    <nav className="navbar navbar-expand-lg navbar-light">
    <img src={logo} class="img-responsive haw" alt=""/>
    <a className="nav-link ro" href="#top"><h3 className="po"> Calendly Website</h3><span className="sr-only" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       More </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">

            </li>
            <li className="nav-item">
              <a className="nav-link" href="#individuals"><b>Individuals</b></a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#Team"><b>Teams</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#enterprise"><b>Enterprise</b></a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar