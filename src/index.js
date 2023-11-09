import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Create, {blogCreateAction} from './components/blog/Create';
import BlogList from './components/blog/BlogList';
import App, { loadBlogs } from './layout/App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} loader={loadBlogs}>
      <Route path="/" element={<Home />}/>
      <Route path="/blog/create" element={<Create />} action={blogCreateAction} />
      <Route index path="/blog/list" element={<BlogList />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


