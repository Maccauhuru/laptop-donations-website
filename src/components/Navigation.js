import React from 'react'

const Navigation = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-sm navbar-dark bg-dark nav-border">
        <div class="container">

            <a class="navbar-brand" href="#">
            <img src="https://image.freepik.com/free-icon/instagram-logo_318-84939.jpg" height="50px" alt="logo" class="p-1"/>
                 LaptopDonations.Org</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link pr-5" href="#">How It Works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-5" href="#">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-5" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-5 disabled text-white">|</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-5" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-5" href="#">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navigation;