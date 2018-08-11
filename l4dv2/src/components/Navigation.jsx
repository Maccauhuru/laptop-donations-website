import React from 'react'

export default () => {
  return (
    <React.Fragment>
      <header>
          <nav class="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div class="container">
            <a href="#home" class="navbar-brand text-white">
                <img src={require('../img/mlogo.png')} className="pr-2" width="50" height="50" alt="" />
                <h3 class="d-inline align-middle">laptop-donations.org</h3>
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#how" class="nav-link text-white">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#faq" class="nav-link text-white">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link text-white">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="#login" class="nav-link text-white">Login</a>
                    </li>
                   <li class="nav-item">
                        <a href="#signup" class="nav-link text-white">Sign Up</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
      </header>
    </React.Fragment>
  )
}
