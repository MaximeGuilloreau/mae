import React from 'react'

const Contact = () =>
<section id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h2 className="section-heading">Contacter Nous</h2>
        <hr className="my-4" />
        <p className="mb-5">
        Si vous avez des interrogations, des demandes n’hésitez pas à nous contacter par mail
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 ml-auto text-center">
        <i className="fas fa-phone fa-3x mb-3 sr-contact-1"></i>
        <p>06.37.53.27.52 ou 06.70.93.71.73</p>
      </div>
      <div className="col-lg-4 mr-auto text-center">
        <i className="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
        <p>
          <a href="mailto:eurydicearnaud2019@gmail.com">Eurydicearnaud2019@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</section>

export default Contact;