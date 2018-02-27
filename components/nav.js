import React, { Component } from 'react';
import Head from './head'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/maxwfreu', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

export default class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="container">
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul className="right">
            {links.map(
              ({ key, href, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </ul>
      </nav>
    );
  }
}