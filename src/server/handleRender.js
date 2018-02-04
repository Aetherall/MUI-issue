import React from 'react';
import { renderToString } from 'react-dom/server'
import { SheetsRegistry, JssProvider } from 'react-jss';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';

import renderFullPage from './renderFullPage';

import App from '../../app';

export default ( req, res ) => {

  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Create a theme instance.
  const theme = createMuiTheme();

  const generateClassName = createGenerateClassName();

  // Render the component to a string.
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  )

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))

}