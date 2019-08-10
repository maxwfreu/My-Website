import React from 'react';
import ProjectItem from './ProjectItem';
import '../../static/styles/projects.scss';

const Projects = () => (
  <dl className="projects">
    <ProjectItem
      title="Scrumptious"
      description="Chrome extension that turns your new tab into a kanban board"
      url="https://www.scrumptioustab.com"
      stack={[
        'react',
        'nextjs',
        'scss',
        'chrome-extension-api',
        'circle-ci',
      ]}
    >
      <p>
        Replace your new tab with a personal dashboard visualizing your tasks and progress on projects or personal to-do lists.
        All without opening another app.
      </p>
    </ProjectItem>
    <ProjectItem
      title="Scrumptious Blog"
      description="A website where all Scrumptious related blogs go"
      url="https://blog.scrumptioustab.com"
      stack={[
        'react',
        'gatsby',
        'netlify',
      ]}
    >
      <p>
        I set this blog up with gatsby + netlify CMS so non-technical members of the team could easily create blog posts without my involvement.
      </p>
    </ProjectItem>
    <ProjectItem
      title="Terrarium-Pi"
      description="A terrarium monitored by a raspberry pi"
      url="/terrarium"
      stack={[
        'raspberry-pi',
        'python',
        'dirt',
        'moss',
        'plants',
        'bugs',
      ]}
      prefetch
    >
      <p>
        This is a bio-active Terrarium I built and put in my living room. I set up a raspberry pi that runs a cron job to snap a picture of the Terrarium every day at noon.
      </p>
    </ProjectItem>
    <ProjectItem
      title="This Website"
      description="The website you are currently on"
      url="https://github.com/maxwfreu/My-Website"
      stack={[
        'nextjs',
        'netlify',
        'scss',
      ]}
    >
      <p>
        This is a small static website I use as a place to link to projects that I work on or articles that I publish.
      </p>
    </ProjectItem>
  </dl>
);

export default Projects;
