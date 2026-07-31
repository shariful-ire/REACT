import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Hero from './Component/Hero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Hero",
    element: <Hero />,
  }
]);


createRoot(document.getElementById('root')).render(
  
   <StrictMode>
     <RouterProvider router={router} />
   </StrictMode>,
)
