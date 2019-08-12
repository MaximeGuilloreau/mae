import React from 'react'
import churchPicto from '../../Assets/svg/church.svg';
import dinerPicto from '../../Assets/svg/diner.svg';
import cocktailPicto from '../../Assets/svg/cocktail.svg';
import Plan from '../Plan/Plan'

const PracticalInfo = () =>
<section id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading">Infos Pratique</h2>
        <hr className="my-4" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 text-center">
        <div className="service-box mt-5 mx-auto">
          <img src={churchPicto} alt="" />
          <h3 className="mb-3">15H</h3>
          <p className="text-muted mb-0">
          La cérémonie religieuse aura lieu à l’église de Murs Erigné, 16 rue de l’église 49610 Murs Erigné.
Il y a quelques places de parking juste devant l’église mais vous en trouverez 500m plus loin au parking du biocoop ou encore de l’hyper U.

          </p>
          <Plan
            imageName="plan_eglise.png"
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="service-box mt-5 mx-auto">
          <img src={dinerPicto} alt="" />
          <h3 className="mb-3">18h</h3>
          <p className="text-muted mb-0">
          Les festivités continueront au Château de l’Eperonnière, 49190 Rochefort sur Loire.
Le parking est assez grand pour vous accueillir.

          </p>
          <Plan
            imageName="plan_chateau.png"
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="service-box mt-5 mx-auto">
          <img src={cocktailPicto} alt="" />
          <h3 className="mb-3">10H30</h3>
          <p className="text-muted mb-0">
          Enfin pour conclure en beauté nous vous attendrons au Brunch le dimanche matin, également au château.

          </p>
        </div>
      </div>
    </div>
  </div>
</section>

export default PracticalInfo