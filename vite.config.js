import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'microFrontend01',
      remotes: {
        microFrontend01: 'microFrontend01@http://localhost:5174/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});


// export default defineConfig({
//   server: {
//     port: 5173,  // Your host application will run on this port
//   },
//   plugins: [
//     react(),
//     federation({
//       name: 'hostApplication',
//       remotes: {
//         cxAnalytics: 'cxAnalytics@http://localhost:5001/assets/remoteEntry.js', // URL to the remote entry
//       },
//       shared: {
//         'react': { singleton: true, requiredVersion: '^17.0.0' }, // Make sure versions match
//         'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
//         'react-apexcharts': { singleton: true, requiredVersion: '^1.3.9' }, // Specify versions for shared dependencies
//       },
//     }),
//   ],
// });
