import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import User from '../pages/user/User';
import Users from '../pages/users/Users';

import Product from '../pages/product/Product';
import Products from '../pages/products/Products';

import Layout from '../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: '/users/:id',
        element: <User />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
