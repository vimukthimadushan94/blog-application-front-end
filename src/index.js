import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Create, {blogCreateAction} from './components/blog/Create';
import App from './layout/App';
import { loadBlogs } from './components/blog/BlogList';
import Home from './components/Home';
import Edit from './components/blog/Edit';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<Home/>} path="/" loader={loadBlogs}/> 
      <Route element={<Create />} path="/blog/create" action={blogCreateAction}/>
      <Route element={<Edit/>} path='blog/:id/edit'/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


