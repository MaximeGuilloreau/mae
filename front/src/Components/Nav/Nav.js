import React, { Component } from 'react';
import logo from '../../Assets/svg/logo.svg'

class Nav extends Component {

  state = {
    isTransparency: true,
  }

  nav = React.createRef();

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.setState({
        isTransparency: false,
      });

      return;
    }

    this.setState({
      isTransparency: true,
    });
  }

  render() {
    const classNamesNav = ['navbar', 'navbar-expand-lg', 'navbar-light', 'fixed-top'];
    if (!this.state.isTransparency) {
      classNamesNav.push('navbar-shrink');
    }

    return (
      <nav
        className={classNamesNav.join(' ')}
        id="mainNav"
        ref={this.ref}
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src={logo} alt="" width="60" height="60" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button" data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Hebergement</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Infos pratique</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Gallerie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#weedinglist">Liste de Mariage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    );
  }
}

export default Nav;