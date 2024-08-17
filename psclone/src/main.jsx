import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FileProvider} from "./providers/file";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "edit",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FileProvider>
      <RouterProvider router={router} />
      </FileProvider>
  </React.StrictMode>,
)
