import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';


const theme = createMuiTheme()

class PrintMuiContext extends React.Component{
  static contextTypes = {
      muiThemeProviderOptions: PropTypes.object
  }
  render(){
    console.log(this.props.name, this.context)
    return this.context.muiThemeProviderOptions.disableStylesGeneration 
      ? <div>style generation Disabled For {this.props.name} MuiThemeProvider</div>
      : <div>style generation Enabled For {this.props.name} MuiThemeProvider</div>
  }
}


const App = () => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()} disableStylesGeneration={true} >
    <div style={{backgroundColor: "rgba(255,0,0,0.2)"}}>
      <hr/>
        MuiThemeProvider root - start
      <hr/>
      <PrintMuiContext name={'root'}/>
      <hr/>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <div style={{backgroundColor: "rgba(0,0,255,0.2)"}}>
          <hr/>
            MuiThemeProvider nested - start
          <hr/>
          <PrintMuiContext name={'nested'}/>
          <hr/>
            MuiThemeProvider nested - end
          <hr/>
        </div>
      </MuiThemeProvider>
      <hr/>
        MuiThemeProvider root - end
      <hr/>
    </div>
  </MuiThemeProvider>
);

export default App;