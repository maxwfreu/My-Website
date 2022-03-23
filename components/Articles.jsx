const ARTICLES = [
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
  },
];
const Articles = () => (
  <ul>
    {ARTICLES.map((article) => (
      <li className="flex justify-between my-4" key={article.name}>
        <a href={article.href} target="_blank">
          <h4 className="underline text-lg">{article.name}</h4>
        </a>
        <span>
          <time dateTime={article.dateTime}>{article.date}</time>
        </span>
      </li>
    ))}
  </ul>
);

export default Articles;
