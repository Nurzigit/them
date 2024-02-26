import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserSettingsProvider } from './components/UserSettingsContext';
import { BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <UserSettingsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </UserSettingsProvider>
  
);

