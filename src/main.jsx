import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthContexProvider } from "./Context/authContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>,
)
