export default (html, css) =>
`
  <!doctype html>
  <html>
    <head>
      <title>Material-UI</title>
      <style>html{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
      }</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <style id="jss-server-side">${css}</style>
      <script src="/client.js"></script>
    </body>
  </html>
`