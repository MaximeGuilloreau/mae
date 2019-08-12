import React from 'react'

const Header = () =>
<header className="masthead text-center text-white d-flex">
  <div className="container my-auto">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <h1 className="text-uppercase txt-pink">
          Eurydice et Arnaud
        </h1>
        <hr />
      </div>
      <div className="col-lg-8 mx-auto">
        <p className="text-faded mb-5 txt-blue">
          31 Août 2019
        </p>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Découvrir</a>
      </div>
    </div>
  </div>
</header>

export default Header;