import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Homepage from './pages/Homepage'
import Errorpage from './pages/Errorpage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Errorpage />,
    },
    {
      path: "/home",
      element: <Homepage />,
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
