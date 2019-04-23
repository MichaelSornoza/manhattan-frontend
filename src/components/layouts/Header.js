import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  componentDidMount () {
    this.responsive();
  }
  responsive = () =>{
    let burger = document.querySelector('.burger')
    let nav = document.querySelector('#'+burger.dataset.target)
    burger.addEventListener('click', ()=> {
      burger.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    })
  }
  render () {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <a href="#" className="subtitle navbar-item">
              BrandName
            </a>
            <span role="button" class="navbar-burger burger is-dark" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
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
            <Link href="" className="navbar-item">
              Registros
            </Link>
            <Link href="" className="navbar-item">
              Configuraciones
            </Link>
          </div>
        </div>
        <style jsx>{`
          .navbar-item {
            color: white;
          }
          .navbar-menu {
            background-color: #363636 !important;
          }
        `}</style>
      </nav>
    )
  }
}

export default Header;
