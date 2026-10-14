import React from 'react';
import ReactDOM from 'react-dom/client';
import Newsletter from './components/Newsletter.jsx';
import './styles/newsletter.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Newsletter openingDate="2027-01-01T09:00:00" />
  </React.StrictMode>
);
