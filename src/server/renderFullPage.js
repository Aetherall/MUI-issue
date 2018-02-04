export default (html, css) =>
`
  <!doctype html>
  <html>
    <head>
      <title>Material-UI</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <style id="jss-server-side">${css}</style>
      <script src="/client.js"></script>
    </body>
  </html>
`