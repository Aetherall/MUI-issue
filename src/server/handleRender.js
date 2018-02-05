import React from 'react';

import { renderToString } from 'react-dom/server';
import { getDataFromTree } from 'react-apollo';

import { StaticRouter } from 'react-router';


import { SheetsRegistry, JssProvider } from 'react-jss';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';

import renderFullPage from './renderFullPage';

import App from '../../app';

const Root = (sheetsRegistry, generateClassName, location) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  </JssProvider>
)

export default async ( req, res, next ) => {

  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Create a theme instance.
  const theme = createMuiTheme();

  const generateClassName = createGenerateClassName();

  const root = Root(sheetsRegistry, generateClassName, req.url);
  
  await getDataFromTree(root)

  // Render the component to a string.
  const html = renderToString(root)

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))

}