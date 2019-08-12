import React, {Fragment} from 'react'
import Header from '../Header/Header';
import acommodations from '../../data/acommodation';

class AcommodationPage extends React.Component {
  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <Fragment>
        <Header />
          <div className="container" >
            <div className="row">
              <div className="mx-auto text-center" >

        <p className="text-justify">
Cette liste n’est donc pas exclusive, nous vous laissons le soin de rechercher un lieu ou dormir si cela ne vous conviendrais pas.
Enfin pour tous les retardataires qui n’auraient rien trouvé ou qui auront manqué de temps pour réserver quelque chose, il est possible de dormir en tente derrière la salle de réception, en espérant qu’il fasse beau ce jour-là 😊
Les futurs mariés vous embrassent et sont pressés de vous retrouver pour le grand jour.

        </p>
              </div>
            </div>
          {acommodations.map(acommodation => {

            return (<Fragment>
                <section>
                  <div className="row" >
                    <div className="media">
                      <img src={require(`../../Assets/img/${acommodation.picture}`)} className="align-self-center mr-3" />
                      <div className="media-body">
                        <h5 className="mt-0">{acommodation.title}</h5>
                        <p>{acommodation.description}</p>
                        <address>
                        <span><i className="fa" ></i> {acommodation.website.join(' / ')}</span><br/>
                        <span><i className="fa fa-address-book" ></i> {acommodation.address}</span><br/>
                          {acommodation.city} <br />
                        <span><i className="fa fa-phone" ></i> {acommodation.phone}</span><br />
                      </address>
                      </div>
                    </div>
                  </div>

              </section>
              <hr/>
            </Fragment>
            )
          })}
            </div>
      </Fragment>
    )
  }
}

export default AcommodationPage;