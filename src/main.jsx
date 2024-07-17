import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routers from './pages/Routers/Routers.jsx';
import AuthProvider from './pages/provider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers} />
    </AuthProvider>
  </React.StrictMode>,
)
