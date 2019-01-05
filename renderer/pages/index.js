import React from 'react';

import getPic from '../services/puppeteer';

export default () => (
  <div>
    <h1>electron-puppeteer-react-boilerplate</h1>
    <br />
    <button onClick={() => getPic('https://google.com')} type="button">Click for pic</button>
  </div>
);
