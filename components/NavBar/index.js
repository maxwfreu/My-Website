import React from 'react';
import Link from 'next/link'
import '../../static/styles/nav.scss';

const NavBar = () => (
  <nav>
    <h1>
      <Link href="/">
        <a> Max Freundlich</a>
      </Link>
    </h1>
    <ul>
      <li>
        <Link href="/#about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/#articles">
          <a>Articles</a>
        </Link>
      </li>
      <li>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;