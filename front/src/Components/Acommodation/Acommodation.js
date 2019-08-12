import React from 'react';
import { Link } from 'react-router-dom'

const Accommodation = () =>
<section className="bg-blue" id="about">
<div className="container">
  <div className="row">
    <div className="col-lg-8 mx-auto text-center">
      <h2 className="section-heading text-white">Hebergements</h2>
      <hr className="light my-4" />
      <p className="text-faded mb-4">Pour que cet évènement soit des plus parfait, nous vous avons sélectionné une liste non exhaustive des endroits où vous pouvez séjourner</p>
      <Link className="btn btn-light btn-xl js-scroll-trigger" to="/hebergement" >Allez voir</Link>
    </div>
  </div>
</div>
</section>

export default Accommodation;