import React from 'react'; // ✅ Add this
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
    <BrowserRouter> {/* ✅ Wrap your App here */}
      <App />
    </BrowserRouter>
)
