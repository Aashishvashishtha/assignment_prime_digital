import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="page-header row justify-center">
          <div className="col-md-6 col-lg-8">
              <h1 className="float-left text-center text-md-left">REACT REDUX</h1>
          </div>
          <div className="clear" />
      </header>
    );
  }
}

export default Header;
