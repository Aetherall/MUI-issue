import React from 'react';

import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';

import AppBar from './AppBar';
import Issue from './Issue';


const theme = createMuiTheme()

const styles = {
  root: {
    backgroundColor: 'red'
  }
};

const RedButton = withStyles(styles)(Button);


const removeSSRstyles = () => {
  const jssStyles = document.getElementById('jss-server-side');
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
}


const App = () => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()} >
    <div>
      <AppBar/>
      <Button raised >Button</Button>
      <RedButton raised >RED Button withStyles</RedButton>
      <Button raised onClick={removeSSRstyles} >remove SSR styles</Button>
      <Issue/>
    </div>
  </MuiThemeProvider>
);

export default App;