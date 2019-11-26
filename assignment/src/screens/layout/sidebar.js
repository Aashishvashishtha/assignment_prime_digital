import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
          <ul className="nav nav-pills flex-column sidebar-nav">
              <li className="nav-item">
              <a className="nav-link"><Link to="/posts"><em className="fa fa-dashboard" />Posts </Link></a>
                <a className="nav-link"><Link to="/isFavourite=true"><em className="fa fa-dashboard" />Favourite Posts </Link></a>
              </li>
          </ul>
      </nav>
    );
  }
}

export default Sidebar;
