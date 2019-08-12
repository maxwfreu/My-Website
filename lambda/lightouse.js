const chromeLauncher = require('chrome-launcher');
const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
// import fetch from "node-fetch";
// const request = require('request');
// const util = require('util');

exports.handler = async(event, context) => {

  const URL = 'https://www.scrumptioustab.com';

  const opts = {
    chromeFlags: ['--headless'],
    logLevel: 'info',
    output: 'json'
  };
  // const resp = await fetch(URL);

  // Launch chrome using chrome-launcher.
  // const chrome = await chromeLauncher.launch(opts);
  // opts.port = chrome.port;

  // // Connect to it using puppeteer.connect().
  // const resp = await util.promisify(request)(`http://localhost:${opts.port}/json/version`);
  // const {webSocketDebuggerUrl} = JSON.parse(resp.body);
  // const browser = await puppeteer.connect({browserWSEndpoint: webSocketDebuggerUrl});

  // // Run Lighthouse.
  // const {lhr}  = await lighthouse(URL, opts, null);
  // // console.log(`Lighthouse scores: ${Object.values(lhr.categories).map(c => c.score).join(', ')}`);

  // await browser.disconnect();
  // await chrome.kill();
  return {
    statusCode: 200,
    body: "Hello, World lol"
  };
};

// exports.handler();