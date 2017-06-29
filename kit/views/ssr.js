/* @flow */
/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
import React from 'react';

// ----------------------

// flow types
type PropsType = {
  head: Object,
  html: string,
  window: Object,
  scripts: Array<string>,
  css: string,
};

const Html = ({ head, html, scripts, window, css }: PropsType) => (
  <html lang="en" prefix="og: http://ogp.me/ns#">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {head.meta.toComponent()}
      <link rel="stylesheet" href={css} />
      {head.title.toComponent()}
    </head>
    <body>
      <div
        id="main"
        dangerouslySetInnerHTML={{ __html: html }} />
      <script
        dangerouslySetInnerHTML={{
          __html: Object.keys(window).reduce(
            (out, key) => out += `window.${key}=${JSON.stringify(window[key])};`,
          ''),
        }} />
      {scripts.map(src => <script key={src} src={src} />)}
    </body>
  </html>
);

export default Html;
