// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter as Router } from 'react-router-dom'

// import { Provider } from 'react-redux';
// import store from './store/index.js';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//       <Provider store={store}>
//     <App />
//     </provider>
//     </Router>
    
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'; // Ensure 'Provider' is capitalized
import store from './store/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}>  {/* Corrected: 'Provider' should be capitalized */}
        <App />
      </Provider> {/* Corrected: Ensure closing tag is also 'Provider' */}
    </Router>
  </StrictMode>,
);
