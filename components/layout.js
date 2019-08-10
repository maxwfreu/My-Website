import React from 'react';
import NavBar from './NavBar';
import '../static/styles/layout.scss';

const Layout = props => (
  <div>
    <NavBar />
    <div className="content">
      {props.children}
    </div>
  </div>
);

export default Layout;