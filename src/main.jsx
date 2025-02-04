import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <HelmetProvider><RouterProvider router={router}></RouterProvider></HelmetProvider>
      <Toaster position='top-center'/>
    </AuthProvider>
  </React.StrictMode>,
)
