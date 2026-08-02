import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "../node_modules/react-router"
import "@fortawesome/fontawesome-free/css/all.min.css";




createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
