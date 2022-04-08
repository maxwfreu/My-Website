const PROJECTS = [
  {
    name: "Auger Metrics",
    date: "2022",
    dateTime: "2022-04-04",
    href: "https://www.augermetrics.com",
    description: `Auger is an ongoing side project of mine. My goal is to build a
    platform that can seemlessly integrate with an existing CI/CD
    pipeline and report build time statistics overtime. Auger will
    notify developers via comment on a PR when a test suites execution
    time has exceeded the average duration. This way developers can
    quickly catch long running tests and actively reduce CI execution
    time rather waiting for build times to grow out of control.`,
  },
  {
    name: "Scrumptious",
    date: "2022",
    dateTime: "2022-04-03",
    href: "https://www.scrumptioustab.com/",
    description: `Scrumptious Tab was a chrome extension that converts your new tab
    into a kanban board. As someone who is hyper-focused on
    productively I wanted to optimize workflow anyway I could. I
    wanted a feature rich kanban board that loaded instantly and
    didn't an internet connection. At it's prime, Scrumptious had over
    1000 daily active users. Eventually I opted to make it`,
  },
];
const Projects = () => (
  <ul>
    {PROJECTS.map((project) => (
      <li className="my-4 text-sm md:text-lg" key={project.name}>
        <div className="flex justify-between ">
          <a className="text-blue-300" href={project.href} target="_blank">
            <h3 className="underline text-base md:text-lg">{project.name}</h3>
          </a>
          <span>
            <time dateTime={project.dateTime}>{project.date}</time>
          </span>
        </div>
        <p className="mt-4">{project.description}</p>
      </li>
    ))}
  </ul>
);

export default Projects;
