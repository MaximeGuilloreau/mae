import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import configureStore from './Store/configureStore'
import 'startbootstrap-creative/vendor/bootstrap/css/bootstrap.css';
import 'startbootstrap-creative/css/creative.css';
import 'startbootstrap-creative/vendor/fontawesome-free/css/all.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Page/home';
import AcommodationPage from './Components/Page/AcommodationPage';
import './App.css';
import {
  IntlProvider,
} from 'react-intl';
import initializeLocale from './i18n';

initializeLocale();
const store = configureStore();

class App extends Component {
  render() {
    return (
      <IntlProvider
        locale={'fr'}
      >
        <Provider store={store}>
          <div id="page-top" className="App">
            <Nav/>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hebergement" component={AcommodationPage} />
              </Switch>
          </BrowserRouter>
        </div>
      </Provider>
      </IntlProvider>
    );
  }
}

export default App;
