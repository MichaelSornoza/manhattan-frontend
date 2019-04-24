import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderDetail from '../components/DetailList';

import './Header.scss';

class Header extends Component {
  state = {
    details: [
      {
        name: 'Michael'
      },
      {
        name: 'Testing'
      },
      {
        name: 'Enzo'
      }
    ]
  };
  componentDidMount() {
    this.responsive();
  }
  responsive = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  };
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <p className="subtitle navbar-item">BrandName</p>
            <span
              role="button"
              className="navbar-burger burger is-dark"
              data-target="navMenu"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <Link href="" className="navbar-item">
              Panel
            </Link>
            <Link href="" className="navbar-item">
              Productos
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">Facturas Abiertas</p>
              <HeaderDetail details={this.state.details} />
            </div>
            <Link className="navbar-item">Registros</Link>
            <Link className="navbar-item" to="/team">
              Equipo
            </Link>
            <Link className="navbar-item">Configuraciones</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
