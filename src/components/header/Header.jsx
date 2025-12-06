import React from "react";
import logo from "../../assets/images/header-logo.png";
import "./header.css";
export default function Header() {
  return (
    <header className="  bg-white">
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand no-border-focus" href="#">
            <img src={logo} alt="logo" height="40" />
          </a>

          {/* Toggle button for offcanvas */}
          <button
            className="navbar-toggler border-0 no-border-focus"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-start d-lg-none bg-black text-light"
            tabIndex="-1"
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Landing
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Our Team
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop links (visible on large screens) */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="links nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="links nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="links nav-item">
                <a className="nav-link" href="#">
                  Landing
                </a>
              </li>

              <li className="links nav-item">
                <a className="nav-link" href="#">
                  Our Team
                </a>
              </li>

              <li className="links nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
