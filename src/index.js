import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/blog/Create';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: "blog/create",
        element: <Create/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


