import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';

const router = createBrowserRouter([
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
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
