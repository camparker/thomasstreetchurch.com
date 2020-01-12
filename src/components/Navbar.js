import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/navbar-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent tsc-nav"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Thomas Street Church Logo" style={{ width: '128px'}} />
            </Link>
            {/* Hamburger menu */}
            {/* eslint-disable-next-line */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/faith">
                Mission Statement
              </Link>
              <Link className="navbar-item" to="/about">
                Prayer Requests
              </Link>
              <Link className="navbar-item" to="/blog">
                News
              </Link>
              <Link className="navbar-item" to="/contact">
                Core Beliefs
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Services
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
