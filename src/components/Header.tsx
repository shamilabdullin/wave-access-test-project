import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Perfect Car
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/activeList">
                  Машины в очереди
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/inactiveList">
                  Машины, прошедшие ТО
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
