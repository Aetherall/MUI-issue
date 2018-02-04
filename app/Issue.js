import React from 'react';

const Issue = () => (
  <div>
    <h3>The SSR-JSS renders OK on the client the first time.</h3>
    <h3>When you click "remove SSR styles", The JSS is OK</h3>
    <h3>When you refresh the client, the SSR-JSS renders OK but Redbutton is not red anymore</h3>
    <h3>When you click "remove SSR styles", The JSS has mismatches</h3>
    <h3>If make the server hot reload by saving a file, everything start over</h3>
  </div>
);

export default Issue;