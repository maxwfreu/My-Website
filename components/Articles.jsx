const ARTICLES = [
  {
    name: "Speed up your Jest tests with shards",
    date: "2022",
    dateTime: "2022-04-04",
    href: "https://medium.com/@mfreundlich1/speed-up-your-jest-tests-with-shards-776e9f02f637",
  },
  {
    name: "You should probably be paying closer attention to your CI build times",
    date: "2022",
    dateTime: "2022-04-03",
    href: "https://medium.com/@mfreundlich1/you-should-probably-be-paying-closer-attention-to-your-ci-build-times-64f9345ab441",
  },
  {
    name: "Syncing LocalStorage across multiple tabs",
    date: "2019",
    dateTime: "2019-04-21",
    href: "https://medium.com/@mfreundlich1/syncing-localstorage-across-multiple-tabs-cb5d0b1feaab",
  },
  {
    name: "Building a website with Next.js + Netlify",
    date: "2018",
    dateTime: "2018-11-24",
    href: "https://medium.com/@mfreundlich1/building-a-website-with-next-js-netlify-2ca007c75933",
  },
  {
    name: "Publishing a React Package to NPM",
    date: "2019",
    dateTime: "2019-04-31",
    href: "https://medium.com/@mfreundlich1/publishing-a-react-package-to-npm-4885dcbd02ac",
  },
];
const Articles = () => (
  <ul>
    {ARTICLES.map((article) => (
      <li
        className="flex justify-between my-4 text-sm md:text-lg"
        key={article.name}
      >
        <a className="text-blue-300" href={article.href} target="_blank">
          <h3 className="underline">{article.name}</h3>
        </a>
        <span>
          <time dateTime={article.dateTime}>{article.date}</time>
        </span>
      </li>
    ))}
  </ul>
);

export default Articles;
