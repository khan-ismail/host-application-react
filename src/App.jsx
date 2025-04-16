// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { lazy, Suspense } from 'react';
import './App.css'
// const CxAnalyticsApp = lazy(() => import('cxAnalytics/App'));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading remote app...</div>}>
//       <CxAnalyticsApp />
//     </Suspense>
//   );
// }

// export default App;

// ------------------------------------- Test Application -----------------------------------
const MicroFrontend01 = lazy(() => import('microFrontend01/MicroFrontend01'));

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading Micro Frontend...</div>}>
        <MicroFrontend01 />
      </Suspense>
    </div>
  );
}

export default App;