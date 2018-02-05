import React from 'react';

const Issue = () => (
  <div>
    <h4>If you come from Home Page by the link (client only) the JSS and the markup renders OK</h4>
    <h4>When you click "remove SSR styles", Nothing happens, there is no SSR-JSS</h4>
    <h4>Now, if you reload the page ( on /dashboard ) The display is OK</h4>
    <h4>But If you click "remove SSR styles", The display is not OK </h4>
    <h4>This is because the SSR-JSS was rendered twice on the server, and the markup refers to the last SSR-JSS render</h4>
    <h4>To avoid this there is a property to pass to MuiThemeProvider "disableStylesGeneration"</h4>
    <h4>But what if I dont want to have MuiThemeProvider at the root of my App ?</h4>
    <h4>Here, in the most cases, the visitor will only hit the home page, so no need to make the server render an useless component!</h4>
    <h4>Also, what if I got the multiple MuiThemeProvider pattern ?</h4>
    <h4>The solution would be to make MuiThemeProvider get the "disableStylesGeneration" from context, and use that if no props are provided</h4>
    <h4>Then, we just have to make a {`<NoStyles/>`} component which takes a disable bool prop </h4>
    <h4>The component just inject the disableStylesGeneration value in the context depending on the value of his disable prop</h4>
  </div>
);

export default Issue;