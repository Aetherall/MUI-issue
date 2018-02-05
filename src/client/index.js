import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import App from '../../app';

const renderRoot = (Root) => {

  const toRender = (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )

  render(toRender, document.querySelector('#root'));
}

renderRoot(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../../app', () => { 
    const app = require('../../app').default;
    renderRoot(app)
  })
}