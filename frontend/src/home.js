import React from 'react';
import hotelPic from './hotelpic.jpg';

function HomePage() {
  return (
    <>
  
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">HOTEL-UP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="./home.html">Home</a>
              <a className="nav-link" href="./admin">admin</a>
              <a className="nav-link" href="./about.html">about-us</a>
              <a className="nav-link" href="./signup">signup</a>
              <a className="nav-link" href="/">signin</a>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <div>
      <img src={hotelPic} alt="hotelpic" height="700px" width="1700px" />
      </div>
      <br />
      <footer className="footer">
  <div className="container1">
    <div className="row">
      <div className="col-md-3">
        <h4>company</h4>
        <ul>
          <li><a href="./about.html">about us</a></li>
          <li><a href="#">our services</a></li>
          <li><a href="#">privacy policy</a></li>
          <li><a href="#">affiliate program</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>get help</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">room status</a></li>
          <li><a href="#">checkout</a></li>
          <li><a href="#">room services</a></li>
          <li><a href="#">payment options</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>other services</h4>
        <ul>
          <li><a href="#">cabs</a></li>
          <li><a href="#">laundry</a></li>
          <li><a href="#">massage</a></li>
          <li><a href="#">party</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}

export default HomePage;
