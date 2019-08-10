import React from 'react';
import Link from 'next/link'
import DescriptiveSection from '../components/DescriptiveSection';
import Projects from '../components/Projects';
import '../static/styles/index.scss';

const Home = () => (
  <div>
    <DescriptiveSection title="About Me" identifier="about">
      <ul>
        <li>Software Engineer based in SF</li>
        <li>Stanford University, 2017</li>
      </ul>
    </DescriptiveSection>
    <DescriptiveSection title="Projects" identifier="projects">
      <Projects />
    </DescriptiveSection>
    <DescriptiveSection title="Articles" identifier="articles">
      <dl>
        <dt>
          <a href="https://medium.com/@mfreundlich1/syncing-localstorage-across-multiple-tabs-cb5d0b1feaab" target="_blank" rel="noopener noreferrer">Syncing LocalStorage across multiple tabs</a>
        </dt>
        <dd>
          I thought this was a neat thing I learned while developing a chrome extension and thought I'd do a short write up on it.
        </dd>
        <dt>
          <a href="https://medium.com/@mfreundlich1/building-a-website-with-next-js-netlify-2ca007c75933" target="_blank" rel="noopener noreferrer">Building a website with Next.js + Netlify</a>
        </dt>
        <dd>
          After making a few webites with Next.js and Netlify, I put this article together to help out other people who ventured down this path.
        </dd>
      </dl>
    </DescriptiveSection>
    <DescriptiveSection title="Get In Touch" identifier="contact">
      <dl>
        <dt>Email</dt>
        <dd>
          <a href="mailto:maxwfreu@alumni.stanford.edu" aria-label="Email">
            maxwfreu@alumni.stanford.edu
          </a>
        </dd>
      </dl>
    </DescriptiveSection>
  </div>
);

export default Home;