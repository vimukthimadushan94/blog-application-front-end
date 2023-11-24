import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Create, {blogCreateAction} from './components/blog/Create';
import App from './layout/App';
import { loadBlogs } from './components/blog/BlogList';
import Home from './components/Home';
import Edit, { loadPost, postUpdateAction } from './components/blog/Edit';
import ErrorPage from './components/ErrorPage';
import Login from './components/auth/Login';
import CreateCategory from './components/category/CreateCategory';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage/>} path="/">
      <Route element={<Login/>} path='login'/>
      <Route element={<CreateCategory/>} path='category/create'/>
      <Route element={<Home/>} path="/" loader={loadBlogs}/> 
      <Route element={<Create />} path="/blog/create" action={blogCreateAction}/>
      <Route element={<Edit/>} path='blog/:id/edit' loader={loadPost} action={postUpdateAction}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);


